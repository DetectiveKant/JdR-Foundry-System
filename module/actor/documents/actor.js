export class KJDRActor extends Actor {
    
    /** @override */
    prepareData() {
        super.prepareData();
    }

    /** @override */
    prepareBaseData() {
    }

    prepareDerivedData() {
        const actorData = this.data;
        const data = actorData.data;

        console.log("jdrsystem | DERIVED DATA");

        if (actorData.type === 'character') this._prepareCharacterData(actorData);
    }

    _prepareCharacterData(actorData) {
        if (actorData.type !== 'character') return;

        const data = actorData.data;

        //print out the data structure in the console if needed
        //console.log(data);

        //data.abilities.str = Math.floor((data.abilities.strength - 10) / 2);
        for (let [key, stat] of Object.entries(data.primary)) {
            // Calculate the modifier using d20 rules.
            console.log("jdrsystem | ", stat);
            stat.total = stat.value + stat.bonus;
        }
    }
    
}