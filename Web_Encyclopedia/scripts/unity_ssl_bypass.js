// unity_ssl_bypass.js — ChillyRoom Unity IL2CPP SSL Pinning Bypass
// Full Implementation based on CHILLYROOM_UNITY_SSL_PINNING_BYPASS_GUIDE.md

console.log("[*] ======================================================");
console.log("[*] ⚡ ChillyRoom Unity SSL Pinning Bypass — Frida Hook ⚡");
console.log("[*] ======================================================");

// 1. Java-level SSL Hooks (OkHttp, HttpURLConnection, Conscrypt, WebView)
function hookJavaSSL() {
    if (typeof Java === "undefined" || !Java.available) return;

    Java.perform(function () {
        console.log("[+] Attaching Java SSL bypass hooks...");

        // 1.1 Conscrypt TrustManagerImpl (Android 7+)
        try {
            var TrustManagerImpl = Java.use('com.android.org.conscrypt.TrustManagerImpl');
            TrustManagerImpl.checkTrustedRecursive.implementation = function () {
                return Java.use('java.util.ArrayList').$new();
            };
            console.log("[+] Hooked TrustManagerImpl.checkTrustedRecursive");
        } catch (e) {}

        // 1.2 Universal X509TrustManager & SSLContext
        try {
            var X509TrustManager = Java.use('javax.net.ssl.X509TrustManager');
            var SSLContext = Java.use('javax.net.ssl.SSLContext');

            var TrustManager = Java.registerClass({
                name: 'com.chillyroom.bypass.TrustAllManager',
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
        } catch (e) {}

        // 1.3 WebViewClient SSL Error Ignore
        try {
            var WebViewClient = Java.use('android.webkit.WebViewClient');
            WebViewClient.onReceivedSslError.implementation = function (view, handler, error) {
                console.log("[+] Intercepted WebViewClient onReceivedSslError -> proceed()");
                handler.proceed();
            };
        } catch (e) {}
    });
}

// 2. Native OpenSSL / BoringSSL Hooks (libunity.so / libmain.so)
function hookNativeSSL() {
    var modules = Process.enumerateModules();
    modules.forEach(function (mod) {
        var name = mod.name.toLowerCase();
        if (name.indexOf("ssl") !== -1 || name.indexOf("crypto") !== -1 || name.indexOf("unity") !== -1) {
            try {
                var exports = mod.enumerateExports();
                exports.forEach(function (exp) {
                    var expName = exp.name;
                    if (expName === "SSL_get_verify_result") {
                        Interceptor.attach(exp.address, {
                            onLeave: function (retval) {
                                retval.replace(ptr(0)); // X509_V_OK = 0
                            }
                        });
                    }
                });
            } catch (e) {}
        }
    });
}

// 3. IL2CPP & Exact Binary Offsets (ChillyRoom RPC & Mono TLS)
function hookIL2CPP() {
    var il2cppMod = Process.findModuleByName("libil2cpp.so");
    if (!il2cppMod) {
        setTimeout(hookIL2CPP, 500);
        return;
    }

    console.log("[+] Found libil2cpp.so at base: " + il2cppMod.base);

    // 3.1 Known exact function offsets from CHILLYROOM_UNITY_SSL_PINNING_BYPASS_GUIDE.md & patch_full_tls.py
    var targetOffsets = [
        { name: "ChillyRoom.RPC.RPCClient.CheckCertHashTrusted", offset: 0x38A7450, ret: 1 },
        { name: "ChillyRoom.RPC.RPCClient.CheckErrorCodes", offset: 0x38A7568, ret: 1 },
        { name: "ChillyRoom.RPC.RPCClient.b__10_0", offset: 0x38A81B4, ret: 1 },
        { name: "ChillyRoom.RPC.RPCClient.MyRemoteCertificateValidationCallback", offset: 0x3893850, ret: 1 },
        { name: "ChillyRoom.RPC.RPCClient.InternalUserCertificateValidationCallback", offset: 0x368CEA0, ret: 1 },
        { name: "Mono.Net.Security.ChainValidationHelper.ValidateChain (1)", offset: 0x42B5E00, ret: 1 },
        { name: "Mono.Net.Security.ChainValidationHelper.ValidateChain (2)", offset: 0x42B5E64, ret: 1 },
        { name: "Mono.Net.Security.ChainValidationHelper.InvokeCallback", offset: 0x42B5E50, ret: 1 },
        { name: "Mono.Net.Security.MobileTlsContext.ValidateChain", offset: 0x42C4D74, ret: 1 }
    ];

    targetOffsets.forEach(function (t) {
        var addr = il2cppMod.base.add(t.offset);
        try {
            Interceptor.attach(addr, {
                onLeave: function (retval) {
                    retval.replace(ptr(1));
                }
            });
            console.log("[+] Hooked offset 0x" + t.offset.toString(16) + " (" + t.name + ") -> return true (1)");
        } catch (err) {
            console.log("[-] Offset hook note for 0x" + t.offset.toString(16) + ": " + err);
        }
    });

    // 3.2 Dynamic IL2CPP Export Search (Fallback for all classes and methods)
    try {
        var il2cpp_domain_get = new NativeFunction(il2cppMod.findExportByName("il2cpp_domain_get"), "pointer", []);
        var il2cpp_thread_attach = new NativeFunction(il2cppMod.findExportByName("il2cpp_thread_attach"), "pointer", ["pointer"]);
        var il2cpp_domain_get_assemblies = new NativeFunction(il2cppMod.findExportByName("il2cpp_domain_get_assemblies"), "pointer", ["pointer", "pointer"]);
        var il2cpp_assembly_get_image = new NativeFunction(il2cppMod.findExportByName("il2cpp_assembly_get_image"), "pointer", ["pointer"]);
        var il2cpp_class_from_name = new NativeFunction(il2cppMod.findExportByName("il2cpp_class_from_name"), "pointer", ["pointer", "pointer", "pointer"]);
        var il2cpp_class_get_methods = new NativeFunction(il2cppMod.findExportByName("il2cpp_class_get_methods"), "pointer", ["pointer", "pointer"]);
        var il2cpp_method_get_name = new NativeFunction(il2cppMod.findExportByName("il2cpp_method_get_name"), "pointer", ["pointer"]);

        var domain = il2cpp_domain_get();
        if (!domain.isNull()) {
            il2cpp_thread_attach(domain);
            var sizePtr = Memory.alloc(Process.pointerSize);
            var assemblies = il2cpp_domain_get_assemblies(domain, sizePtr);
            var count = sizePtr.readPointer().toInt32();

            for (var i = 0; i < count; i++) {
                var asm = assemblies.add(i * Process.pointerSize).readPointer();
                var img = il2cpp_assembly_get_image(asm);

                var targets = [
                    { ns: "ChillyRoom.RPC", name: "RPCClient" },
                    { ns: "Mono.Net.Security", name: "ChainValidationHelper" },
                    { ns: "Mono.Net.Security", name: "MobileTlsContext" }
                ];

                targets.forEach(function (t) {
                    var klass = il2cpp_class_from_name(img, Memory.allocUtf8String(t.ns), Memory.allocUtf8String(t.name));
                    if (!klass.isNull()) {
                        var iter = Memory.alloc(Process.pointerSize);
                        iter.writePointer(ptr(0));
                        var m;
                        while (!(m = il2cpp_class_get_methods(klass, iter)).isNull()) {
                            var methodName = il2cpp_method_get_name(m).readCString();
                            // STRICT FILTER: Only hook boolean validation methods! Never replace delegate getters or void!
                            if (methodName === "CheckCertHashTrusted" ||
                                methodName === "CheckErrorCodes" ||
                                methodName === "ValidateChain" ||
                                methodName === "InvokeCallback" ||
                                methodName === "MyRemoteCertificateValidationCallback" ||
                                methodName === "InternalUserCertificateValidationCallback" ||
                                (methodName.indexOf("b__10_0") !== -1 && methodName.indexOf("Callback") === -1)) {
                                
                                var methodPtr = m.readPointer();
                                try {
                                    Interceptor.attach(methodPtr, {
                                        onLeave: function (retval) {
                                            retval.replace(ptr(1));
                                        }
                                    });
                                    console.log("[+] Dynamically hooked: " + t.name + "::" + methodName);
                                } catch (e) {}
                            }
                        }
                    }
                });
            }
        }
    } catch (e) {}
}

setTimeout(hookJavaSSL, 100);
setTimeout(hookNativeSSL, 300);
setTimeout(hookIL2CPP, 600);
