window.onload = function() {

    document.querySelector("#calc_result_textarea").addEventListener("input",function() {
        splitDamage(this.value);
        const hitRadioElements = document.getElementsByName("hit");
        for (const element of hitRadioElements) {
            if (element.checked) {
                setResultHp(element.value);
                return;
            }
        }
    });

}

function splitDamage(calcResultText) {
    const idArray = [
        "#damage_d1",
        "#damage_d2",
        "#damage_d3",
        "#damage_d4",
        "#damage_d5",
        "#damage_d6",
        "#damage_d7",
        "#damage_d8",
        "#damage_d9",
        "#damage_d10",
        "#damage_d11",
        "#damage_d12",
        "#damage_d13",
        "#damage_d14",
        "#damage_d15",
        "#damage_d16"];
    for (const id of idArray) {
        document.querySelector(id).innerText = "";
    }
    const damageArray = calcResultText.replace(/[^,1234567890]/g, "").split(",");
    if (damageArray.length != 16) {
        return;
    }
    for (const damage of damageArray) {
        if (damage.length === 0) {
            return;
        }
    }
    for (const [i, damage] of damageArray.entries()) {
        document.querySelector(idArray[i]).innerText = damage;
    }
}

function setResultHp(hit) {
    const maxHp = Number(document.querySelector("#damage_d16").innerText) * Number(hit);
    const damageArray = [
        document.querySelector("#damage_d1").innerText,
        document.querySelector("#damage_d2").innerText,
        document.querySelector("#damage_d3").innerText,
        document.querySelector("#damage_d4").innerText,
        document.querySelector("#damage_d5").innerText,
        document.querySelector("#damage_d6").innerText,
        document.querySelector("#damage_d7").innerText,
        document.querySelector("#damage_d8").innerText,
        document.querySelector("#damage_d9").innerText,
        document.querySelector("#damage_d10").innerText,
        document.querySelector("#damage_d11").innerText,
        document.querySelector("#damage_d12").innerText,
        document.querySelector("#damage_d13").innerText,
        document.querySelector("#damage_d14").innerText,
        document.querySelector("#damage_d15").innerText,
        document.querySelector("#damage_d16").innerText];
    const denominator = 16 ** Number(hit);
    for (let i = 1; i <= 50; i++) {
        const hp = Number(maxHp) + 2 - i;
        document.querySelector("#result_h" + i).innerText = hp;
        let count = 0;
        for (const damage1 of damageArray) {
            for (const damage2 of damageArray) {
                for (const damage3 of damageArray) {
                     const totalDamage = Number(damage1) + Number(damage2) + Number(damage3);
                     if (hp <= totalDamage) {
                        count++;
                     }
                }
            }
        }
        document.querySelector("#result_d" + i).innerText = (Math.ceil(count * 10000 / denominator) / 100) + "%";
    }
}