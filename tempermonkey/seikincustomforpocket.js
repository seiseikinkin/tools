// ==UserScript==
// @name         Seikin Custom for Pocket
// @namespace    http://tampermonkey.net/
// @version      2025-01-01
// @description  try to take over the world!
// @author       You
// @match        https://play.limitlesstcg.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=limitlesstcg.com
// @grant        none
// ==/UserScript==

(function() {

    // URLを取得して処理を制御
    const pathname = window.location.pathname;
    console.log(pathname);

    // ヘッダーを拡張
    console.log('customHeader');
    customHeader();

    // リンクを別タブで開く
    console.log('customLink');
    customLink();

    // デッキリストにポケモンのアイコンを追加
    if (pathname.match(/^.*\/decklist$/g)) {
        console.log('customDecklist');
        customDecklist();
        return;
    }

    // 対戦部屋に拡張
    if (pathname.match(/^\/match\/.*$/g)) {
        console.log('customRoom');
        customRoom();
        return;
    }

    // 順位一覧を拡張
    if (pathname.match(/^.*\/standings$/g)) {
        console.log('customStandings');
        customStandings();
        return;
    }

    // メタ分析を拡張
    if (pathname.match(/^.*\/metagame$/g)) {
        console.log('customMetagame');
        customMetagame();
        return;
    }

    // 過去大会一覧に順位情報を付与
    // https://play.limitlesstcg.com/tournaments/completed?game=POCKET
    if (pathname.match(/^\/tournaments\/completed$/g)) {
        console.log('customCompletedTourList');
        customCompletedTourList();
        return;
    }

    // 大会予定一覧に曜日を付与
    // https://play.limitlesstcg.com/tournaments/upcoming?game=POCKET&format=all&platform=all&type=online
    if (pathname.match(/^\/tournaments\/upcoming/g)) {
        console.log('customUpcomingTourList');
        customUpcomingTourList();
        return;
    }

})();

function customHeader() {

    // Tournaments
    document.querySelector("body > header > div.container.header.hwnav > nav > ul > li:nth-child(1) > a").setAttribute('target', '_blank');

    // Decks
    document.querySelector("body > header > div.container.header.hwnav > nav > ul > li:nth-child(2)").style.display = 'none';

    // Help
    document.querySelector("body > header > div.container.header.hwnav > nav > ul > li:nth-child(3)").style.display = 'none';

    // Upcoming
    const upcomingListItemElement = document.createElement('li');
    const upcomingAnchorElement = document.createElement('a');
    upcomingAnchorElement.innerHTML = 'Upcoming';
    upcomingAnchorElement.setAttribute('href', 'https://play.limitlesstcg.com/tournaments/upcoming?game=POCKET&format=all&platform=all&type=online');
    upcomingAnchorElement.setAttribute('target', '_blank');
    upcomingListItemElement.appendChild(upcomingAnchorElement);

    // Completed
    const completedListItemElement = document.createElement('li');
    const completedAnchorElement = document.createElement('a');
    completedAnchorElement.innerHTML = 'Completed';
    completedAnchorElement.setAttribute('href', 'https://play.limitlesstcg.com/tournaments/completed?game=POCKET&format=all&platform=all&type=online&time=4weeks');
    completedAnchorElement.setAttribute('target', '_blank');
    completedListItemElement.appendChild(completedAnchorElement);

    // Meta
    const metaListItemElement = document.createElement('li');
    const metaAnchorElement = document.createElement('a');
    metaAnchorElement.innerHTML = 'Meta';
    metaAnchorElement.setAttribute('href', 'https://play.limitlesstcg.com/decks?game=pocket');
    metaAnchorElement.setAttribute('target', '_blank');
    metaListItemElement.appendChild(metaAnchorElement);

    // My Decks
    const myDecksListItemElement = document.createElement('li');
    const myDecksAnchorElement = document.createElement('a');
    myDecksAnchorElement.innerHTML = 'My Decks';
    myDecksAnchorElement.setAttribute('href', 'https://my.limitlesstcg.com/');
    myDecksAnchorElement.setAttribute('target', '_blank');
    myDecksListItemElement.appendChild(myDecksAnchorElement);

    // Swiss Calc
    const swissCalcListItemElement = document.createElement('li');
    const swissCalcAnchorElement = document.createElement('a');
    swissCalcAnchorElement.innerHTML = 'Swiss Calc';
    swissCalcAnchorElement.setAttribute('href', 'https://card.netgamers.jp/');
    swissCalcAnchorElement.setAttribute('target', '_blank');
    swissCalcListItemElement.appendChild(swissCalcAnchorElement);

    // ヘッダーに挿入
    const tournamentsListElement = document.querySelector("body > header > div.container.header.hwnav > nav > ul");
    tournamentsListElement.appendChild(upcomingListItemElement);
    tournamentsListElement.appendChild(completedListItemElement);
    tournamentsListElement.appendChild(metaListItemElement);
    tournamentsListElement.appendChild(myDecksListItemElement);
    tournamentsListElement.appendChild(swissCalcListItemElement);
}

