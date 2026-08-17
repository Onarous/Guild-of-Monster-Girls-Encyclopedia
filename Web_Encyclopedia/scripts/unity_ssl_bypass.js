// unity_ssl_bypass.js — ChillyRoom Unity IL2CPP SSL Pinning Bypass
// Direct in-memory machine code patching + Native BoringSSL + Java Conscrypt/TrustManager
// Verified strictly per CHILLYROOM_UNITY_SSL_PINNING_BYPASS_GUIDE.md

console.log("[*] ===========================================================");
console.log("[*] ⚡ ChillyRoom Unity SSL Pinning In-Memory Patch Active ⚡");
console.log("[*] ===========================================================");

// Helper for direct in-memory ARM64 code patching
function patchCode(addr, bytes) {
    Memory.protect(addr, bytes.length, 'rwx');
    addr.writeByteArray(bytes);
    Memory.protect(addr, bytes.length, 'rx');
}

// ARM64 instruction definitions
// mov w0, #1 (0x52800020); ret (0xd65f03c0)
var RET_TRUE = [0x20, 0x00, 0x80, 0x52, 0xc0, 0x03, 0x5f, 0xd6];
// ret (0xd65f03c0)
var RET_VOID = [0xc0, 0x03, 0x5f, 0xd6];

// 1. Direct IL2CPP In-Memory Machine Code Patching
function patchIL2CPPMemory() {
    var il2cppMod = Process.findModuleByName("libil2cpp.so");
    if (!il2cppMod) {
        setTimeout(patchIL2CPPMemory, 200);
        return;
    }

    console.log("[+] libil2cpp.so loaded at base: " + il2cppMod.base);

    // Verified ARM64 offsets for Guild of Monster Girls (ChillyRoom RPC + Mono TLS Stack)
    var targets = [
        { name: "ChillyRoom.RPC CheckCertHashTrusted", offset: 0x38A7450, code: RET_TRUE },
        { name: "ChillyRoom.RPC CheckErrorCodes", offset: 0x38A7568, code: RET_TRUE },
        { name: "ChillyRoom.RPC b__10_0 Callback", offset: 0x38A81B4, code: RET_TRUE },
        { name: "ChillyRoom.RPC InstallGlobalStrictValidation", offset: 0x38A6EF4, code: RET_VOID },
        { name: "ChillyRoom.RPC MyRemoteCertificateValidationCallback", offset: 0x3893850, code: RET_TRUE },
        { name: "ChillyRoom.RPC InternalUserCertificateValidationCallback", offset: 0x368CEA0, code: RET_TRUE },
        { name: "Mono ChainValidationHelper.ValidateChain (1)", offset: 0x42B5E00, code: RET_TRUE },
        { name: "Mono ChainValidationHelper.ValidateChain (2)", offset: 0x42B5E64, code: RET_TRUE },
        { name: "Mono ChainValidationHelper.InvokeCallback", offset: 0x42B5E50, code: RET_TRUE },
        { name: "Mono MobileTlsContext.ValidateChain", offset: 0x42C4D74, code: RET_TRUE }
    ];

    var successCount = 0;
    targets.forEach(function (t) {
        try {
            var addr = il2cppMod.base.add(t.offset);
            patchCode(addr, t.code);
            console.log("[+] [Direct Patch] " + t.name + " at " + addr);
            successCount++;
        } catch (e) {
            console.log("[-] Patch note for " + t.name + ": " + e);
        }
    });

    console.log("[+] Successfully applied " + successCount + "/" + targets.length + " in-memory SSL bypass patches!");

    // Dynamic IL2CPP fallback
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

                var searchClasses = [
                    { ns: "ChillyRoom.RPC", name: "RPCClient" },
                    { ns: "Mono.Net.Security", name: "ChainValidationHelper" },
                    { ns: "Mono.Net.Security", name: "MobileTlsContext" }
                ];

                searchClasses.forEach(function (sc) {
                    var klass = il2cpp_class_from_name(img, Memory.allocUtf8String(sc.ns), Memory.allocUtf8String(sc.name));
                    if (!klass.isNull()) {
                        var iter = Memory.alloc(Process.pointerSize);
                        iter.writePointer(ptr(0));
                        var m;
                        while (!(m = il2cpp_class_get_methods(klass, iter)).isNull()) {
                            var methodName = il2cpp_method_get_name(m).readCString();
                            if (methodName === "CheckCertHashTrusted" ||
                                methodName === "CheckErrorCodes" ||
                                methodName === "ValidateChain" ||
                                methodName === "InvokeCallback" ||
                                methodName === "MyRemoteCertificateValidationCallback" ||
                                methodName === "InternalUserCertificateValidationCallback") {
                                
                                var methodPtr = m.readPointer();
                                try {
                                    patchCode(methodPtr, RET_TRUE);
                                    console.log("[+] [Dynamic Patch] " + sc.name + "::" + methodName + " at " + methodPtr);
                                } catch (e) {}
                            }
                        }
                    }
                });
            }
        }
    } catch (e) {}
}

// 2. Native OpenSSL / BoringSSL / UnityWebRequest Hooking
function hookNativeSSL() {
    var modules = Process.enumerateModules();
    modules.forEach(function (mod) {
        var name = mod.name.toLowerCase();
        if (name.indexOf("ssl") !== -1 || name.indexOf("crypto") !== -1 || name.indexOf("unity") !== -1 || name.indexOf("main") !== -1) {
            try {
                var exports = mod.enumerateExports();
                exports.forEach(function (exp) {
                    var expName = exp.name;
                    if (expName === "SSL_get_verify_result") {
                        Interceptor.attach(exp.address, {
                            onLeave: function (retval) {
                                retval.replace(ptr(0)); // X509_V_OK
                            }
                        });
                    }
                    if (expName === "SSL_set_custom_verify" || expName === "SSL_CTX_set_custom_verify") {
                        Interceptor.attach(exp.address, {
                            onEnter: function (args) {
                                args[1] = ptr(0); // SSL_VERIFY_NONE
                            }
                        });
                    }
                });
            } catch (e) {}
        }
    });
}

// 3. Java Runtime SSL Hooks (Conscrypt / TrustManager)
function hookJavaSSL() {
    if (typeof Java === "undefined" || !Java.available) return;

    Java.perform(function () {
        console.log("[+] Attaching Java SSL bypass hooks...");

        // 3.1 Conscrypt TrustManagerImpl
        try {
            var TrustManagerImpl = Java.use('com.android.org.conscrypt.TrustManagerImpl');
            TrustManagerImpl.checkTrustedRecursive.implementation = function () {
                return Java.use('java.util.ArrayList').$new();
            };
            console.log("[+] Hooked TrustManagerImpl.checkTrustedRecursive");
        } catch (e) {}

        // 3.2 Universal TrustManager
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
                SSLContext_init.call(this, keyManager, TrustManagers, secureRandom);
            };
        } catch (e) {}

        // 3.3 WebView SSL Errors
        try {
            var WebViewClient = Java.use('android.webkit.WebViewClient');
            WebViewClient.onReceivedSslError.implementation = function (view, handler, error) {
                handler.proceed();
            };
        } catch (e) {}
    });
}

// Execute immediately without delay
hookJavaSSL();
hookNativeSSL();
patchIL2CPPMemory();
