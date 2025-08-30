(function () {
    const observer = new MutationObserver(() => {
        updateSprite();
        updateHpbar();
    });

    observer.observe(document.getElementsByClassName('item-selector')[0], {
        childList: true,
        characterData: true,
        subtree: true,
    });

    observer.observe(document.getElementsByClassName('item-selector')[1], {
        childList: true,
        characterData: true,
        subtree: true,
    });

    observer.observe(document.getElementById('resultHeaderL'), {
        childList: true,
        characterData: true,
        subtree: true,
    });

    observer.observe(document.getElementById('resultHeaderR'), {
        childList: true,
        characterData: true,
        subtree: true,
    });

    observer.observe(document.getElementById('mainResult'), {
        childList: true,
        characterData: true,
        subtree: true,
    });
})();

function updateSprite() {
    if (!document.getElementById('s2id_autogen25') || !document.getElementById('s2id_autogen27')) {
        return;
    }

    const itemNameL = document.getElementById('s2id_autogen25').children[0].children[0].innerText.replaceAll(/\s/g, '').toLowerCase();
    //document.getElementById('itemSpriteL').src = 'https://www.serebii.net/itemdex/sprites/' + itemNameL + '.png';
    document.getElementById('itemSpriteL').src = 'https://seiseikinkin.github.io/tools/image/itemsprites/' + itemNameL + '.png';

    const itemNameR = document.getElementById('s2id_autogen27').children[0].children[0].innerText.replaceAll(/\s/g, '').toLowerCase();
    //document.getElementById('itemSpriteR').src = 'https://www.serebii.net/itemdex/sprites/' + itemNameR + '.png';
    document.getElementById('itemSpriteR').src = 'https://seiseikinkin.github.io/tools/image/itemsprites/' + itemNameR + '.png';

    const pokemonNameL = document.getElementById('resultHeaderL').innerText.replaceAll(/'s\s.*/g, '');
    const pokemonImageL = pokemonNameL.replaceAll(/\s/g, '-').toLowerCase();
    document.getElementById('pokemonSpriteL').src = 'https://seiseikinkin.github.io/tools/image/minisprites/' + pokemonImageL + '.png';

    const pokemonNameR = document.getElementById('resultHeaderR').innerText.replaceAll(/'s\s.*/g, '');
    const pokemonImageR = pokemonNameR.replaceAll(/\s/g, '-').toLowerCase();
    document.getElementById('pokemonSpriteR').src = 'https://seiseikinkin.github.io/tools/image/minisprites/' + pokemonImageR + '.png';

    // mainResult
    const mainResult = document.getElementById('mainResult').innerText;

    const leftInfo = mainResult.replaceAll(/\svs\.\s.*/g, '');
    const midInfo = mainResult.replaceAll(/.*\svs\.\s([^:]+):\s.*/g, '$1');
    const fieldInfo = midInfo.split(pokemonNameR + ' ')[1];
    const rightInfo = midInfo.replace(fieldInfo, '');
    const damageInfo = mainResult.replaceAll(/.*:\s/g, '');

    document.getElementById('atk-info').innerText = leftInfo;
    document.getElementById('def-info').innerText = midInfo;
    document.getElementById('dmg-info').innerText = damageInfo;

    const isAtkLeft = mainResult.split(' / ')[0].includes(' ' + pokemonNameL + ' ');
    if (isAtkLeft) {
        document.getElementById('itemSpriteAtkSide').src = 'https://seiseikinkin.github.io/tools/image/itemsprites/' + itemNameL + '.png';
        document.getElementById('itemSpriteDefSide').src = 'https://seiseikinkin.github.io/tools/image/itemsprites/' + itemNameR + '.png';
        document.getElementById('pokemonSpriteAtkSide').src = 'https://seiseikinkin.github.io/tools/image/minisprites/' + pokemonImageL + '.png';
        document.getElementById('pokemonSpriteDefSide').src = 'https://seiseikinkin.github.io/tools/image/minisprites/' + pokemonImageR + '.png';
        const infoL = mainResult.split(' vs. ')[0];
        const infoR = mainResult.split(' vs. ')[1];
        const isTeraL = infoL.match(/Tera-([A-Za-z]+)/);
        const isTeraR = infoR.match(/Tera-([A-Za-z]+)/);
        document.getElementById('teraSpriteAtkSide').src = 'https://seiseikinkin.github.io/tools/image/teratype-icon/' + (isTeraL ? isTeraL[1].toLowerCase() : 'null') + '.png';
        document.getElementById('teraSpriteDefSide').src = 'https://seiseikinkin.github.io/tools/image/teratype-icon/' + (isTeraR ? isTeraR[1].toLowerCase() : 'null') + '.png';
        const statsL = mainResult.split(' vs. ')[0].replaceAll(/.*\s(Atk|SpA|Def)\s.*/g, '$1');
        const statsR = mainResult.split(' vs. ')[1].replaceAll(/.*\s(Def|SpD)\s.*/g, '$1');
        const atk =
            statsL === 'Atk'
                ? 'A' + document.getElementsByClassName('at')[0].children[5].children[0].innerText
                : statsL === 'SpA'
                ? 'C' + document.getElementsByClassName('sa')[0].children[5].children[0].innerText
                : 'B' + document.getElementsByClassName('df')[0].children[5].children[0].innerText;
        document.getElementById('statsAtkSide').innerText = atk;
        const hp = 'H' + document.getElementsByClassName('hp')[1].children[5].children[0].innerText;
        const def =
            statsR === 'Def' ? 'B' + document.getElementsByClassName('df')[1].children[5].children[0].innerText : 'D' + document.getElementsByClassName('sd')[1].children[5].children[0].innerText;
        document.getElementById('statsDefSide').innerText = hp + ' - ' + def;
    } else {
        document.getElementById('itemSpriteAtkSide').src = 'https://seiseikinkin.github.io/tools/image/itemsprites/' + itemNameR + '.png';
        document.getElementById('itemSpriteDefSide').src = 'https://seiseikinkin.github.io/tools/image/itemsprites/' + itemNameL + '.png';
        document.getElementById('pokemonSpriteAtkSide').src = 'https://seiseikinkin.github.io/tools/image/minisprites/' + pokemonImageR + '.png';
        document.getElementById('pokemonSpriteDefSide').src = 'https://seiseikinkin.github.io/tools/image/minisprites/' + pokemonImageL + '.png';
        const infoR = mainResult.split(' vs. ')[0];
        const infoL = mainResult.split(' vs. ')[1];
        const isTeraR = infoR.match(/Tera-([A-Za-z]+)/);
        const isTeraL = infoL.match(/Tera-([A-Za-z]+)/);
        document.getElementById('teraSpriteAtkSide').src = 'https://seiseikinkin.github.io/tools/image/teratype-icon/' + (isTeraR ? isTeraR[1].toLowerCase() : 'null') + '.png';
        document.getElementById('teraSpriteDefSide').src = 'https://seiseikinkin.github.io/tools/image/teratype-icon/' + (isTeraL ? isTeraL[1].toLowerCase() : 'null') + '.png';
        const statsR = mainResult.split(' vs. ')[0].replaceAll(/.*\s(Atk|SpA|Def)\s.*/g, '$1');
        const statsL = mainResult.split(' vs. ')[1].replaceAll(/.*\s(Def|SpD)\s.*/g, '$1');
        const atk =
            statsR === 'Atk'
                ? 'A' + document.getElementsByClassName('at')[1].children[5].children[0].innerText
                : statsR === 'SpA'
                ? 'C' + document.getElementsByClassName('sa')[1].children[5].children[0].innerText
                : 'B' + document.getElementsByClassName('df')[1].children[5].children[0].innerText;
        document.getElementById('statsAtkSide').innerText = atk;
        const hp = 'H' + document.getElementsByClassName('hp')[0].children[5].children[0].innerText;
        const def =
            statsL === 'Def' ? 'B' + document.getElementsByClassName('df')[0].children[5].children[0].innerText : 'D' + document.getElementsByClassName('sd')[0].children[5].children[0].innerText;
        document.getElementById('statsDefSide').innerText = hp + ' - ' + def;
    }
}

function updateHpbar() {
    const mainResult = document.getElementById('mainResult').innerText;

    const pokemonNameL = document.getElementById('resultHeaderL').innerText.replaceAll(/'s\s.*/g, '');
    const pokemonImageL = pokemonNameL.replaceAll(/\s/g, '-').toLowerCase();
    const isAtkLeft = mainResult.split(' / ')[0].includes(' ' + pokemonNameL + ' ');

    const m = mainResult.match(/:\s*(?<min>\d+)\s*-\s*(?<max>\d+)\s*\(\s*(?<minPct>\d+(?:\.\d+)?)\s*-\s*(?<maxPct>\d+(?:\.\d+)?)%\s*\)/);
    const { min, max, minPct, maxPct } = m.groups;
    const result = [min, max, minPct, maxPct].map(Number);
    if (isAtkLeft) {
        const hp = Number(document.getElementsByClassName('max-hp')[1].innerText);
        document.getElementById('minDmg').innerText = Math.max(0, hp - result[1]);
        document.getElementById('maxDmg').innerText = Math.max(0, hp - result[0]);
    } else {
        const hp = Number(document.getElementsByClassName('max-hp')[0].innerText);
        document.getElementById('minDmg').innerText = Math.max(0, hp - result[1]);
        document.getElementById('maxDmg').innerText = Math.max(0, hp - result[0]);
    }
    document.getElementById('minPct').innerText = Math.max(0, 100.0 - result[3]).toFixed(1);
    document.getElementById('maxPct').innerText = Math.max(0, 100.0 - result[2]).toFixed(1);
    setHPRange(100 - result[2], 100 - result[3]);
}

function setHPRange(minPercent, maxPercent) {
    // 正規化
    let min = Math.max(0, Math.min(100, Number(minPercent) || 0));
    let max = Math.max(0, Math.min(100, Number(maxPercent) || 0));
    if (max < min) [min, max] = [max, min];

    const current = document.getElementById('hpCurrent');
    const red = document.getElementById('hpDmgRed');
    const yellow = document.getElementById('hpDmgYellow');
    const green = document.getElementById('hpDmgGreen');
    const label = document.getElementById('hpLabel');

    // 明るい現在HPの色（min基準：<20赤, <50黄, >=50緑）
    current.className = 'hp-seg ' + (min >= 50 ? 'hp-green' : min >= 20 ? 'hp-yellow' : 'hp-red');
    current.style.left = '0%';
    current.style.width = `${min}%`;

    // ユーティリティ：区間を描画（なければ幅0）
    const setSeg = (el, start, end) => {
        const w = Math.max(0, end - start);
        el.style.left = `${start}%`;
        el.style.width = `${w}%`;
    };

    // ダメージ範囲を 0-20 / 20-50 / 50-100 の3区間に分割して重ねる
    setSeg(red, Math.min(min, 20), Math.min(max, 20)); // 暗赤
    setSeg(yellow, Math.max(min, 20), Math.min(max, 50)); // 暗黄
    setSeg(green, Math.max(min, 50), max); // 暗緑
}