function customLink() {
    for (const element of document.getElementsByTagName('a')) {
        element.setAttribute('target', '_blank');
    }
}

function customDecklist() {
    displayPokemonIcon();
}

function customRoom() {

    // 部屋コードボタンを追加
    document.querySelector("#chat > div.row > div").after(createRoomCodeButton(createCode()));

    // サジェストボタンを追加
    const chatElement = document.querySelector("#chat");
    chatElement.append(createSuggestButton('hello', true));
    chatElement.append(createCodeButton());
    chatElement.append(createSuggestButton('searching', true));
    chatElement.append(createSuggestButton('gl hf', true));
    chatElement.append(createSuggestButton('gg', true));
    //chatElement.append(createTemplateButton());

    // デッキリストにポケモンのアイコンを追加
    displayPokemonIcon();
}

function createCode() {

    // 曖昧文字
    // 0：使用しない
    // O：英大文字を使用しない
    // 1：使用しない
    // l：使用しない

    // NGワード回避方法
    // 3p：pを使用しない
    // adhd：英文字の上限を2文字にする

    //const baseStr = 'abcdefghijkmnopqrstuvwxyz23456789';
    const baseNum = '23456789';
    const baseChar = 'abcdefghijkmnoqrstuvwxyz';

    const codeArray = [];
    /*for (let i = 0; i < 6; i++) {
        const max = baseStr.length;
        const randomIndex = Math.floor(Math.random() * max);
        codeArray[i] = baseStr[randomIndex];
    }*/
    for (let i = 0; i < 4; i++) {
        const max = baseNum.length;
        const randomIndex = Math.floor(Math.random() * max);
        codeArray[i] = baseNum[randomIndex];
    }
    for (let i = 4; i < 6; i++) {
        const max = baseChar.length;
        const randomIndex = Math.floor(Math.random() * max);
        codeArray[i] = baseChar[randomIndex];
    }

    return codeArray.join('');
}

function createRoomCodeButton(roomCode) {

    const mainColor = 'rgba(255, 255, 255, 1.0)';
    const subColor = 'rgba(242, 242, 247, 1.0)';

    const buttonElement = document.createElement('input');
    buttonElement.type = 'button';
    buttonElement.id = 'room-code';
    buttonElement.style.padding = '6px 12px 6px 12px';
    buttonElement.style.margin = '0 12px 0 auto';
    buttonElement.style.borderRadius = '6px';
    buttonElement.style.fontFamily = 'Consolas';
    buttonElement.style.backgroundColor = mainColor;
    buttonElement.style.cursor = 'pointer';
    buttonElement.value = roomCode;

    buttonElement.addEventListener('mouseout', () => {
        buttonElement.style.backgroundColor = mainColor;
    });

    buttonElement.addEventListener('mousedown', () => {
        buttonElement.style.backgroundColor = subColor;
    });

    buttonElement.addEventListener('mouseup', () => {
        buttonElement.style.backgroundColor = mainColor;
    });

    buttonElement.addEventListener('click', () => {
        navigator.clipboard.writeText(roomCode);
    });

    return buttonElement;
}

