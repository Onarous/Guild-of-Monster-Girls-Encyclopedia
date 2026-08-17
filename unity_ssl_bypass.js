// unity_ssl_bypass.js
console.log("[*] Script loaded in process: " + Process.id);

// Safe Java Wrapper
function setupJavaHooks() {
    if (typeof Java === "undefined" || !Java.available) {
        console.log("[-] Java runtime not available in this context.");
        return;
    }

    Java.perform(function () {
        console.log("[+] Java runtime attached.");

        try {
            var X509TrustManager = Java.use('javax.net.ssl.X509TrustManager');
            var SSLContext = Java.use('javax.net.ssl.SSLContext');

            var TrustManager = Java.registerClass({
                name: 'com.antigravity.TrustAllManager',
                implements: [X509TrustManager],
                methods: {
                    checkClientTrusted: function (chain, authType) {},
                    checkServerTrusted: function (chain, authType) {},
                    getAcceptedIssuers: function () { return []; }
                }
            });

            var TrustManagers = [TrustManager.$new()];
            var SSLContext_init = SSLContext.init.overload(
                '[Ljavax.net.ssl.KeyManager;',
                '[Ljavax.net.ssl.TrustManager;',
                'java.security.SecureRandom'
            );

            SSLContext_init.implementation = function (keyManager, trustManager, secureRandom) {
                console.log("[+] Intercepted SSLContext.init -> TrustAllManager");
                SSLContext_init.call(this, keyManager, TrustManagers, secureRandom);
            };
        } catch (e) {
            console.log("[-] Java SSLContext hook note: " + e);
        }

        try {
            var TrustManagerImpl = Java.use('com.android.org.conscrypt.TrustManagerImpl');
            TrustManagerImpl.checkTrustedRecursive.implementation = function () {
                return Java.use('java.util.ArrayList').$new();
            };
            console.log("[+] Hooked TrustManagerImpl.checkTrustedRecursive");
        } catch (e) {}
    });
}

// Native Hooks
function setupNativeHooks() {
    var modules = Process.enumerateModules();
    console.log("[*] Total loaded native modules: " + modules.length);

    modules.forEach(function (mod) {
        var name = mod.name.toLowerCase();
        if (name.indexOf("unity") !== -1 || name.indexOf("il2cpp") !== -1 || name.indexOf("ssl") !== -1 || name.indexOf("crypto") !== -1) {
            console.log("[*] Found candidate module: " + mod.name + " (" + mod.base + ")");
            try {
                var exports = mod.enumerateExports();
                exports.forEach(function (exp) {
                    var expName = exp.name;
                    if (expName.indexOf("SSL_set_custom_verify") !== -1 || expName.indexOf("SSL_CTX_set_custom_verify") !== -1) {
                        Interceptor.attach(exp.address, {
                            onEnter: function (args) {
                                console.log("[+] Native Hook: " + expName + " -> disabling custom verify");
                                args[1] = ptr(0);
                                args[2] = ptr(0);
                            }
                        });
                    }
                    if (expName === "SSL_get_verify_result") {
                        Interceptor.attach(exp.address, {
                            onLeave: function (retval) {
                                retval.replace(ptr(0));
                            }
                        });
                    }
                });
            } catch (err) {}
        }
    });
}

