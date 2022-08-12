export default class ActorSheetKJDRCharacter extends ActorSheet {
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            template: "systems/kaamelottjdr/templates/actors/character-sheet.html",
            classes: ["kaamelottjdr", "sheet", "actor"]
        });
    }

    getData() {
        const baseData = super.getData();
        let sheetData = {
            owner: this.actor.isOwner,
            actor: baseData.actor,
            data: baseData.actor.data.data,
            items: baseData.actor.data.items
        };
        return sheetData;
      }
}

