function changeItem(className, itemName) {
    const itemElement = document.getElementsByClassName(className)[1];
    if (itemName === '(none)') {
        itemElement.selectedIndex = 0;
    } else {
        itemElement.value = itemName;
    }
    itemElement.dispatchEvent(new Event('change'));
}

function changeAbility(className, abilityName) {
    const abilityElement = document.getElementsByClassName(className)[1];
    if (abilityName === '(other)') {
        abilityElement.selectedIndex = 0;
    } else {
        abilityElement.value = abilityName;
    }
    abilityElement.dispatchEvent(new Event('change'));
}

function changeLevel(idName, level) {
    const levelElement = document.getElementById(idName);
    levelElement.value = level;
    levelElement.dispatchEvent(new Event('keyup'));
}

function changeRank(idName, rank) {
    const rankElement = document.getElementById(idName);
    const num = Number(rankElement.value) + Number(rank);
    if (6 < num || num < -6) {
        return;
    }
    rankElement.value = num;
    rankElement.dispatchEvent(new Event('change'));
}

function changeNature(idName, nature) {
    const natureElement = document.getElementById(idName);
    if (nature === 'Atk') {
        natureElement.value = 'Adamant';
    } else if (nature === 'SpA') {
        natureElement.value = 'Modest';
    } else {
        const side = idName === 'natureL' ? 'L' : 'R';
        const totalAt = Number(document.getElementById('totalAt' + side).innerText);
        const totalSa = Number(document.getElementById('totalSa' + side).innerText);
        if (nature === 'Def') {
            natureElement.value = totalAt < totalSa ? 'Bold' : 'Impish';
        } else if (nature === 'SpD') {
            natureElement.value = totalAt < totalSa ? 'Calm' : 'Careful';
        } else if (nature === 'Spe') {
            natureElement.value = totalAt < totalSa ? 'Timid' : 'Jolly';
        } else {
            return;
        }
    }
    natureElement.dispatchEvent(new Event('change'));
}

function changeTeraL() {
    const teraElement = document.getElementById('teraTypeL');
    const selected = document.querySelector('input[name="teraRadioL"]:checked');
    teraElement.value = selected.value;
    teraElement.dispatchEvent(new Event('change'));
}

function changeTeraR() {
    const teraElement = document.getElementById('teraTypeR');
    const selected = document.querySelector('input[name="teraRadioR"]:checked');
    teraElement.value = selected.value;
    teraElement.dispatchEvent(new Event('change'));
}

function changeEv(idName, ev) {
    const evElement = document.getElementById(idName);
    const val = Number(evElement.value);
    if (0 < ev) {
        evElement.value = 244 < val ? 252 : Math.ceil((val + 8) / 8.0) * 8 - 4;
    } else {
        evElement.value = val < 12 ? 0 : Math.ceil((val - 8) / 8.0) * 8 - 4;
    }
    evElement.dispatchEvent(new Event('keyup'));
}
