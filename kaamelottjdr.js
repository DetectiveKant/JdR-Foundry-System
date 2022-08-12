import {kaamelottjdr} from "./module/config.js";

import {KJDRActor} from "./module/actor/documents/actor.js";
import ItemSheetKJDR from "./module/item/sheets/item-sheet.js";
import ActorSheetKJDRCharacter from "./module/actor/sheets/character.js"

 Hooks.once("init", function () {
    console.log("kaamelottjdr | Initialising Kaamelott JdR system");

    CONFIG.kaamelottjdr = kaamelottjdr;
    // Define custom Document classes
    CONFIG.Actor.documentClass = KJDRActor;

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("kaamelottjdr", ItemSheetKJDR, {makeDefault: true});

    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("kaamelottjdr", ActorSheetKJDRCharacter, {makeDefault: true});
});