function createSuggestButton(text, doEvent) {

    const mainColor = 'rgba(255, 255, 255, 1.0)';
    const subColor = 'rgba(242, 242, 247, 1.0)';

    const buttonElement = document.createElement('input');
    buttonElement.type = 'button';
    buttonElement.id = text + '-button';
    buttonElement.style.padding = '6px 12px 6px 12px';
    buttonElement.style.marginTop = '10px';
    buttonElement.style.marginRight = '10px';
    buttonElement.style.borderRadius = '6px';
    buttonElement.style.backgroundColor = mainColor;
    buttonElement.style.cursor = 'pointer';
    buttonElement.value = text;

    buttonElement.addEventListener('mouseout', () => {
        buttonElement.style.backgroundColor = mainColor;
    });

    buttonElement.addEventListener('mousedown', () => {
        buttonElement.style.backgroundColor = subColor;
    });

    buttonElement.addEventListener('mouseup', () => {
        buttonElement.style.backgroundColor = mainColor;
    });

    if (!doEvent) {
        return buttonElement;
    }

    buttonElement.addEventListener('click', () => {
        document.querySelector("#chat > form > input").value = buttonElement.value;
    });

    return buttonElement;
}

function createCodeButton() {

    const buttonElement = createSuggestButton('code', false);

    const code = document.getElementById('room-code') ? document.getElementById('room-code').value : '';

    buttonElement.addEventListener('click', () => {
        document.querySelector("#chat > form > input").value = 'code: ' + code;
    });

    return buttonElement;
}

function createTemplateButton() {

    const buttonElement = createSuggestButton('...', false);
    const templateElement = createTemplateElement();

    buttonElement.addEventListener('click', () => {
        if (document.getElementById('template')) {
            document.getElementById('template').remove();
        } else {
            const messagesElement = document.querySelector("#chat > div.messages");
            messagesElement.append(templateElement);
            const bottom = messagesElement.scrollHeight - messagesElement.clientHeight;
            messagesElement.scroll(0, bottom);
        }
    });

    return buttonElement;
}

function createTemplateElement() {

    const templateElement = document.createElement('div');
    templateElement.id = 'template';
    templateElement.style.width = '413px';
    templateElement.style.padding = '0px 10px 10px 10px';
    templateElement.style.position = 'sticky';
    templateElement.style.alignSelf = 'flex-start';
    templateElement.style.borderRadius = '5px';
    templateElement.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';

    templateElement.addEventListener('click', () => {
        document.getElementById('template').remove();
    });

    templateElement.append(createSuggestButton('ok', true));
    templateElement.append(createSuggestButton('u2', true));
    templateElement.append(createSuggestButton('np', true));
    templateElement.append(createSuggestButton('wp', true));
    templateElement.append(createSuggestButton('wait a sec', true));
    templateElement.append(createSuggestButton('searching?', true));
    templateElement.append(createSuggestButton('same code', true));
    templateElement.append(createSuggestButton('use your code', true));
    templateElement.append(createSuggestButton('your decklist is incorrect', true));

    return templateElement;
}

function displayPokemonIcon() {

    const pokemonElementList = document.querySelector("body > div.main > div > div.decklist > div:nth-child(1) > div").children;

    for (let i = 1; i < pokemonElementList.length; i++) {
        const pokemonElement = pokemonElementList[i].children[0];
        const pokemonName = pokemonElement.innerText.replaceAll(/^[0-9]\s/g,'').replaceAll(/\s.*/g,'');
        const pokemonIconElement = createPokemonIconElement(pokemonName);
        pokemonElement.before(pokemonIconElement);

        pokemonElementList[i].style.display = 'flex';
        pokemonElementList[i].style.alignItems = 'center';
        pokemonElement.style.display = 'inline-block';
        pokemonElement.style.margin = '2px 0px';
    }
}

function createPokemonIconElement(name) {

    const fileName = name.toLowerCase().replaceAll("'", '');

    const pokemonIconElement = document.createElement('img');
    pokemonIconElement.classList.add('pokemon');
    pokemonIconElement.setAttribute('src', 'https://limitlesstcg.s3.us-east-2.amazonaws.com/pokemon/gen9/' + fileName + '.png');
    pokemonIconElement.style.width = '30px';
    pokemonIconElement.style.height = '30px';
    pokemonIconElement.style.objectFit = 'scale-down';

    return pokemonIconElement;
}