// IL2CPP Helper
function setupIL2CPPHooks() {
    var il2cppMod = Process.findModuleByName("libil2cpp.so");
    if (!il2cppMod) {
        console.log("[-] libil2cpp.so not yet loaded. Retrying in 1s...");
        setTimeout(setupIL2CPPHooks, 1000);
        return;
    }

    console.log("[+] libil2cpp.so is present at " + il2cppMod.base);

    try {
        var il2cpp_domain_get = new NativeFunction(il2cppMod.findExportByName("il2cpp_domain_get"), "pointer", []);
        var il2cpp_thread_attach = new NativeFunction(il2cppMod.findExportByName("il2cpp_thread_attach"), "pointer", ["pointer"]);
        var il2cpp_domain_get_assemblies = new NativeFunction(il2cppMod.findExportByName("il2cpp_domain_get_assemblies"), "pointer", ["pointer", "pointer"]);
        var il2cpp_assembly_get_image = new NativeFunction(il2cppMod.findExportByName("il2cpp_assembly_get_image"), "pointer", ["pointer"]);
        var il2cpp_image_get_name = new NativeFunction(il2cppMod.findExportByName("il2cpp_image_get_name"), "pointer", ["pointer"]);
        var il2cpp_class_from_name = new NativeFunction(il2cppMod.findExportByName("il2cpp_class_from_name"), "pointer", ["pointer", "pointer", "pointer"]);
        var il2cpp_class_get_methods = new NativeFunction(il2cppMod.findExportByName("il2cpp_class_get_methods"), "pointer", ["pointer", "pointer"]);
        var il2cpp_method_get_name = new NativeFunction(il2cppMod.findExportByName("il2cpp_method_get_name"), "pointer", ["pointer"]);

        var domain = il2cpp_domain_get();
        if (domain.isNull()) {
            setTimeout(setupIL2CPPHooks, 500);
            return;
        }
        il2cpp_thread_attach(domain);

        var sizePtr = Memory.alloc(Process.pointerSize);
        var assemblies = il2cpp_domain_get_assemblies(domain, sizePtr);
        var count = sizePtr.readPointer().toInt32();
        console.log("[+] IL2CPP Assemblies count: " + count);

        for (var i = 0; i < count; i++) {
            var asm = assemblies.add(i * Process.pointerSize).readPointer();
            var img = il2cpp_assembly_get_image(asm);
            var imgName = il2cpp_image_get_name(img).readCString();

            // Hook ChillyRoom RPC and Mono Certificate Validation
            var targets = [
                { ns: "ChillyRoom.RPC", name: "RPCClient" },
                { ns: "Mono.Net.Security", name: "ChainValidationHelper" },
                { ns: "System.Net.Security", name: "SslStream" }
            ];

            targets.forEach(function (t) {
                var klass = il2cpp_class_from_name(img, Memory.allocUtf8String(t.ns), Memory.allocUtf8String(t.name));
                if (!klass.isNull()) {
                    console.log("[+] Located IL2CPP class: " + t.ns + "." + t.name + " in " + imgName);
                    var iter = Memory.alloc(Process.pointerSize);
                    iter.writePointer(ptr(0));
                    var m;
                    while (!(m = il2cpp_class_get_methods(klass, iter)).isNull()) {
                        var methodName = il2cpp_method_get_name(m).readCString();
                        if (methodName.indexOf("CheckCertHashTrusted") !== -1 ||
                            methodName.indexOf("ValidateChain") !== -1 ||
                            methodName.indexOf("InvokeCallback") !== -1 ||
                            methodName.indexOf("ValidationCallback") !== -1 ||
                            methodName.indexOf("GetStrictChillyroomCertificateValidationCallback") !== -1) {
                            
                            var methodPtr = m.readPointer(); // MethodInfo -> methodPointer
                            console.log("[+++] Hooking target method: " + t.name + "::" + methodName + " at " + methodPtr);
                            try {
                                Interceptor.attach(methodPtr, {
                                    onLeave: function (retval) {
                                        console.log("[>>>] Bypassed " + methodName + " -> returning true (1)");
                                        retval.replace(ptr(1));
                                    }
                                });
                            } catch (e) {
                                console.log("[-] Interceptor attach error: " + e);
                            }
                        }
                    }
                }
            });
        }
    } catch (e) {
        console.log("[-] IL2CPP hook error: " + e);
    }
}

// Run initializers
setTimeout(setupJavaHooks, 100);
setTimeout(setupNativeHooks, 500);
setTimeout(setupIL2CPPHooks, 1000);
