const POKEMON_MAP = {
    "": ""
};
let POKEDEX = null;
const TYPE_NAME = [
    "Normal",
    "Fire",
    "Water",
    "Grass",
    "Electric",
    "Ice",
    "Fighting",
    "Poison",
    "Ground",
    "Flying",
    "Psychic",
    "Bug",
    "Rock",
    "Ghost",
    "Dragon",
    "Dark",
    "Steel",
    "Fairy"
];
const TYPE_MAGNIFICATION = {
    Normal: {
        Normal: 1,
        Fire: 1,
        Water: 1,
        Grass: 1,
        Electric: 1,
        Ice: 1,
        Fighting: 2,
        Poison: 1,
        Ground: 1,
        Flying: 1,
        Psychic: 1,
        Bug: 1,
        Rock: 1,
        Ghost: 0,
        Dragon: 1,
        Dark: 1,
        Steel: 1,
        Fairy: 1
    },
    Fire: {
        Normal: 1,
        Fire: 0.5,
        Water: 2,
        Grass: 0.5,
        Electric: 1,
        Ice: 0.5,
        Fighting: 1,
        Poison: 1,
        Ground: 2,
        Flying: 1,
        Psychic: 1,
        Bug: 0.5,
        Rock: 2,
        Ghost: 1,
        Dragon: 1,
        Dark: 1,
        Steel: 0.5,
        Fairy: 0.5
    },
    Water: {
        Normal: 1,
        Fire: 0.5,
        Water: 0.5,
        Grass: 2,
        Electric: 2,
        Ice: 0.5,
        Fighting: 1,
        Poison: 1,
        Ground: 1,
        Flying: 1,
        Psychic: 1,
        Bug: 1,
        Rock: 1,
        Ghost: 1,
        Dragon: 1,
        Dark: 1,
        Steel: 0.5,
        Fairy: 1
    },
    Grass: {
        Normal: 1,
        Fire: 2,
        Water: 0.5,
        Grass: 0.5,
        Electric: 0.5,
        Ice: 2,
        Fighting: 1,
        Poison: 2,
        Ground: 0.5,
        Flying: 2,
        Psychic: 1,
        Bug: 2,
        Rock: 1,
        Ghost: 1,
        Dragon: 1,
        Dark: 1,
        Steel: 1,
        Fairy: 1
    },
    Electric: {
        Normal: 1,
        Fire: 1,
        Water: 1,
        Grass: 1,
        Electric: 0.5,
        Ice: 1,
        Fighting: 1,
        Poison: 1,
        Ground: 2,
        Flying: 0.5,
        Psychic: 1,
        Bug: 1,
        Rock: 1,
        Ghost: 1,
        Dragon: 1,
        Dark: 1,
        Steel: 0.5,
        Fairy: 1
    },
    Ice: {
        Normal: 1,
        Fire: 2,
        Water: 1,
        Grass: 1,
        Electric: 1,
        Ice: 0.5,
        Fighting: 2,
        Poison: 1,
        Ground: 1,
        Flying: 1,
        Psychic: 1,
        Bug: 1,
        Rock: 2,
        Ghost: 1,
        Dragon: 1,
        Dark: 1,
        Steel: 2,
        Fairy: 1
    },
    Fighting: {
        Normal: 1,
        Fire: 1,
        Water: 1,
        Grass: 1,
        Electric: 1,
        Ice: 1,
        Fighting: 1,
        Poison: 1,
        Ground: 1,
        Flying: 2,
        Psychic: 2,
        Bug: 0.5,
        Rock: 0.5,
        Ghost: 1,
        Dragon: 1,
        Dark: 0.5,
        Steel: 1,
        Fairy: 2
    },
    Poison: {
        Normal: 1,
        Fire: 1,
        Water: 1,
        Grass: 0.5,
        Electric: 1,
        Ice: 1,
        Fighting: 0.5,
        Poison: 0.5,
        Ground: 2,
        Flying: 1,
        Psychic: 2,
        Bug: 0.5,
        Rock: 1,
        Ghost: 1,
        Dragon: 1,
        Dark: 1,
        Steel: 1,
        Fairy: 0.5
    },
    Ground: {
        Normal: 1,
        Fire: 1,
        Water: 2,
        Grass: 2,
        Electric: 0,
        Ice: 2,
        Fighting: 1,
        Poison: 0.5,
        Ground: 1,
        Flying: 1,
        Psychic: 1,
        Bug: 1,
        Rock: 0.5,
        Ghost: 1,
        Dragon: 1,
        Dark: 1,
        Steel: 1,
        Fairy: 1
    },
    Flying: {
        Normal: 1,
        Fire: 1,
        Water: 1,
        Grass: 0.5,
        Electric: 2,
        Ice: 2,
        Fighting: 0.5,
        Poison: 1,
        Ground: 0,
        Flying: 1,
        Psychic: 1,
        Bug: 0.5,
        Rock: 2,
        Ghost: 1,
        Dragon: 1,
        Dark: 1,
        Steel: 1,
        Fairy: 1
    },
    Psychic: {
        Normal: 1,
        Fire: 1,
        Water: 1,
        Grass: 1,
        Electric: 1,
        Ice: 1,
        Fighting: 0.5,
        Poison: 1,
        Ground: 1,
        Flying: 1,
        Psychic: 0.5,
        Bug: 2,
        Rock: 1,
        Ghost: 2,
        Dragon: 1,
        Dark: 2,
        Steel: 1,
        Fairy: 1
    },
    Bug: {
        Normal: 1,
        Fire: 2,
        Water: 1,
        Grass: 0.5,
        Electric: 1,
        Ice: 1,
        Fighting: 0.5,
        Poison: 1,
        Ground: 0.5,
        Flying: 2,
        Psychic: 1,
        Bug: 1,
        Rock: 2,
        Ghost: 1,
        Dragon: 1,
        Dark: 1,
        Steel: 1,
        Fairy: 1
    },
    Rock: {
        Normal: 0.5,
        Fire: 0.5,
        Water: 2,
        Grass: 2,
        Electric: 1,
        Ice: 1,
        Fighting: 2,
        Poison: 0.5,
        Ground: 2,
        Flying: 0.5,
        Psychic: 1,
        Bug: 1,
        Rock: 1,
        Ghost: 1,
        Dragon: 1,
        Dark: 1,
        Steel: 2,
        Fairy: 1
    },
    Ghost: {
        Normal: 0,
        Fire: 1,
        Water: 1,
        Grass: 1,
        Electric: 1,
        Ice: 1,
        Fighting: 0,
        Poison: 0.5,
        Ground: 1,
        Flying: 1,
        Psychic: 1,
        Bug: 0.5,
        Rock: 1,
        Ghost: 2,
        Dragon: 1,
        Dark: 2,
        Steel: 1,
        Fairy: 1
    },
    Dragon: {
        Normal: 1,
        Fire: 0.5,
        Water: 0.5,
        Grass: 0.5,
        Electric: 0.5,
        Ice: 2,
        Fighting: 1,
        Poison: 1,
        Ground: 1,
        Flying: 1,
        Psychic: 1,
        Bug: 1,
        Rock: 1,
        Ghost: 1,
        Dragon: 2,
        Dark: 1,
        Steel: 1,
        Fairy: 2
    },
    Dark: {
        Normal: 1,
        Fire: 1,
        Water: 1,
        Grass: 1,
        Electric: 1,
        Ice: 1,
        Fighting: 2,
        Poison: 1,
        Ground: 1,
        Flying: 1,
        Psychic: 0,
        Bug: 2,
        Rock: 1,
        Ghost: 0.5,
        Dragon: 1,
        Dark: 0.5,
        Steel: 1,
        Fairy: 2
    },
    Steel: {
        Normal: 0.5,
        Fire: 2,
        Water: 1,
        Grass: 0.5,
        Electric: 1,
        Ice: 0.5,
        Fighting: 2,
        Poison: 0,
        Ground: 2,
        Flying: 0.5,
        Psychic: 0.5,
        Bug: 0.5,
        Rock: 0.5,
        Ghost: 1,
        Dragon: 0.5,
        Dark: 1,
        Steel: 0.5,
        Fairy: 0.5
    },
    Fairy: {
        Normal: 1,
        Fire: 1,
        Water: 1,
        Grass: 1,
        Electric: 1,
        Ice: 1,
        Fighting: 0.5,
        Poison: 2,
        Ground: 1,
        Flying: 1,
        Psychic: 1,
        Bug: 0.5,
        Rock: 1,
        Ghost: 1,
        Dragon: 0,
        Dark: 0.5,
        Steel: 2,
        Fairy: 1
    }
};