function customStandings() {

    // 列番号を取得
    const headerElementList = document.querySelector("body > div.main > div > div > table > tbody > tr:nth-child(1)").children;
    let scoreColumnNum = 0;
    let deckColumnNum = 0;
    for (let i = 0; i < headerElementList.length; i++) {
        if (headerElementList[i].innerText === 'Record') {
            scoreColumnNum = i;
        } else if (headerElementList[i].innerText === 'Deck') {
            deckColumnNum = i;
        }
    }

    // データを取得
    const dataMap = new Map();
    const dataElementList = document.querySelector("body > div.main > div > div > table > tbody").children;
    for (let i = 1; i < dataElementList.length; i++) {
        const score = dataElementList[i].children[scoreColumnNum].innerText.replaceAll(/drop/g, '').split(' - ');
        const win = Number(score[0]);
        const lose = Number(score[1]);
        const tie = Number(score[2]);
        const pokemonList = dataElementList[i].children[deckColumnNum].children[0].children[0].getAttribute('data-tooltip').split(' ');
        const name = pokemonList[0];
        const isEx = pokemonList[1] === 'ex';
        const key = isEx ? name + ' ex' : name;
        const name2 = isEx ? (pokemonList[2] ? pokemonList[2] : null) : (pokemonList[1] ? pokemonList[1] : null);

        const data = dataMap.get(key);
        if (data) {
            data.win += win;
            data.lose += lose;
            data.tie += tie;
            data.winRate = data.win / (data.win + data.lose + data.tie) * 100;
            data.count++;
        } else {
            dataMap.set(key, {
                name: name,
                isEx: isEx,
                name2: name2,
                win: win,
                lose: lose,
                tie: tie,
                winRate: win / (win + lose + tie) * 100,
                count: 1
            });
        }
    }

    document.querySelector("body > div.main").before(crateAnalysisElement(new Map([...dataMap].sort()), dataElementList.length - 1));
}

function customMetagame() {

    // 参加人数
    let totalCount = 0;

    // データを取得
    const dataMap = new Map();
    const dataElementList = document.querySelector("body > div.main > div > table > tbody").children;
    for (let i = 1; i < dataElementList.length; i++) {
        const count = Number(dataElementList[i].children[1].innerText);
        const pokemonList = dataElementList[i].children[2].children[0].innerText.split(' ');
        const name = pokemonList[0];
        const isEx = pokemonList[1] === 'ex';
        const key = isEx ? name + ' ex' : name;
        const share = Number(dataElementList[i].children[3].innerText.replace('%', ''));
        const score = dataElementList[i].children[4].children[0].innerText.split(' - ');
        const win = Number(score[0]);
        const lose = Number(score[1]);
        const tie = Number(score[2]);
        const winRate = Number(dataElementList[i].children[5].children[0].innerText.replace('%', ''));
        totalCount += count;

        const data = dataMap.get(key);
        if (data) {
            data.count += count;
            data.share += share;
            data.win += win;
            data.lose += lose;
            data.tie += tie;
            data.winRate = data.win / (data.win + data.lose + data.tie) * 100;
        } else {
            dataMap.set(key, {
                name: name,
                count: count,
                share: share,
                win: win,
                lose: lose,
                tie: tie,
                winRate: winRate
            });
        }
    }

    document.querySelector("body > div.main").before(crateAnalysisElement(new Map([...dataMap].sort()), totalCount));
}

