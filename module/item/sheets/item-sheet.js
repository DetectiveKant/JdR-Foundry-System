export default class ItemSheetKJDR extends ItemSheet {
    get template() {
        return `systems/kaamelottjdr/templates/items/${this.item.data.type}.html`;
    }
}