window.onload = function() {
    setPokemonList();

    document.querySelector("#sdtext_textarea").addEventListener("input", function() {
        const pokemonNameArray = getPokemonName(this.value);
        console.log(pokemonNameArray);
        for (i = 0; i < 10; i++) {
            const id = "pokemon" + i + "_select";
            if (pokemonNameArray.length <= i) {
                document.getElementById(id).options[0].setAttribute("selected", "selected");
                continue;
            }
            const key = "option[value='" + POKEMON_MAP[pokemonNameArray[i]] + "']";
            document.getElementById(id).querySelector(key).setAttribute("selected", "selected");
        }
        updateInfo();
    });

    document.querySelector("#pokemon0_select").addEventListener("change", function() {
        document.querySelector("#pokemon0_check").checked = (0 < this.value.length);
        updateInfo();
    });
    document.querySelector("#pokemon1_select").addEventListener("change", function() {
        document.querySelector("#pokemon1_check").checked = (0 < this.value.length);
        updateInfo();
    });
    document.querySelector("#pokemon2_select").addEventListener("change", function() {
        document.querySelector("#pokemon2_check").checked = (0 < this.value.length);
        updateInfo();
    });
    document.querySelector("#pokemon3_select").addEventListener("change", function() {
        document.querySelector("#pokemon3_check").checked = (0 < this.value.length);
        updateInfo();
    });
    document.querySelector("#pokemon4_select").addEventListener("change", function() {
        document.querySelector("#pokemon4_check").checked = (0 < this.value.length);
        updateInfo();
    });
    document.querySelector("#pokemon5_select").addEventListener("change", function() {
        document.querySelector("#pokemon5_check").checked = (0 < this.value.length);
        updateInfo();
    });
    document.querySelector("#pokemon6_select").addEventListener("change", function() {
        document.querySelector("#pokemon6_check").checked = (0 < this.value.length);
        updateInfo();
    });
    document.querySelector("#pokemon7_select").addEventListener("change", function() {
        document.querySelector("#pokemon7_check").checked = (0 < this.value.length);
        updateInfo();
    });
    document.querySelector("#pokemon8_select").addEventListener("change", function() {
        document.querySelector("#pokemon8_check").checked = (0 < this.value.length);
        updateInfo();
    });
    document.querySelector("#pokemon9_select").addEventListener("change", function() {
        document.querySelector("#pokemon9_check").checked = (0 < this.value.length);
        updateInfo();
    });
    document.querySelector("#pokemon0_check").addEventListener("change", function() {
        updateInfo();
    });
    document.querySelector("#pokemon1_check").addEventListener("change", function() {
        updateInfo();
    });
    document.querySelector("#pokemon2_check").addEventListener("change", function() {
        updateInfo();
    });
    document.querySelector("#pokemon3_check").addEventListener("change", function() {
        updateInfo();
    });
    document.querySelector("#pokemon4_check").addEventListener("change", function() {
        updateInfo();
    });
    document.querySelector("#pokemon5_check").addEventListener("change", function() {
        updateInfo();
    });
    document.querySelector("#pokemon6_check").addEventListener("change", function() {
        updateInfo();
    });
    document.querySelector("#pokemon7_check").addEventListener("change", function() {
        updateInfo();
    });
    document.querySelector("#pokemon8_check").addEventListener("change", function() {
        updateInfo();
    });
    document.querySelector("#pokemon9_check").addEventListener("change", function() {
        updateInfo();
    });
}