function crateAnalysisElement(dataMap, total) {

    // 再集計
    const winRateSet = new Set();
    for (let key of dataMap.keys()) {
        winRateSet.add(dataMap.get(key).winRate);
    }
    const topWinRate = Array.from(winRateSet).sort((a, b) => (a > b ? -1 : 1))[4];

    // 使用率降順でソート
    const sortedDataMap = new Map(Array.from(dataMap).sort(([, valueA], [, valueB]) => {
        return valueB.count - valueA.count;
    }));

    // 統計情報を画面に表示
    const analysisElement = document.createElement('div');
    analysisElement.style.backgroundColor = 'rgba(255, 255, 255, 1.0)';
    analysisElement.style.margin = '15px auto 0px auto';
    analysisElement.style.borderRadius = '5px';
    analysisElement.style.textAlign = 'center';

    const analysisHeaderElement = document.createElement('div');
    analysisHeaderElement.innerText = 'Metagame Overview (' + total + ')';
    analysisHeaderElement.style.backgroundColor = '#f2f2f7';
    analysisHeaderElement.style.fontSize = '1.1em';
    analysisHeaderElement.style.fontWeight = '700';
    analysisHeaderElement.style.borderRadius = '5px';
    analysisHeaderElement.style.padding = '8px';
    //analysisHeaderElement.style.textAlign = 'left';
    analysisHeaderElement.style.display = 'block';
    analysisHeaderElement.style.margin = '0px 6px 6px 6px';

    const analysisLeftElement = document.createElement('div');
    analysisLeftElement.style.display = 'inline-block';
    analysisLeftElement.style.margin = '0px 12px';
    analysisLeftElement.style.verticalAlign = 'top';

    const analysisRightElement = document.createElement('div');
    analysisRightElement.style.display = 'inline-block';
    analysisRightElement.style.margin = '0px 12px';
    analysisRightElement.style.verticalAlign = 'top';

    // 30件まで表示
    if (dataMap.size < 20) {
        let dataIndex = 0;
        const halfLength = Math.ceil(dataMap.size / 2);
        for (let key of sortedDataMap.keys()) {
            dataIndex++;
            const dataElement = createDataElement(key, sortedDataMap.get(key), total, topWinRate);
            if (dataIndex <= halfLength) {
                analysisLeftElement.append(dataElement);
            } else {
                analysisRightElement.append(dataElement);
            }
        }
    } else {
        const keys = sortedDataMap.keys();
        for (let i = 0; i < 10; i++) {
            const key = keys.next().value;
            const dataElement = createDataElement(key, sortedDataMap.get(key), total, topWinRate);
            analysisLeftElement.append(dataElement);
        }
        for (let i = 0; i < 10; i++) {
            const key = keys.next().value;
            const dataElement = createDataElement(key, sortedDataMap.get(key), total, topWinRate);
            analysisRightElement.append(dataElement);
        }
    }

    analysisElement.append(analysisHeaderElement);
    analysisElement.append(analysisLeftElement);
    analysisElement.append(analysisRightElement);

    return analysisElement;
}

function createDataElement(key, data, total, topWinRate) {

    const iconElement = createPokemonIconElement(data.name);
    iconElement.style.display = 'inline-block';
    iconElement.style.margin = '0px 4px';

    const nameElement = document.createElement('div');
    nameElement.innerText = key;
    nameElement.style.display = 'inline-block';
    nameElement.style.width = '120px';
    nameElement.style.textAlign = 'left';
    nameElement.style.margin = '0px 4px';

    const countElement = document.createElement('div');
    countElement.innerText = data.count;
    countElement.style.display = 'inline-block';
    countElement.style.width = '30px';
    countElement.style.textAlign = 'right';
    countElement.style.margin = '0px 4px';

    const share = data.count / total * 100;
    const shareElement = document.createElement('div');
    shareElement.innerText = share.toFixed(2) + '%';
    shareElement.style.display = 'inline-block';
    shareElement.style.width = '62px';
    shareElement.style.textAlign = 'right';
    shareElement.style.margin = '0px 4px';

    const blankElement = document.createElement('div');
    blankElement.style.display = 'inline-block';
    blankElement.style.width = '5px';
    blankElement.style.margin = '0px 4px';

    const winElement = document.createElement('div');
    winElement.innerText = data.win;
    winElement.style.display = 'inline-block';
    winElement.style.width = '40px';
    winElement.style.textAlign = 'center';
    winElement.style.margin = '0px 4px';

    const hyphenElement1 = document.createElement('div');
    hyphenElement1.innerText = '-';
    hyphenElement1.style.display = 'inline-block';
    hyphenElement1.style.width = '5px';
    hyphenElement1.style.textAlign = 'center';

    const loseElement = document.createElement('div');
    loseElement.innerText = data.lose;
    loseElement.style.display = 'inline-block';
    loseElement.style.width = '40px';
    loseElement.style.textAlign = 'center';
    loseElement.style.margin = '0px 4px';

    const hyphenElement2 = document.createElement('div');
    hyphenElement2.innerText = '-';
    hyphenElement2.style.display = 'inline-block';
    hyphenElement2.style.width = '5px';
    hyphenElement2.style.textAlign = 'center';

    const tieElement = document.createElement('div');
    tieElement.innerText = data.tie;
    tieElement.style.display = 'inline-block';
    tieElement.style.width = '30px';
    tieElement.style.textAlign = 'center';
    tieElement.style.margin = '0px 4px';

    //const total = data.win + data.lose + data.tie;
    //const winRate = data.win / total * 100;
    const winRateElement = document.createElement('div');
    winRateElement.innerText = data.winRate ? data.winRate.toFixed(2) + '%' : '0.00%';
    winRateElement.style.display = 'inline-block';
    winRateElement.style.width = '58px';
    winRateElement.style.textAlign = 'right';
    winRateElement.style.margin = '0px 4px';
    if (topWinRate <= data.winRate) {
        winRateElement.style.color = 'red';
    }

    const dataElement = document.createElement('div');
    dataElement.append(iconElement);
    dataElement.append(nameElement);
    dataElement.append(countElement);
    dataElement.append(shareElement);
    dataElement.append(blankElement);
    dataElement.append(winElement);
    dataElement.append(hyphenElement1);
    dataElement.append(loseElement);
    dataElement.append(hyphenElement2);
    dataElement.append(tieElement);
    dataElement.append(winRateElement);

    dataElement.style.display = 'flex';
    dataElement.style.alignItems = 'center';
    dataElement.style.backgroundColor = 'rgba(255, 255, 255, 1.0)';
    dataElement.style.height = '38px';
    dataElement.style.borderBottom = '1px solid #E5E5E5';

    return dataElement;
}

