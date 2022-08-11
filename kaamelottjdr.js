import KJDRItemSheet from "./module/sheets/KJDRItemSheet";

 Hooks.once("init", function () {
    console.log("kaamelottjdr | Initialising Kaamelott JdR system");

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("kaamelottjdr", KJDRItemSheet, {makeDefault: true});
});