async function setPokemonList() {
    const url = "https://play.pokemonshowdown.com/data/pokedex.json";
    const response = await fetch(url);
    const json = await response.json();pokemon5_select
    POKEDEX = json;
    // console.log(POKEDEX);
    const pokemonSelectArray = [];
    for (i = 0; i < 10; i++) {
        pokemonSelectArray[i] = document.getElementById("pokemon" + i + "_select");
    }
    for (key in json) {
        const name = json[key].name;
        for (i = 0; i < 10; i++) {
            pokemonSelectArray[i].appendChild(createOption(key, name));
        }
        POKEMON_MAP[name] = key;
    }
}

function createOption(value, innerText) {
    const option = document.createElement("option");
    option.value = value;
    option.innerText = innerText;
    return option;
}

function getPokemonName(sdText) {
    const sdTextArray = sdText.split("\n");
    const pokemonNameArray = [];
    let addFlg = 1;
    for (i in sdTextArray) {
        if (addFlg === 1 && 0 < sdTextArray[i].length) {
            const name = sdTextArray[i].replace(/\(.*|\@.*/g, "").trim();
            if (POKEMON_MAP[name]) {
                pokemonNameArray.push(name);
                addFlg = 0;
            }
        }
        if (sdTextArray[i].length === 0) {
            addFlg = 1;
        }
    }
    return pokemonNameArray;
}

function updateInfo() {
    changePokemonIcon();
    setTypeBalance();
}

function changePokemonIcon() {
    for (i = 0; i < 10; i++) {
        const keyPokedex = document.getElementById("pokemon" + i + "_select").value;
        const id = "pokemon" + i + "_icon";
        if (document.getElementById(id)) {
            document.getElementById(id).remove();
        }
        if (!keyPokedex) {
            continue;
        }
        const name = POKEDEX[keyPokedex].name;
        const iconElement = document.createElement("div");
        iconElement.id = id;
        iconElement.style.backgroundImage = "url(" + getPokemonImagePath(name) + ")";
        iconElement.style.display = "inline-block";
        iconElement.style.backgroundRepeat = "no-repeat";
        // iconElement.style.marginLeft = "-6px";
        // iconElement.style.marginRight = "0px";
        // iconElement.style.marginBottom = "2px";
        iconElement.style.width = "48px";
        iconElement.style.height = "48px";
        iconElement.style.backgroundPosition = "center";
        document.getElementById("pokemon" + i + "_icon_cell").appendChild(iconElement);
    }
}

function getPokemonImagePath(pokemonName) {
    if (pokemonName == 'Terapagos') {
        //return 'https://www.serebii.net/pokedex-sv/icon/new/1024.png';
        return 'https://img.yakkun.com/poke/icon32/n1021.gif';
    } else if (pokemonName == 'Terapagos-Terastal') {
        //return 'https://www.serebii.net/pokedex-sv/icon/new/1024-t.png';
        return 'https://img.yakkun.com/poke/icon32/n1021t.gif';
    } else if (pokemonName == 'Terapagos-Stellar') {
        //return 'https://www.serebii.net/pokedex-sv/icon/new/1024-s.png';
        return 'https://img.yakkun.com/poke/icon32/n1021s.gif';
    } else if (pokemonName == 'Urshifu-Single Strike') {
        return 'https://limitlesstcg.s3.us-east-2.amazonaws.com/pokemon/gen9/urshifu.png';
    } else if (pokemonName == 'Indeedee-M') {
        return 'https://limitlesstcg.s3.us-east-2.amazonaws.com/pokemon/gen9/indeedee.png';
    }
    //const baseImagePathShowdown = 'https://play.pokemonshowdown.com/sprites/gen5/';
    const baseImagePath = 'https://limitlesstcg.s3.us-east-2.amazonaws.com/pokemon/gen9/'
    const imageExtension = '.png';
    const pokemonImagePath = baseImagePath + pokemonName.replace(' ', '-').toLowerCase() + imageExtension;
    return pokemonImagePath;
}

function setTypeBalance() {
    const typeBalance = {
        0: {Normal: 0, Fire: 0, Water: 0, Grass: 0, Electric: 0, Ice: 0, Fighting: 0, Poison: 0, Ground: 0, Flying: 0, Psychic: 0, Bug: 0, Rock: 0, Ghost: 0, Dragon: 0, Dark: 0, Steel: 0, Fairy: 0},
        1: {Normal: 0, Fire: 0, Water: 0, Grass: 0, Electric: 0, Ice: 0, Fighting: 0, Poison: 0, Ground: 0, Flying: 0, Psychic: 0, Bug: 0, Rock: 0, Ghost: 0, Dragon: 0, Dark: 0, Steel: 0, Fairy: 0},
        2: {Normal: 0, Fire: 0, Water: 0, Grass: 0, Electric: 0, Ice: 0, Fighting: 0, Poison: 0, Ground: 0, Flying: 0, Psychic: 0, Bug: 0, Rock: 0, Ghost: 0, Dragon: 0, Dark: 0, Steel: 0, Fairy: 0},
        4: {Normal: 0, Fire: 0, Water: 0, Grass: 0, Electric: 0, Ice: 0, Fighting: 0, Poison: 0, Ground: 0, Flying: 0, Psychic: 0, Bug: 0, Rock: 0, Ghost: 0, Dragon: 0, Dark: 0, Steel: 0, Fairy: 0},
        8: {Normal: 0, Fire: 0, Water: 0, Grass: 0, Electric: 0, Ice: 0, Fighting: 0, Poison: 0, Ground: 0, Flying: 0, Psychic: 0, Bug: 0, Rock: 0, Ghost: 0, Dragon: 0, Dark: 0, Steel: 0, Fairy: 0},
        16: {Normal: 0, Fire: 0, Water: 0, Grass: 0, Electric: 0, Ice: 0, Fighting: 0, Poison: 0, Ground: 0, Flying: 0, Psychic: 0, Bug: 0, Rock: 0, Ghost: 0, Dragon: 0, Dark: 0, Steel: 0, Fairy: 0}
    };
    for (i = 0; i < 10; i++) {
        const keyPokedex = document.getElementById("pokemon" + i + "_select").value;
        const isChecked = document.getElementById("pokemon" + i + "_check").checked;
        if (!keyPokedex || !isChecked) {
            continue;
        }
        const typeMagnification = {
            Normal: 4,
            Fire: 4,
            Water: 4,
            Grass: 4,
            Electric: 4,
            Ice: 4,
            Fighting: 4,
            Poison: 4,
            Ground: 4,
            Flying: 4,
            Psychic: 4,
            Bug: 4,
            Rock: 4,
            Ghost: 4,
            Dragon: 4,
            Dark: 4,
            Steel: 4,
            Fairy: 4
        };
        const id = "pokemon" + i + "_select";
        const types = POKEDEX[keyPokedex].types;
        for (typeName of TYPE_NAME) {
            for (type of types) {
                typeMagnification[typeName] = typeMagnification[typeName] * TYPE_MAGNIFICATION[type][typeName];
            }
        }
        for (key in typeMagnification) {
            typeBalance[typeMagnification[key]][key]++;
        }
    }
    const typeAdv = {
        Normal: 0, Fire: 0, Water: 0, Grass: 0, Electric: 0, Ice: 0, Fighting: 0, Poison: 0, Ground: 0, Flying: 0, Psychic: 0, Bug: 0, Rock: 0, Ghost: 0, Dragon: 0, Dark: 0, Steel: 0, Fairy: 0
    };
    const typeDsa = {
        Normal: 0, Fire: 0, Water: 0, Grass: 0, Electric: 0, Ice: 0, Fighting: 0, Poison: 0, Ground: 0, Flying: 0, Psychic: 0, Bug: 0, Rock: 0, Ghost: 0, Dragon: 0, Dark: 0, Steel: 0, Fairy: 0
    };
    for (key in typeBalance) {
        for (typeName of TYPE_NAME) {
            const id = "type" + key + "_" + typeName;
            const num = typeBalance[key][typeName];
            document.getElementById(id).innerText = num;
            if (key < 4 && 0 < num) {
                typeAdv[typeName] = typeAdv[typeName] + num;
            } else if (4 < key && 0 < num) {
                typeDsa[typeName] = typeDsa[typeName] + num;
            }
        }
    }
    for (typeName of TYPE_NAME) {
        const consId = "type_cons_" + typeName;
        if (0 < typeAdv[typeName]) {
            document.getElementById(consId).innerText = "o";
            document.getElementById(consId).style.background = "#ffffff";
        } else {
            document.getElementById(consId).innerText = "x";
            document.getElementById(consId).style.background = "#ffd1d1";
        }
        const totalId = "type_total_" + typeName;
        const total = typeAdv[typeName] - typeDsa[typeName];
        document.getElementById(totalId).innerText = total;
        if (total < 0) {
            document.getElementById(totalId).style.background = "#ffd1d1";
        } else if (0 < total) {
            document.getElementById(totalId).style.background = "#d1ffd1";
        } else {
            document.getElementById(totalId).style.background = "#ffffff";
        }
    }
}