function customCompletedTourList() {

    // 大会一覧を取得
    const dataElementList = document.querySelector("body > div.main > div > table > tbody").children;

    // ハイライト列を非表示
    dataElementList[0].children[0].style.display = 'none';

    // 日付の表タイトルを置き換える
    dataElementList[0].children[1].innerText = 'End Date';

    // 主催者列を非表示
    dataElementList[0].children[3].style.display = 'none';

    // フォーマット列を行の先頭に移動
    dataElementList[0].children[0].after(dataElementList[0].children[4]);

    // ヘッダーに順位を追加
    const placeHeader = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'];
    for (let i = 0; i < 8; i++) {
        const placeHeaderElement = document.createElement('th');
        placeHeaderElement.innerText = placeHeader[i];
        placeHeaderElement.classList.add('landscape-only');
        dataElementList[0].append(placeHeaderElement);
    }

    // リンクリスト
    const links = [];
    const localStandingsData = localStorage.getItem('StandingsData') ? JSON.parse(localStorage.getItem('StandingsData')) : {};

    for (let i = 1; i < dataElementList.length; i++) {

        // ハイライト列を非表示
        dataElementList[i].children[0].style.display = 'none';

        // 日付を置き換える
        const date = new Date(dataElementList[i].getAttribute('data-date'));
        date.setHours(date.getHours());
        const dateString = padZero(date.getMonth() + 1) + '月' + padZero(date.getDate()) + '日 ' + padZero(date.getHours()) + ':' + padZero(date.getMinutes());
        dataElementList[i].children[1].children[0].innerText = dateString;
        dataElementList[i].children[1].style.width = '110px';

        // リンクを取得
        const link = dataElementList[i].children[2].children[0].getAttribute('href');
        links.push(link);

        // 主催者列を非表示
        dataElementList[i].children[3].style.display = 'none';

        // フォーマット列を行の先頭に移動
        dataElementList[i].children[0].after(dataElementList[i].children[4]);
        dataElementList[i].children[1].style.paddingLeft = '10px';

        // 参加人数列を中央揃えにする
        dataElementList[i].children[5].style.textAlign = 'center';

        // 順位情報を追加するための箱を準備
        for (let j = 0; j < 8; j++) {
            dataElementList[i].append(document.createElement('td'));
        }
        dataElementList[i].children[14].style.paddingRight = '14px';

        // 既に取得済みの情報の場合はここで設定する
        if (localStandingsData[link]) {
            for (let j = 0; j < localStandingsData[link].length; j++) {
                dataElementList[i].children[7 + j].append(createPlaceAnchorElement(localStandingsData[link][j]));
            }
        }
    }

    // 大会の順位情報を表に追加
    for (let i = 0; i < links.length; i++) {
        const link = links[i];
        if (!localStandingsData[link]) {
            localStandingsData[link] = [];
            addStandingsData(link, dataElementList[i + 1], localStandingsData);
        }
    }
}

function padZero(num) {
    return String(num).padStart(2, '0')
}

async function addStandingsData(link, dataElement, localStandingsData) {

    const standingsDataList = [];

    await fetch(link)
        .then(response => response.text())
        .then(html => {

        // DOMParserを使用してHTMLを解析
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        // 列番号を取得
        const headerElementList = doc.querySelector("body > div.main > div > div.standings.completed > table > tbody > tr:nth-child(1)").children;
        let deckColumnNum = 0;
        let listColumnNum = 0;
        for (let i = 0; i < headerElementList.length; i++) {
            if (headerElementList[i].innerText === 'Deck') {
                deckColumnNum = i + 1;
            } else if (headerElementList[i].innerText === 'List') {
                listColumnNum = i + 1;
            }
        }

        // Top8までのデッキを取得
        const standingsData = [];
        for (let i = 2; i < 10; i++) {
            const icon = doc.querySelector("body > div.main > div > div.standings.completed > table > tbody > tr:nth-child(" + i + ") > td:nth-child(" + deckColumnNum + ") > a > span > img:nth-child(1)").getAttribute('src');
            const deckName = doc.querySelector("body > div.main > div > div.standings.completed > table > tbody > tr:nth-child(" + i + ") > td:nth-child(" + deckColumnNum + ") > a > span").getAttribute('data-tooltip');
            const decklistLink = 'https://play.limitlesstcg.com' + doc.querySelector("body > div.main > div > div.standings.completed > table > tbody > tr:nth-child(" + i + ") > td:nth-child(" + listColumnNum + ") > a").getAttribute('href');

            standingsDataList.push({
                icon: icon,
                deckName: deckName,
                link: decklistLink
            });
        }
    }).catch(err => console.error(err));

    // ポケモンアイコンを追加
    for (let i = 0; i < 8; i++) {
        dataElement.children[i + 7].append(createPlaceAnchorElement(standingsDataList[i]));
    }

    localStandingsData[link] = standingsDataList;
    localStorage.setItem('StandingsData', JSON.stringify(localStandingsData));
}

function createPlaceAnchorElement(standingsData) {

    const iconElement = document.createElement('img');
    iconElement.setAttribute('src', standingsData.icon);
    iconElement.style.width = '30px';
    iconElement.style.height = '30px';
    iconElement.style.objectFit = 'scale-down';

    const placeSpanElement = document.createElement('span');
    placeSpanElement.setAttribute('data-tooltip', standingsData.deckName);
    placeSpanElement.append(iconElement);

    const placeAnchorElement = document.createElement('a');
    placeAnchorElement.setAttribute('href', standingsData.link);
    placeAnchorElement.setAttribute('target', '_blank');
    placeAnchorElement.append(placeSpanElement);

    return placeAnchorElement;
}

function customUpcomingTourList() {

    // 大会一覧を取得
    const dataElementList = document.querySelector("body > div.main > div > table > tbody").children;

    // テーブル幅を調整
    dataElementList[0].children[2].style.width = '156px';
    dataElementList[0].children[4].style.width = '124px';
    dataElementList[0].children[6].style.width = '82px';

    for (let i = 1; i < dataElementList.length; i++) {

        // フォーマットを調整
        dataElementList[i].children[1].children[0].style.margin = '0px';
        if (dataElementList[i].children[1].children[1]) {
            dataElementList[i].children[1].children[1].style.display = 'none';
        }

        // 曜日を付与
        const dateStringBase = dataElementList[i].children[2].children[0].innerText;
        const dateString = dataElementList[i].children[2].children[0].innerText.replaceAll(/年|月/g, '/').replaceAll(/日/g, '').replaceAll(/\sJST/g, ':00');
        const dayOfWeekBase = ['日', '月', '火', '水', '木', '金', '土'];
        const dayOfWeek = dayOfWeekBase[new Date(dateString).getDay()];
        dataElementList[i].children[2].children[0].innerText = dateStringBase.replaceAll(/20[0-9]{2}年/g, '').replaceAll(/日/g, '日(' + dayOfWeek + ')').padStart(19, '0');
    }
}
