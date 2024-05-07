// ==UserScript==
// @name         Smart Calc
// @namespace    http://tampermonkey.net/
// @version      2023-12-29
// @description  try to take over the world!
// @author       You
// @match        https://nerd-of-now.github.io/NCP-VGC-Damage-Calculator/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.io
// @grant        none
// ==/UserScript==

(function() {

    // 右クリックイベントを無効
    document.oncontextmenu = function () {
        return false;
    };

    // バージョン
    const version = "3.2.1 alpha"

    // 非表示
    const headerElement = document.querySelector("body > div.header");
    const headerLogoElement = document.querySelector("body > div.header > div > span.header-logo");
    const headerNavElement = document.querySelector("body > div.header > div > span.nav")
    const titleElement = document.querySelector("body > div.wrapper > div:nth-child(1)");
    const titleUnderLineElement = document.querySelector("body > div.wrapper > hr");
    const credit3Element = document.querySelector("body > div.wrapper > p:nth-child(3)");
    const credit4Element = document.querySelector("body > div.wrapper > p:nth-child(4)");
    const credit5Element = document.querySelector("body > div.wrapper > p:nth-child(5)");
    const credit6Element = document.querySelector("body > div.wrapper > p:nth-child(6)");
    const footerElement = document.querySelector("body > div.wrapper > div.footer");
    const footerBlankElement = document.querySelector("body > div:nth-child(3)");
    const panelHeaderElementPokemon1 = document.querySelector("#p1 > div.panel-heading");
    const panelHeaderTitleElementPokemon1 = document.querySelector("#p1 > div.panel-heading > h4");
    const typeAreaElementPokemon1 = document.querySelector("#p1 > div.panel-body > div:nth-child(4) > div:nth-child(1)");
    const levelAreaElementPokemon1 = document.querySelector("#p1 > div.panel-body > div:nth-child(4) > div:nth-child(4)");
    const customSetsOnlyAreaElementPokemon1 = document.querySelector("#p1 > div.panel-body > div.gen-specific.g5.g6.g7.g8.g9");
    const panelHeaderElementPokemon2 = document.querySelector("#p2 > div.panel-heading");
    const panelHeaderTitleElementPokemon2 = document.querySelector("#p2 > div.panel-heading > h4");
    const typeAreaElementPokemon2 = document.querySelector("#p2 > div.panel-body > div:nth-child(4) > div:nth-child(1)");
    const levelAreaElementPokemon2 = document.querySelector("#p2 > div.panel-body > div:nth-child(4) > div:nth-child(4)");
    const customSetsOnlyAreaElementPokemon2 = document.querySelector("#p2 > div.panel-body > div.gen-specific.g5.g6.g7.g8.g9");
    const panelHeaderElementField = document.querySelector("#field-panel > div.panel-heading");
    const panelHeaderTitleElementField = document.querySelector("#field-panel > div.panel-heading > h4");
    const panelHeaderAutoLevelElementField = document.querySelector("#autolevel");
    const fieldUnderLineElementField = document.querySelector("#field-panel > div.panel-body > hr:nth-child(3)");
    const reflectAreaElement = document.querySelector("#field-panel > div.panel-body > div:nth-child(14)");
    const seaOfFireAreaElement = document.querySelector("#field-panel > div.panel-body > div:nth-child(17)");
    const stealthRockAreaElement = document.querySelector("#field-panel > div.panel-body > div:nth-child(20)");
    const spikesAreaElement = document.querySelector("#field-panel > div.panel-body > div:nth-child(21)");
    const steelySpiritAreaElement = document.querySelector("#field-panel > div.panel-body > div:nth-child(23)");
    const powerSpotAreaElement = document.querySelector("#field-panel > div.panel-body > div:nth-child(24)");
    const batteryAreaElement = document.querySelector("#field-panel > div.panel-body > div:nth-child(25)");
    const saltCureAreaElement = document.querySelector("#field-panel > div.panel-body > div:nth-child(26)");
    const commanderAreaElement = document.querySelector("#field-panel > div.panel-body > div:nth-child(29)");
    const description1Element = document.querySelector("#field-panel > div.panel-body > p:nth-child(32)");
    const deleteCustomSetsButtonElement = document.querySelector("#field-panel > div.panel-body > button:nth-child(38)");
    const description2Element = document.querySelector("#field-panel > div.panel-body > p:nth-child(39)");
    const afdElement = document.querySelector("body > div.wrapper > button");
    const sideBarAreaElementPokemon1 = document.querySelector("#p1 > div.panel-body > div:nth-child(5)");
    const sideBarAreaElementPokemon2 = document.querySelector("#p2 > div.panel-body > div:nth-child(5)");
    const currentHpAreaElementPokemon1 = document.querySelector("#p1 > div.panel-body > div:nth-child(8)");
    const currentHpAreaElementPokemon2 = document.querySelector("#p2 > div.panel-body > div:nth-child(8)");
    //hideElement(headerElement);
    hideElement(headerLogoElement);
    hideElement(headerNavElement);
    hideElement(titleElement);
    hideElement(titleUnderLineElement);
    hideElement(credit3Element);
    hideElement(credit4Element);
    hideElement(credit5Element);
    hideElement(credit6Element);
    //hideElement(footerElement);
    hideElement(footerBlankElement);
    //hideElement(panelHeaderElementPokemon1);
    //hideElement(panelHeaderTitleElementPokemon1);
    hideElement(typeAreaElementPokemon1);
    hideElement(levelAreaElementPokemon1);
    hideElement(customSetsOnlyAreaElementPokemon1);
    //hideElement(panelHeaderElementPokemon2);
    //hideElement(panelHeaderTitleElementPokemon2);
    hideElement(typeAreaElementPokemon2);
    hideElement(levelAreaElementPokemon2);
    hideElement(customSetsOnlyAreaElementPokemon2);
    //hideElement(panelHeaderElementField);
    hideElement(panelHeaderAutoLevelElementField);
    hideElement(fieldUnderLineElementField);
    hideElement(reflectAreaElement);
    hideElement(seaOfFireAreaElement);
    hideElement(stealthRockAreaElement);
    hideElement(spikesAreaElement);
    hideElement(steelySpiritAreaElement);
    hideElement(powerSpotAreaElement);
    hideElement(batteryAreaElement);
    hideElement(saltCureAreaElement);
    hideElement(commanderAreaElement);
    hideElement(description1Element);
    hideElement(deleteCustomSetsButtonElement);
    hideElement(description2Element);
    hideElement(afdElement);
    hideElement(sideBarAreaElementPokemon1);
    hideElement(sideBarAreaElementPokemon2);
    //hideElement(currentHpAreaElementPokemon1);
    //hideElement(currentHpAreaElementPokemon2);

    // 非活性
    const baseHpInputElementPokemon1 = document.querySelector("#p1 > div.panel-body > div:nth-child(6) > table > tbody > tr.hp > td:nth-child(2) > input");
    const baseAtInputElementPokemon1 = document.querySelector("#p1 > div.panel-body > div:nth-child(6) > table > tbody > tr.at > td:nth-child(2) > input");
    const baseDfInputElementPokemon1 = document.querySelector("#p1 > div.panel-body > div:nth-child(6) > table > tbody > tr.df > td:nth-child(2) > input");
    const baseSaInputElementPokemon1 = document.querySelector("#p1 > div.panel-body > div:nth-child(6) > table > tbody > tr.sa > td:nth-child(2) > input");
    const baseSdInputElementPokemon1 = document.querySelector("#p1 > div.panel-body > div:nth-child(6) > table > tbody > tr.sd > td:nth-child(2) > input");
    const baseSpInputElementPokemon1 = document.querySelector("#p1 > div.panel-body > div:nth-child(6) > table > tbody > tr.sp > td:nth-child(2) > input");
    const baseHpInputElementPokemon2 = document.querySelector("#p2 > div.panel-body > div:nth-child(6) > table > tbody > tr.hp > td:nth-child(2) > input");
    const baseAtInputElementPokemon2 = document.querySelector("#p2 > div.panel-body > div:nth-child(6) > table > tbody > tr.at > td:nth-child(2) > input");
    const baseDfInputElementPokemon2 = document.querySelector("#p2 > div.panel-body > div:nth-child(6) > table > tbody > tr.df > td:nth-child(2) > input");
    const baseSaInputElementPokemon2 = document.querySelector("#p2 > div.panel-body > div:nth-child(6) > table > tbody > tr.sa > td:nth-child(2) > input");
    const baseSdInputElementPokemon2 = document.querySelector("#p2 > div.panel-body > div:nth-child(6) > table > tbody > tr.sd > td:nth-child(2) > input");
    const baseSpInputElementPokemon2 = document.querySelector("#p2 > div.panel-body > div:nth-child(6) > table > tbody > tr.sp > td:nth-child(2) > input");
    disableElement(baseHpInputElementPokemon1);
    disableElement(baseAtInputElementPokemon1);
    disableElement(baseDfInputElementPokemon1);
    disableElement(baseSaInputElementPokemon1);
    disableElement(baseSdInputElementPokemon1);
    disableElement(baseSpInputElementPokemon1);
    disableElement(baseHpInputElementPokemon2);
    disableElement(baseAtInputElementPokemon2);
    disableElement(baseDfInputElementPokemon2);
    disableElement(baseSaInputElementPokemon2);
    disableElement(baseSdInputElementPokemon2);
    disableElement(baseSpInputElementPokemon2);

    // エレメントを定数に保持（後続処理でエレメントを追加した場合にインデックスがずれるため）
    const nameSelectBoxElementPokemon1 = document.getElementById('s2id_autogen1');
    const nameSelectBoxElementPokemon2 = document.getElementById('s2id_autogen3');
    const totalLabelElementPokemon1 = document.querySelector("#p1 > div.panel-body > div:nth-child(6) > table > tbody > tr:nth-child(1) > th:nth-child(7)");
    const totalLabelElementPokemon2 = document.querySelector("#p2 > div.panel-body > div:nth-child(6) > table > tbody > tr:nth-child(1) > th:nth-child(7)");
    const totalHpTextElementPokemon1 = document.querySelector("#p1 > div.panel-body > div:nth-child(6) > table > tbody > tr.hp > td:nth-child(6) > span");
    const totalAtTextElementPokemon1 = document.querySelector("#p1 > div.panel-body > div:nth-child(6) > table > tbody > tr.at > td:nth-child(6) > span");
    const totalDfTextElementPokemon1 = document.querySelector("#p1 > div.panel-body > div:nth-child(6) > table > tbody > tr.df > td:nth-child(6) > span");
    const totalSaTextElementPokemon1 = document.querySelector("#p1 > div.panel-body > div:nth-child(6) > table > tbody > tr.sa > td:nth-child(6) > span");
    const totalSdTextElementPokemon1 = document.querySelector("#p1 > div.panel-body > div:nth-child(6) > table > tbody > tr.sd > td:nth-child(6) > span");
    const totalSpTextElementPokemon1 = document.querySelector("#p1 > div.panel-body > div:nth-child(6) > table > tbody > tr.sp > td:nth-child(6) > span");
    const totalHpTextElementPokemon2 = document.querySelector("#p2 > div.panel-body > div:nth-child(6) > table > tbody > tr.hp > td:nth-child(6) > span");
    const totalAtTextElementPokemon2 = document.querySelector("#p2 > div.panel-body > div:nth-child(6) > table > tbody > tr.at > td:nth-child(6) > span");
    const totalDfTextElementPokemon2 = document.querySelector("#p2 > div.panel-body > div:nth-child(6) > table > tbody > tr.df > td:nth-child(6) > span");
    const totalSaTextElementPokemon2 = document.querySelector("#p2 > div.panel-body > div:nth-child(6) > table > tbody > tr.sa > td:nth-child(6) > span");
    const totalSdTextElementPokemon2 = document.querySelector("#p2 > div.panel-body > div:nth-child(6) > table > tbody > tr.sd > td:nth-child(6) > span");
    const totalSpTextElementPokemon2 = document.querySelector("#p2 > div.panel-body > div:nth-child(6) > table > tbody > tr.sp > td:nth-child(6) > span");
    const evHpTdElementPokemon1 = document.querySelector("#p1 > div.panel-body > div:nth-child(6) > table > tbody > tr.hp > td:nth-child(4)");
    const evAtTdElementPokemon1 = document.querySelector("#p1 > div.panel-body > div:nth-child(6) > table > tbody > tr.at > td:nth-child(4)");
    const evDfTdElementPokemon1 = document.querySelector("#p1 > div.panel-body > div:nth-child(6) > table > tbody > tr.df > td:nth-child(4)");
    const evSaTdElementPokemon1 = document.querySelector("#p1 > div.panel-body > div:nth-child(6) > table > tbody > tr.sa > td:nth-child(4)");
    const evSdTdElementPokemon1 = document.querySelector("#p1 > div.panel-body > div:nth-child(6) > table > tbody > tr.sd > td:nth-child(4)");
    const evSpTdElementPokemon1 = document.querySelector("#p1 > div.panel-body > div:nth-child(6) > table > tbody > tr.sp > td:nth-child(4)");
    const evHpInputElementPokemon1 = document.querySelector("#p1 > div.panel-body > div:nth-child(6) > table > tbody > tr.hp > td:nth-child(4) > input");
    const evAtInputElementPokemon1 = document.querySelector("#p1 > div.panel-body > div:nth-child(6) > table > tbody > tr.at > td:nth-child(4) > input");
    const evDfInputElementPokemon1 = document.querySelector("#p1 > div.panel-body > div:nth-child(6) > table > tbody > tr.df > td:nth-child(4) > input");
    const evSaInputElementPokemon1 = document.querySelector("#p1 > div.panel-body > div:nth-child(6) > table > tbody > tr.sa > td:nth-child(4) > input");
    const evSdInputElementPokemon1 = document.querySelector("#p1 > div.panel-body > div:nth-child(6) > table > tbody > tr.sd > td:nth-child(4) > input");
    const evSpInputElementPokemon1 = document.querySelector("#p1 > div.panel-body > div:nth-child(6) > table > tbody > tr.sp > td:nth-child(4) > input");
    const evHpTdElementPokemon2 = document.querySelector("#p2 > div.panel-body > div:nth-child(6) > table > tbody > tr.hp > td:nth-child(4)");
    const evAtTdElementPokemon2 = document.querySelector("#p2 > div.panel-body > div:nth-child(6) > table > tbody > tr.at > td:nth-child(4)");
    const evDfTdElementPokemon2 = document.querySelector("#p2 > div.panel-body > div:nth-child(6) > table > tbody > tr.df > td:nth-child(4)");
    const evSaTdElementPokemon2 = document.querySelector("#p2 > div.panel-body > div:nth-child(6) > table > tbody > tr.sa > td:nth-child(4)");
    const evSdTdElementPokemon2 = document.querySelector("#p2 > div.panel-body > div:nth-child(6) > table > tbody > tr.sd > td:nth-child(4)");
    const evSpTdElementPokemon2 = document.querySelector("#p2 > div.panel-body > div:nth-child(6) > table > tbody > tr.sp > td:nth-child(4)");
    const evHpInputElementPokemon2 = document.querySelector("#p2 > div.panel-body > div:nth-child(6) > table > tbody > tr.hp > td:nth-child(4) > input");
    const evAtInputElementPokemon2 = document.querySelector("#p2 > div.panel-body > div:nth-child(6) > table > tbody > tr.at > td:nth-child(4) > input");
    const evDfInputElementPokemon2 = document.querySelector("#p2 > div.panel-body > div:nth-child(6) > table > tbody > tr.df > td:nth-child(4) > input");
    const evSaInputElementPokemon2 = document.querySelector("#p2 > div.panel-body > div:nth-child(6) > table > tbody > tr.sa > td:nth-child(4) > input");
    const evSdInputElementPokemon2 = document.querySelector("#p2 > div.panel-body > div:nth-child(6) > table > tbody > tr.sd > td:nth-child(4) > input");
    const evSpInputElementPokemon2 = document.querySelector("#p2 > div.panel-body > div:nth-child(6) > table > tbody > tr.sp > td:nth-child(4) > input");
    const rankHpTrElementPokemon1 = document.querySelector("#p1 > div.panel-body > div:nth-child(6) > table > tbody > tr.hp > td:nth-child(7)")
    const rankDfTrElementPokemon1 = document.querySelector("#p1 > div.panel-body > div:nth-child(6) > table > tbody > tr.df > td:nth-child(7)");
    const rankSdTrElementPokemon1 = document.querySelector("#p1 > div.panel-body > div:nth-child(6) > table > tbody > tr.sd > td:nth-child(7)");
    const rankHpTrElementPokemon2 = document.querySelector("#p2 > div.panel-body > div:nth-child(6) > table > tbody > tr.hp > td:nth-child(7)");
    const rankDfTrElementPokemon2 = document.querySelector("#p2 > div.panel-body > div:nth-child(6) > table > tbody > tr.df > td:nth-child(7)");
    const rankSdTrElementPokemon2 = document.querySelector("#p2 > div.panel-body > div:nth-child(6) > table > tbody > tr.sd > td:nth-child(7)");
    const calcSetInputElementPokemon1 = document.querySelector("#setName1");
    const calcSetSaveButtonElementPokemon1 = document.querySelector("#p1 > div.panel-body > div:nth-child(14) > button:nth-child(2)");
    const calcSetExportButtonElementPokemon1 = document.querySelector("#p1 > div.panel-body > div:nth-child(14) > button:nth-child(3)");
    const calcSetDeleteButtonElementPokemon1 = document.querySelector("#p1 > div.panel-body > div:nth-child(14) > button:nth-child(4)");
    const calcSetInputElementPokemon2 = document.querySelector("#setName2");
    const calcSetSaveButtonElementPokemon2 = document.querySelector("#p2 > div.panel-body > div:nth-child(14) > button:nth-child(2)");
    const calcSetExportButtonElementPokemon2 = document.querySelector("#p2 > div.panel-body > div:nth-child(14) > button:nth-child(3)");
    const calcSetDeleteButtonElementPokemon2 = document.querySelector("#p2 > div.panel-body > div:nth-child(14) > button:nth-child(4)");
    const ivHpInputElementPokemon1 = document.querySelector("#p1 > div.panel-body > div:nth-child(6) > table > tbody > tr.hp > td:nth-child(3) > input");
    const ivAtInputElementPokemon1 = document.querySelector("#p1 > div.panel-body > div:nth-child(6) > table > tbody > tr.at > td:nth-child(3) > input");
    const ivDfInputElementPokemon1 = document.querySelector("#p1 > div.panel-body > div:nth-child(6) > table > tbody > tr.df > td:nth-child(3) > input");
    const ivSaInputElementPokemon1 = document.querySelector("#p1 > div.panel-body > div:nth-child(6) > table > tbody > tr.sa > td:nth-child(3) > input");
    const ivSdInputElementPokemon1 = document.querySelector("#p1 > div.panel-body > div:nth-child(6) > table > tbody > tr.sd > td:nth-child(3) > input");
    const ivSpInputElementPokemon1 = document.querySelector("#p1 > div.panel-body > div:nth-child(6) > table > tbody > tr.sp > td:nth-child(3) > input");
    const ivHpInputElementPokemon2 = document.querySelector("#p2 > div.panel-body > div:nth-child(6) > table > tbody > tr.hp > td:nth-child(3) > input");
    const ivAtInputElementPokemon2 = document.querySelector("#p2 > div.panel-body > div:nth-child(6) > table > tbody > tr.at > td:nth-child(3) > input");
    const ivDfInputElementPokemon2 = document.querySelector("#p2 > div.panel-body > div:nth-child(6) > table > tbody > tr.df > td:nth-child(3) > input");
    const ivSaInputElementPokemon2 = document.querySelector("#p2 > div.panel-body > div:nth-child(6) > table > tbody > tr.sa > td:nth-child(3) > input");
    const ivSdInputElementPokemon2 = document.querySelector("#p2 > div.panel-body > div:nth-child(6) > table > tbody > tr.sd > td:nth-child(3) > input");
    const ivSpInputElementPokemon2 = document.querySelector("#p2 > div.panel-body > div:nth-child(6) > table > tbody > tr.sp > td:nth-child(3) > input");
    const natureSelectBoxElementPokemon1 = document.querySelector("#p1 > div.panel-body > div.info-group.info-selectors > div:nth-child(1) > select");
    const natureSelectBoxElementPokemon2 = document.querySelector("#p2 > div.panel-body > div.info-group.info-selectors > div:nth-child(1) > select");

    const teraTypeAreaElementPokemon1 = document.querySelector("#p1 > div.panel-body > div:nth-child(4) > div.gen-specific.g9");
    const statusAreaElementPokemon1 = document.querySelector("#p1 > div.panel-body > div:nth-child(6)");
    const teraTypeAreaElementPokemon2 = document.querySelector("#p2 > div.panel-body > div:nth-child(4) > div.gen-specific.g9");
    const statusAreaElementPokemon2 = document.querySelector("#p2 > div.panel-body > div:nth-child(6)");

    const itemSelectBoxElementPokemon1 = document.querySelector("#s2id_autogen25 > a > span.select2-chosen");
    const itemSelectBoxElementPokemon2 = document.querySelector("#s2id_autogen27 > a > span.select2-chosen");
    const type1SelectBoxElementPokemon1 = document.querySelector("#p1 > div.panel-body > div:nth-child(4) > div:nth-child(1) > select.type1.terrain-trigger.calc-trigger");
    const type2SelectBoxElementPokemon1 = document.querySelector("#p1 > div.panel-body > div:nth-child(4) > div:nth-child(1) > select.type2.terrain-trigger.calc-trigger");
    const type1SelectBoxElementPokemon2 = document.querySelector("#p2 > div.panel-body > div:nth-child(4) > div:nth-child(1) > select.type1.terrain-trigger.calc-trigger");
    const type2SelectBoxElementPokemon2 = document.querySelector("#p2 > div.panel-body > div:nth-child(4) > div:nth-child(1) > select.type2.terrain-trigger.calc-trigger");

    const teraTypeSelectBoxElementPokemon1 = document.querySelector("#p1 > div.panel-body > div:nth-child(4) > div.gen-specific.g9 > select");
    const teraTypeSelectBoxElementPokemon2 = document.querySelector("#p2 > div.panel-body > div:nth-child(4) > div.gen-specific.g9 > select");
    const teraTypeButtonElementPokemon1 = document.querySelector("#p1 > div.panel-body > div:nth-child(8) > label.btn.btn-wide.gen-specific.g9");
    const teraTypeButtonElementPokemon2 = document.querySelector("#p2 > div.panel-body > div:nth-child(8) > label.btn.btn-wide.gen-specific.g9");

    const underLimitEvElementPokemon1 = document.querySelector("#p1 > div.panel-body > div:nth-child(5) > table > tbody > tr:nth-child(9) > td.ev-left.underLimit");
    const underLimitEvElementPokemon2 = document.querySelector("#p2 > div.panel-body > div:nth-child(5) > table > tbody > tr:nth-child(9) > td.ev-left.underLimit");

    const faviconElement = document.querySelector("head > link:nth-child(1)");

    const exportButtonElementPokemon1 = document.querySelector("#p1 > div.panel-body > div:nth-child(14) > button:nth-child(3)");
    const exportButtonElementPokemon2 = document.querySelector("#p2 > div.panel-body > div:nth-child(14) > button:nth-child(3)");
    const importButtonElement = document.querySelector("#field-panel > div.panel-body > button:nth-child(37)");

    const typeLevelAreaElementPokemon1 = document.querySelector("#p1 > div.panel-body > div:nth-child(4)");
    const typeLevelAreaElementPokemon2 = document.querySelector("#p2 > div.panel-body > div:nth-child(4)");

    //const panelElementField = document.querySelector("#field-panel > div.panel-body");

    const hpTrElementPokemon1 = document.querySelector("#p1 > div.panel-body > div:nth-child(6) > table > tbody > tr.hp");
    const hpTrElementPokemon2 = document.querySelector("#p2 > div.panel-body > div:nth-child(6) > table > tbody > tr.hp");

    const mainResultElement = document.querySelector("#mainResult");

    const panelElementPokemon1 = document.querySelector("#p1");
    const panelElementPokemon2 = document.querySelector("#p2");
    const panelElementField = document.querySelector("#field-panel");

    const moveResultGroup = document.querySelector("body > div.wrapper > div.move-result-group");
    const mainResultGroup = document.querySelector("body > div.wrapper > div.main-result-group");

    const customMonTextAreaElement = document.querySelector("#customMon");

    const headerWrapperElement = document.querySelector("body > div.header > div");

    // ヘッダーのスタイルを変更
    const headerTitleElement = document.createElement('span');
    headerTitleElement.innerText = 'VGC 2024: Scarlet & Violet Damage Calculator';
    headerTitleElement.style.fontSize = '14px';
    headerTitleElement.style.fontWeight = 'bold';
    headerTitleElement.style.paddingLeft = '8px';
    const headerTitleVersionElement = document.createElement('span');
    headerTitleVersionElement.innerText = ' - Expansion v' + version;
    headerTitleVersionElement.style.fontSize = '10px';
    headerWrapperElement.append(headerTitleElement);
    headerWrapperElement.append(headerTitleVersionElement);
    headerWrapperElement.style.paddingTop = '10px';
    headerElement.style.borderBottom = '0px';
    headerElement.style.boxShadow = '0px';
    headerElement.style.minHeight = '40px';
    headerElement.style.background = '#404040';
    headerElement.style.verticalAlign = 'middle';

    // テラスタルボタンの位置を変更
    teraTypeSelectBoxElementPokemon1.after(teraTypeButtonElementPokemon1);
    teraTypeSelectBoxElementPokemon2.after(teraTypeButtonElementPokemon2);
    teraTypeButtonElementPokemon1.style.marginLeft = '8px';
    teraTypeButtonElementPokemon1.style.padding = '2px';
    teraTypeButtonElementPokemon1.style.fontSize = '12px';
    teraTypeButtonElementPokemon2.style.marginLeft = '8px';
    teraTypeButtonElementPokemon2.style.padding = '2px';
    teraTypeButtonElementPokemon2.style.fontSize = '12px';

    // 現在HPの位置を変更
    //typeLevelAreaElementPokemon1.after(currentHpAreaElementPokemon1);
    currentHpAreaElementPokemon1.style.marginTop = '-6px';
    currentHpAreaElementPokemon1.style.marginBottom = '6px';
    //currentHpAreaElementPokemon1.style.marginBottom = '12px';
    //typeLevelAreaElementPokemon2.after(currentHpAreaElementPokemon2);
    currentHpAreaElementPokemon2.style.marginTop = '-6px';
    currentHpAreaElementPokemon2.style.marginBottom = '6px';
    //currentHpAreaElementPokemon2.style.marginTop = '-6px';
    //currentHpAreaElementPokemon2.style.marginBottom = '12px';

    // フィールド情報を追加
    // 未実装
    // addFieldInfo(panelElementField);

    // レイアウト修正
    document.querySelector("body").style.minWidth = '1200px';
    document.querySelector("body > div.header > div").style.maxWidth = '1130px';
    document.querySelector("body > div.wrapper").style.marginTop = '-134px';
    document.querySelector("body > div.wrapper").style.maxWidth = '1130px';
    document.querySelector("body > div.wrapper > div.main-result-group > div.big-text").style.marginBottom = '2px';
    document.querySelector("body > div.wrapper > div.main-result-group").style.marginBottom = '4px';

    document.querySelector("#p1 > div.panel-body").style.paddingTop = '6px';
    document.querySelector("#p1 > div.panel-body").style.paddingBottom = '0px';
    document.querySelector("#p1 > div.panel-body").style.paddingLeft = '10px';
    teraTypeAreaElementPokemon1.style.marginTop = '-4px';
    document.querySelector("#p2 > div.panel-body").style.paddingTop = '6px';
    document.querySelector("#p2 > div.panel-body").style.paddingBottom = '0px';
    document.querySelector("#p2 > div.panel-body").style.paddingLeft = '10px';
    teraTypeAreaElementPokemon2.style.marginTop = '-4px';
    statusAreaElementPokemon1.style.marginTop = '-8px';
    statusAreaElementPokemon1.style.marginBottom = '-8px';
    statusAreaElementPokemon2.style.marginTop = '-8px';
    statusAreaElementPokemon2.style.marginBottom = '-8px';

    baseHpInputElementPokemon1.style.width = '26px';
    baseAtInputElementPokemon1.style.width = '26px';
    baseDfInputElementPokemon1.style.width = '26px';
    baseSaInputElementPokemon1.style.width = '26px';
    baseSdInputElementPokemon1.style.width = '26px';
    baseSpInputElementPokemon1.style.width = '26px';
    baseHpInputElementPokemon2.style.width = '26px';
    baseAtInputElementPokemon2.style.width = '26px';
    baseDfInputElementPokemon2.style.width = '26px';
    baseSaInputElementPokemon2.style.width = '26px';
    baseSdInputElementPokemon2.style.width = '26px';
    baseSpInputElementPokemon2.style.width = '26px';
    ivHpInputElementPokemon1.style.width = '26px';
    ivAtInputElementPokemon1.style.width = '26px';
    ivDfInputElementPokemon1.style.width = '26px';
    ivSaInputElementPokemon1.style.width = '26px';
    ivSdInputElementPokemon1.style.width = '26px';
    ivSpInputElementPokemon1.style.width = '26px';
    ivHpInputElementPokemon2.style.width = '26px';
    ivAtInputElementPokemon2.style.width = '26px';
    ivDfInputElementPokemon2.style.width = '26px';
    ivSaInputElementPokemon2.style.width = '26px';
    ivSdInputElementPokemon2.style.width = '26px';
    ivSpInputElementPokemon2.style.width = '26px';

    customMonTextAreaElement.style.resize = 'none';
    customMonTextAreaElement.style.width = '260px';

    // パネルのサイズを調整
    panelElementPokemon1.style.width = '400px';
    panelElementPokemon1.style.boxShadow = '0px 0px 0px';
    panelElementPokemon1.style.borderRadius = '8px';
    panelElementField.style.width = '300px';
    panelElementField.style.boxShadow = '0px 0px 0px';
    panelElementField.style.borderRadius = '8px';
    panelElementPokemon2.style.width = '400px';
    panelElementPokemon2.style.boxShadow = '0px 0px 0px';
    panelElementPokemon2.style.borderRadius = '8px';

    // 計算結果エリアを再作成
    const panelElementResult = document.createElement('div');
    panelElementResult.id = 'panelElementResult';
    panelElementResult.style.display = 'inline-block';
    panelElementResult.style.width = '1108px';
    panelElementResult.style.backgroundColor = '#fcfcfc';
    panelElementResult.style.marginLeft = '5px';
    panelElementResult.style.marginTop = '8px';
    panelElementResult.style.marginBottom = '4px';
    panelElementResult.style.paddingLeft = '12px';
    panelElementResult.style.paddingTop = '2px';
    panelElementResult.style.paddingBottom = '8px';
    panelElementResult.style.borderRadius = '8px';

    mainResultGroup.style.margin = '0px';
    mainResultGroup.style.width = '1000px';
    mainResultGroup.style.display = 'inline-block';
    mainResultGroup.style.verticalAlign = 'top';
    panelElementResult.append(mainResultGroup);

    const copyResultButton = document.createElement('button');
    copyResultButton.type = 'button';
    copyResultButton.id = 'copyResult';
    copyResultButton.innerText = 'Copy';
    copyResultButton.style.marginLeft = '4px';

    const saveResultButton = document.createElement('button');
    saveResultButton.type = 'button';
    saveResultButton.id = 'saveResult';
    saveResultButton.innerText = 'Add History';
    saveResultButton.style.marginLeft = '4px';
    saveResultButton.onclick = 'saveResult()';

    const resultButtonDivElement = document.createElement('div');
    resultButtonDivElement.style.display = 'inline-block';
    resultButtonDivElement.style.marginTop = '8px';
    //resultButtonDivElement.append(copyResultButton);
    resultButtonDivElement.append(saveResultButton);

    panelElementResult.append(resultButtonDivElement);

    moveResultGroup.after(panelElementResult);

    // パネルヘッダーに拡張スロットを作成
    panelHeaderElementPokemon1.style.borderBottom = '0px';
    panelHeaderElementPokemon1.style.borderTopRightRadius = '8px';
    panelHeaderElementPokemon1.style.borderTopLeftRadius = '8px';
    panelHeaderElementPokemon1.style.backgroundColor = '#404040';
    panelHeaderElementPokemon1.style.paddingTop = '2px';
    panelHeaderElementPokemon1.style.paddingLeft = '6px';
    panelHeaderElementPokemon1.style.paddingBottom = '2px';
    panelHeaderElementPokemon1.style.verticalAlign = 'top';
    panelHeaderElementPokemon1.style.height = '40px';
    panelHeaderElementPokemon1.style.display = 'flex';
    panelHeaderElementPokemon1.style.alignItems = 'center';
    //panelHeaderTitleElementPokemon1.style.color = '#000000';
    panelHeaderTitleElementPokemon1.style.fontSize = '14px';
    panelHeaderTitleElementPokemon1.style.marginLeft = '8px';
    panelHeaderTitleElementPokemon1.style.marginRight = '4px';
    panelHeaderTitleElementPokemon1.style.display = 'inline-block';
    panelHeaderTitleElementPokemon1.style.width = '100px';

    const slot1ElementPokemon1 = createSlotElement(1, 1);
    const slot2ElementPokemon1 = createSlotElement(1, 2);
    const slot3ElementPokemon1 = createSlotElement(1, 3);
    const slot4ElementPokemon1 = createSlotElement(1, 4);
    const slot5ElementPokemon1 = createSlotElement(1, 5);
    const slot6ElementPokemon1 = createSlotElement(1, 6);
    panelHeaderElementPokemon1.append(slot1ElementPokemon1);
    panelHeaderElementPokemon1.append(slot2ElementPokemon1);
    panelHeaderElementPokemon1.append(slot3ElementPokemon1);
    panelHeaderElementPokemon1.append(slot4ElementPokemon1);
    panelHeaderElementPokemon1.append(slot5ElementPokemon1);
    panelHeaderElementPokemon1.append(slot6ElementPokemon1);

    panelHeaderElementPokemon2.style.borderBottom = '0px';
    panelHeaderElementPokemon2.style.borderTopRightRadius = '8px';
    panelHeaderElementPokemon2.style.borderTopLeftRadius = '8px';
    panelHeaderElementPokemon2.style.backgroundColor = '#404040';
    panelHeaderElementPokemon2.style.paddingTop = '2px';
    panelHeaderElementPokemon2.style.paddingLeft = '6px';
    panelHeaderElementPokemon2.style.paddingBottom = '2px';
    panelHeaderElementPokemon2.style.verticalAlign = 'top';
    panelHeaderElementPokemon2.style.height = '40px';
    panelHeaderElementPokemon2.style.display = 'flex';
    panelHeaderElementPokemon2.style.alignItems = 'center';
    panelHeaderTitleElementPokemon2.style.fontSize = '14px';
    panelHeaderTitleElementPokemon2.style.marginLeft = '8px';
    panelHeaderTitleElementPokemon2.style.marginRight = '4px';
    panelHeaderTitleElementPokemon2.style.display = 'inline-block';
    panelHeaderTitleElementPokemon2.style.width = '100px';

    const slot1ElementPokemon2 = createSlotElement(2, 1);
    const slot2ElementPokemon2 = createSlotElement(2, 2);
    const slot3ElementPokemon2 = createSlotElement(2, 3);
    const slot4ElementPokemon2 = createSlotElement(2, 4);
    const slot5ElementPokemon2 = createSlotElement(2, 5);
    const slot6ElementPokemon2 = createSlotElement(2, 6);
    panelHeaderElementPokemon2.append(slot1ElementPokemon2);
    panelHeaderElementPokemon2.append(slot2ElementPokemon2);
    panelHeaderElementPokemon2.append(slot3ElementPokemon2);
    panelHeaderElementPokemon2.append(slot4ElementPokemon2);
    panelHeaderElementPokemon2.append(slot5ElementPokemon2);
    panelHeaderElementPokemon2.append(slot6ElementPokemon2);

    panelHeaderElementField.style.borderBottom = '0px';
    panelHeaderElementField.style.borderTopRightRadius = '8px';
    panelHeaderElementField.style.borderTopLeftRadius = '8px';
    panelHeaderElementField.style.backgroundColor = '#404040';
    panelHeaderElementField.style.paddingTop = '2px';
    panelHeaderElementField.style.paddingLeft = '6px';
    panelHeaderElementField.style.paddingBottom = '2px';
    panelHeaderElementField.style.verticalAlign = 'top';
    panelHeaderElementField.style.height = '40px';
    panelHeaderElementField.style.display = 'flex';
    panelHeaderElementField.style.alignItems = 'center';
    panelHeaderTitleElementField.style.fontSize = '14px';
    panelHeaderTitleElementField.style.marginLeft = '8px';
    panelHeaderTitleElementField.style.marginRight = '4px';
    panelHeaderTitleElementField.style.display = 'inline-block';

    // 履歴パネルを作成
    const panelElementHistory = document.createElement('div');
    panelElementHistory.id = 'panelElementHistory';
    panelElementHistory.style.display = 'inline-block';
    panelElementHistory.style.width = '1104px';
    panelElementHistory.style.backgroundColor = '#fcfcfc';
    panelElementHistory.style.marginLeft = '5px';
    panelElementHistory.style.marginTop = '4px';
    panelElementHistory.style.marginBottom = '4px';
    panelElementHistory.style.paddingLeft = '8px';
    panelElementHistory.style.paddingRight = '8px';
    panelElementHistory.style.paddingTop = '8px';
    panelElementHistory.style.paddingBottom = '8px';
    panelElementHistory.style.borderRadius = '8px';
    panelElementHistory.style.minHeight = '10px';
    panelElementHistory.style.display = 'none';
    panelElementPokemon2.after(panelElementHistory);

    const historyTableElement = document.createElement('table');
    historyTableElement.style.borderCollapse = 'collapse';
    historyTableElement.style.border = 'solid 1px #000000';
    panelElementHistory.prepend(historyTableElement);

    const historyThOffenseInfoElement = document.createElement('th');
    historyThOffenseInfoElement.innerText = 'Offense';
    const historyThDefenceInfoElement = document.createElement('th');
    historyThDefenceInfoElement.innerText = 'Defence';
    const historyThDamageInfoElement = document.createElement('th');
    historyThDamageInfoElement.innerText = 'Damage';
    const historyThDamageRateInfoElement = document.createElement('th');
    historyThDamageRateInfoElement.innerText = 'Percentage';
    const historyThKoChanceInfoElement = document.createElement('th');
    historyThKoChanceInfoElement.innerText = 'KO Chance';
    const historyThButtonAreaElement = document.createElement('th');
    historyThButtonAreaElement.innerText = '';

    historyThOffenseInfoElement.style.border = 'solid 1px #000000';
    historyThDefenceInfoElement.style.border = 'solid 1px #000000';
    historyThDamageInfoElement.style.border = 'solid 1px #000000';
    historyThDamageRateInfoElement.style.border = 'solid 1px #000000';
    historyThKoChanceInfoElement.style.border = 'solid 1px #000000';
    historyThButtonAreaElement.style.border = 'solid 1px #000000';

    //historyThOffenseInfoElement.style.width = '240px';
    historyThOffenseInfoElement.style.width = '350px';
    //historyThDefenceInfoElement.style.width = '240px';
    historyThDefenceInfoElement.style.width = '250px';
    //historyThDamageInfoElement.style.width = '368px';
    historyThDamageInfoElement.style.width = '230px';
    //historyThDamageRateInfoElement.style.width = '82px';
    historyThDamageRateInfoElement.style.width = '100px';
    historyThKoChanceInfoElement.style.width = '120px';
    historyThButtonAreaElement.style.width = '60px';

    historyThOffenseInfoElement.style.backgroundColor = '#eeeeee';
    historyThDefenceInfoElement.style.backgroundColor = '#eeeeee';
    historyThDamageInfoElement.style.backgroundColor = '#eeeeee';
    historyThDamageRateInfoElement.style.backgroundColor = '#eeeeee';
    historyThKoChanceInfoElement.style.backgroundColor = '#eeeeee';
    historyThButtonAreaElement.style.backgroundColor = '#eeeeee';

    const historyTrHeaderElement = document.createElement('tr');
    historyTrHeaderElement.id = 'historyTrHeaderElement';
    historyTrHeaderElement.append(historyThOffenseInfoElement);
    historyTrHeaderElement.append(historyThDefenceInfoElement);
    historyTrHeaderElement.append(historyThDamageInfoElement);
    historyTrHeaderElement.append(historyThDamageRateInfoElement);
    historyTrHeaderElement.append(historyThKoChanceInfoElement);
    historyTrHeaderElement.append(historyThButtonAreaElement);
    historyTableElement.prepend(historyTrHeaderElement);

    // ローカルストレージの履歴情報を読み込み
    const historyJson = localStorage.getItem('history');
    if (historyJson == null) {
        localStorage.setItem('history', JSON.stringify({}));
    }
    const historyObj = JSON.parse(historyJson);
    let count = 0;
    for (const index in historyObj) {
        addHistory(index, historyObj[index]['offenseName'], historyObj[index]['defenceName'], historyObj[index]['moveName'], historyObj[index]['offenseValue'], historyObj[index]['hpValue'], historyObj[index]['defenceValue'], historyObj[index]['offenseText'], historyObj[index]['defenceText'], historyObj[index]['damage'], historyObj[index]['percentage'], historyObj[index]['koChance']);
        count = index;
    }
    count++;

    // ローカルストレージのポケモン選択情報を読み込み
    const setNamePokemon1 = localStorage.getItem('p1_set_name');
    if (setNamePokemon1) {
        $("#p1 .set-selector").val(setNamePokemon1).trigger('change');
        document.querySelector("#s2id_autogen1 > a > span.select2-chosen").innerText = setNamePokemon1;
    }
    const setNamePokemon2 = localStorage.getItem('p2_set_name');
    if (setNamePokemon2) {
        $("#p2 .set-selector").val(setNamePokemon2).trigger('change');
        document.querySelector("#s2id_autogen3 > a > span.select2-chosen").innerText = setNamePokemon2;
    }

    // ポケモンの画像を挿入
    //const fullNamePokemon1 = document.querySelector("#s2id_autogen1 > a > span.select2-chosen").innerText;
    //const namePokemon1 = fullNamePokemon1.split('(')[0].trim();
    //const fullNamePokemon2 = document.querySelector("#s2id_autogen3 > a > span.select2-chosen").innerText;
    //const namePokemon2 = fullNamePokemon2.split('(')[0].trim();
    const namePokemon1 = document.getElementById('resultHeaderL').innerText.replace(/'s.*/, '');
    const namePokemon2 = document.getElementById('resultHeaderR').innerText.replace(/'s.*/, '');
    addPokemonIcon('iconPokemon1', namePokemon1, nameSelectBoxElementPokemon1);
    addPokemonIcon('iconPokemon2', namePokemon2, nameSelectBoxElementPokemon2);

    // カスタムセット編集機能
    importButtonElement.innerText = 'Import from Showdown Text';
    const backupAllButtonElement = document.createElement('button');
    backupAllButtonElement.type = 'button';
    backupAllButtonElement.id = 'backupall';
    backupAllButtonElement.innerText = 'Backup All';
    backupAllButtonElement.style.marginLeft = '3px';
    backupAllButtonElement.onclick = 'backupallset()';
    importButtonElement.after(backupAllButtonElement);
    backupAllButtonElement.addEventListener('click' , function() {
        backupallset();
    });
    /*const deleteButtonElementPokemon1 = document.createElement('button');
    deleteButtonElementPokemon1.type = 'button';
    deleteButtonElementPokemon1.id = 'delete';
    deleteButtonElementPokemon1.innerText = 'Delete';
    deleteButtonElementPokemon1.style.marginLeft = '3px';
    exportButtonElementPokemon1.after(deleteButtonElementPokemon1);
    deleteButtonElementPokemon1.addEventListener('click' , function() {
        const fullNamePokemon = document.querySelector("#s2id_autogen1 > a > span.select2-chosen").innerText;
        const namePokemon = fullNamePokemon.split('(')[0].trim();
        const setNamePokemon = fullNamePokemon.replaceAll(/^(.*?)\(|\)$/g, '');
        deleteset(namePokemon, setNamePokemon);

        localStorage.setItem('p1_set_name', '');
    });*/
    calcSetDeleteButtonElementPokemon1.innerText = 'Delete';
    exportButtonElementPokemon1.addEventListener('click' , function() {
        alert('Copied to clipboard.');
    });
    /*const deleteButtonElementPokemon2 = document.createElement('button');
    deleteButtonElementPokemon2.type = 'button';
    deleteButtonElementPokemon2.id = 'delete';
    deleteButtonElementPokemon2.innerText = 'Delete';
    deleteButtonElementPokemon2.style.marginLeft = '3px';
    exportButtonElementPokemon2.after(deleteButtonElementPokemon2);
    deleteButtonElementPokemon2.addEventListener('click' , function() {
        const fullNamePokemon = document.querySelector("#s2id_autogen3 > a > span.select2-chosen").innerText;
        const namePokemon = fullNamePokemon.split('(')[0].trim();
        const setNamePokemon = fullNamePokemon.replaceAll(/^(.*?)\(|\)$/g, '');
        deleteset(namePokemon, setNamePokemon);

        localStorage.setItem('p2_set_name', '');
    });*/
    calcSetDeleteButtonElementPokemon2.innerText = 'Delete';
    exportButtonElementPokemon2.addEventListener('click' , function() {
        alert('Copied to clipboard.');
    });

    // faviconを変更
    faviconElement.href = getPokemonImagePath(namePokemon1);

    // 道具の画像を挿入
    addItemIcon('itemIconPokemon1', itemSelectBoxElementPokemon1.innerText, nameSelectBoxElementPokemon1);
    addItemIcon('itemIconPokemon2', itemSelectBoxElementPokemon2.innerText, nameSelectBoxElementPokemon2);

    // ポケモン選択ボックスのサイズと位置を調整
    nameSelectBoxElementPokemon1.style.width = '300px';
    nameSelectBoxElementPokemon1.style.marginTop = '-24px';
    nameSelectBoxElementPokemon2.style.width = '300px';
    nameSelectBoxElementPokemon2.style.marginTop = '-24px';

    // テラスタルフラグを設定
    const teraTypeFlagPokemon1 = document.createElement('input');
    teraTypeFlagPokemon1.type = 'hidden';
    teraTypeFlagPokemon1.id = 'teraTypeFlagPokemon1';
    teraTypeFlagPokemon1.value = 0;
    document.querySelector("html").appendChild(teraTypeFlagPokemon1);

    const teraTypeFlagPokemon2 = document.createElement('input');
    teraTypeFlagPokemon2.type = 'hidden';
    teraTypeFlagPokemon2.id = 'teraTypeFlagPokemon2';
    teraTypeFlagPokemon2.value = 0;
    document.querySelector("html").appendChild(teraTypeFlagPokemon2);

    // タイプの画像を挿入
    addTypeIcon('typeIconPokemon1', type1SelectBoxElementPokemon1.value, type2SelectBoxElementPokemon1.value, teraTypeSelectBoxElementPokemon1.value, false, nameSelectBoxElementPokemon1);
    addTypeIcon('typeIconPokemon2', type1SelectBoxElementPokemon2.value, type2SelectBoxElementPokemon2.value, teraTypeSelectBoxElementPokemon2.value, false, nameSelectBoxElementPokemon2);

    // 実数値をテキストボックスに変換
    totalLabelElementPokemon1.innerText = 'Stats';
    totalLabelElementPokemon2.innerText = 'Stats';
    const totalHpInputElementPokemon1 = document.createElement('input');
    const totalAtInputElementPokemon1 = document.createElement('input');
    const totalDfInputElementPokemon1 = document.createElement('input');
    const totalSaInputElementPokemon1 = document.createElement('input');
    const totalSdInputElementPokemon1 = document.createElement('input');
    const totalSpInputElementPokemon1 = document.createElement('input');
    const totalHpInputElementPokemon2 = document.createElement('input');
    const totalAtInputElementPokemon2 = document.createElement('input');
    const totalDfInputElementPokemon2 = document.createElement('input');
    const totalSaInputElementPokemon2 = document.createElement('input');
    const totalSdInputElementPokemon2 = document.createElement('input');
    const totalSpInputElementPokemon2 = document.createElement('input');
    addTotalInputElement(totalHpTextElementPokemon1, totalHpInputElementPokemon1);
    addTotalInputElement(totalAtTextElementPokemon1, totalAtInputElementPokemon1);
    addTotalInputElement(totalDfTextElementPokemon1, totalDfInputElementPokemon1);
    addTotalInputElement(totalSaTextElementPokemon1, totalSaInputElementPokemon1);
    addTotalInputElement(totalSdTextElementPokemon1, totalSdInputElementPokemon1);
    addTotalInputElement(totalSpTextElementPokemon1, totalSpInputElementPokemon1);
    addTotalInputElement(totalHpTextElementPokemon2, totalHpInputElementPokemon2);
    addTotalInputElement(totalAtTextElementPokemon2, totalAtInputElementPokemon2);
    addTotalInputElement(totalDfTextElementPokemon2, totalDfInputElementPokemon2);
    addTotalInputElement(totalSaTextElementPokemon2, totalSaInputElementPokemon2);
    addTotalInputElement(totalSdTextElementPokemon2, totalSdInputElementPokemon2);
    addTotalInputElement(totalSpTextElementPokemon2, totalSpInputElementPokemon2);

    // 実数値をクリップボードにコピー
    totalLabelElementPokemon1.style.cursor = 'pointer';
    totalLabelElementPokemon1.addEventListener('click', () => {
        const statsArray1 = [totalHpInputElementPokemon1.value,
                             totalAtInputElementPokemon1.value,
                             totalDfInputElementPokemon1.value,
                             totalSaInputElementPokemon1.value,
                             totalSdInputElementPokemon1.value,
                             totalSpInputElementPokemon1.value];
        copyToClipboard('Stats: ' + statsArray1.join(' - '));
    });
    totalLabelElementPokemon2.style.cursor = 'pointer';
    totalLabelElementPokemon2.addEventListener('click', () => {
        const statsArray2 = [totalHpInputElementPokemon2.value,
                             totalAtInputElementPokemon2.value,
                             totalDfInputElementPokemon2.value,
                             totalSaInputElementPokemon2.value,
                             totalSdInputElementPokemon2.value,
                             totalSpInputElementPokemon2.value];
        copyToClipboard('Stats: ' + statsArray2.join(' - '));
    });

    // 努力値ボタンを追加
    addEvButton(evHpTdElementPokemon1, evHpInputElementPokemon1, ivHpInputElementPokemon1, underLimitEvElementPokemon1);
    addEvButton(evAtTdElementPokemon1, evAtInputElementPokemon1, ivAtInputElementPokemon1, underLimitEvElementPokemon1);
    addEvButton(evDfTdElementPokemon1, evDfInputElementPokemon1, ivDfInputElementPokemon1, underLimitEvElementPokemon1);
    addEvButton(evSaTdElementPokemon1, evSaInputElementPokemon1, ivSaInputElementPokemon1, underLimitEvElementPokemon1);
    addEvButton(evSdTdElementPokemon1, evSdInputElementPokemon1, ivSdInputElementPokemon1, underLimitEvElementPokemon1);
    addEvButton(evSpTdElementPokemon1, evSpInputElementPokemon1, ivSpInputElementPokemon1, underLimitEvElementPokemon1);
    addEvButton(evHpTdElementPokemon2, evHpInputElementPokemon2, ivHpInputElementPokemon2, underLimitEvElementPokemon2);
    addEvButton(evAtTdElementPokemon2, evAtInputElementPokemon2, ivAtInputElementPokemon2, underLimitEvElementPokemon2);
    addEvButton(evDfTdElementPokemon2, evDfInputElementPokemon2, ivDfInputElementPokemon2, underLimitEvElementPokemon2);
    addEvButton(evSaTdElementPokemon2, evSaInputElementPokemon2, ivSaInputElementPokemon2, underLimitEvElementPokemon2);
    addEvButton(evSdTdElementPokemon2, evSdInputElementPokemon2, ivSdInputElementPokemon2, underLimitEvElementPokemon2);
    addEvButton(evSpTdElementPokemon2, evSpInputElementPokemon2, ivSpInputElementPokemon2, underLimitEvElementPokemon2);

    // 耐久指数を表示
    addIndexText('indexDfPokemon1', Number(totalHpInputElementPokemon1.value) * Number(totalDfInputElementPokemon1.value), rankDfTrElementPokemon1);
    addIndexText('indexSdPokemon1', Number(totalHpInputElementPokemon1.value) * Number(totalSdInputElementPokemon1.value), rankSdTrElementPokemon1);
    addIndexText('indexDfPokemon2', Number(totalHpInputElementPokemon2.value) * Number(totalDfInputElementPokemon2.value), rankDfTrElementPokemon2);
    addIndexText('indexSdPokemon2', Number(totalHpInputElementPokemon2.value) * Number(totalSdInputElementPokemon2.value), rankSdTrElementPokemon2);

    // HPの補足を表示
    addDescriptionHp('descriptionHpPokemon1', totalHpInputElementPokemon1.value, rankHpTrElementPokemon1);
    addDescriptionHp('descriptionHpPokemon2', totalHpInputElementPokemon2.value, rankHpTrElementPokemon2);
    hpTrElementPokemon1.appendChild(document.createElement('td'));
    hpTrElementPokemon2.appendChild(document.createElement('td'));

    // カスタムセットのサイズを調整
    calcSetInputElementPokemon1.style.width = '200px';
    calcSetSaveButtonElementPokemon1.innerText = 'Save';
    calcSetExportButtonElementPokemon1.innerText = 'Export';
    calcSetInputElementPokemon2.style.width = '200px';
    calcSetSaveButtonElementPokemon2.innerText = 'Save';
    calcSetExportButtonElementPokemon2.innerText = 'Export';

    // 罫線を追加
    description1Element.before(document.createElement('hr'));

    // スタイルを変更する
    changeStyle();

    // ページトップに移動
    window.scroll({
        top: 0,
        behavior: "auto",
    });

    // ポケモン1が変更されたとき
    const observerSelectPokemon1 = new MutationObserver((mutations) => {
        const pokemonName = document.getElementById('resultHeaderL').innerText.replace(/'s.*/, '');
        const itemName = itemSelectBoxElementPokemon1.innerText;
        addPokemonIcon('iconPokemon1', pokemonName, nameSelectBoxElementPokemon1);
        addItemIcon('itemIconPokemon1', itemName, nameSelectBoxElementPokemon1);
        const type1 = type1SelectBoxElementPokemon1.value;
        const type2 = type2SelectBoxElementPokemon1.value;
        teraTypeFlagPokemon1.value = 0;
        addTypeIcon('typeIconPokemon1', type1, type2, teraTypeSelectBoxElementPokemon1.value, false, nameSelectBoxElementPokemon1);
        teraTypeButtonElementPokemon1.style.color = '#555555';
        teraTypeButtonElementPokemon1.style.background = '#e3e3e3';
        teraTypeButtonElementPokemon1.style.fontWeight = 'normal';
        teraTypeFlagPokemon1.value = 0;

        localStorage.setItem('p1_set_name', document.querySelector("#s2id_autogen1 > a > span.select2-chosen").innerText);

        document.querySelector("head > link:nth-child(1)").href = getPokemonImagePath(pokemonName);
    });
    observerSelectPokemon1.observe(document.querySelector("#s2id_autogen1 > a > span.select2-chosen"), {
        childList: true
    });

    // ポケモン2が変更されたとき
    const observerSelectPokemon2 = new MutationObserver((mutations) => {
        const pokemonName = document.getElementById('resultHeaderR').innerText.replace(/'s.*/, '');
        const itemName = itemSelectBoxElementPokemon2.innerText;
        addPokemonIcon('iconPokemon2', pokemonName, nameSelectBoxElementPokemon2);
        addItemIcon('itemIconPokemon2', itemName, nameSelectBoxElementPokemon2);
        const type1 = type1SelectBoxElementPokemon2.value;
        const type2 = type2SelectBoxElementPokemon2.value;
        teraTypeFlagPokemon2.value = 0;
        addTypeIcon('typeIconPokemon2', type1, type2, teraTypeSelectBoxElementPokemon2.value, false, nameSelectBoxElementPokemon2);
        teraTypeButtonElementPokemon2.style.color = '#555555';
        teraTypeButtonElementPokemon2.style.background = '#e3e3e3';
        teraTypeButtonElementPokemon2.style.fontWeight = 'normal';
        teraTypeFlagPokemon2.value = 0;

        localStorage.setItem('p2_set_name', document.querySelector("#s2id_autogen3 > a > span.select2-chosen").innerText);
    });
    observerSelectPokemon2.observe(document.querySelector("#s2id_autogen3 > a > span.select2-chosen"), {
        childList: true
    });

    // 道具1が変更されたとき
    const observerSelectItem1 = new MutationObserver((mutations) => {
        const itemName = itemSelectBoxElementPokemon1.innerText;
        addItemIcon('itemIconPokemon1', itemName, nameSelectBoxElementPokemon1);
    });
    observerSelectItem1.observe(document.querySelector("#s2id_autogen25 > a > span.select2-chosen"), {
        childList: true
    });

    // 道具2が変更されたとき
    const observerSelectItem2 = new MutationObserver((mutations) => {
        const itemName = itemSelectBoxElementPokemon2.innerText;
        addItemIcon('itemIconPokemon2', itemName, nameSelectBoxElementPokemon2);
    });
    observerSelectItem2.observe(document.querySelector("#s2id_autogen27 > a > span.select2-chosen"), {
        childList: true
    });

    // ポケモン1のH実数値が変更されたとき
    const observerChangeTotalHpPokemon1 = new MutationObserver((mutations) => {
        totalHpInputElementPokemon1.value = totalHpTextElementPokemon1.innerText;
        addIndexText('indexDfPokemon1', Number(totalHpInputElementPokemon1.value) * Number(totalDfInputElementPokemon1.value), rankDfTrElementPokemon1);
        addIndexText('indexSdPokemon1', Number(totalHpInputElementPokemon1.value) * Number(totalSdInputElementPokemon1.value), rankSdTrElementPokemon1);
        addDescriptionHp('descriptionHpPokemon1', totalHpInputElementPokemon1.value, rankHpTrElementPokemon1);
    });
    observerChangeTotalHpPokemon1.observe(totalHpTextElementPokemon1, {
        childList: true
    });
    totalHpInputElementPokemon1.addEventListener('input' , function() {
        const baseValue = baseHpInputElementPokemon1.value;
        const ivValue= ivHpInputElementPokemon1.value;
        const totalValue = totalHpInputElementPokemon1.value;
        const evValue = calcEvHp(baseValue, ivValue, totalValue);
        const evElement = evHpInputElementPokemon1;
        evElement.value = evValue;
        evElement.dispatchEvent(new Event('change'));
    });

    // ポケモン1のA実数値が変更されたとき
    const observerChangeTotalAtPokemon1 = new MutationObserver((mutations) => {
        totalAtInputElementPokemon1.value = totalAtTextElementPokemon1.innerText;
    });
    observerChangeTotalAtPokemon1.observe(totalAtTextElementPokemon1, {
        childList: true
    });
    totalAtInputElementPokemon1.addEventListener('input' , function() {
        const baseValue = baseAtInputElementPokemon1.value;
        const ivValue= ivAtInputElementPokemon1.value;
        const totalValue = totalAtInputElementPokemon1.value;
        const preTotalValue = totalAtTextElementPokemon1.innerText;
        const natureSelectedIndex = natureSelectBoxElementPokemon1.selectedIndex;
        const evValue = calcEvAt(baseValue, ivValue, totalValue, preTotalValue, natureSelectedIndex);
        const evElement = evAtInputElementPokemon1;
        evElement.value = evValue;
        evElement.dispatchEvent(new Event('change'));
    });

    // ポケモン1のB実数値が変更されたとき
    const observerChangeTotalDfPokemon1 = new MutationObserver((mutations) => {
        totalDfInputElementPokemon1.value = totalDfTextElementPokemon1.innerText;
        addIndexText('indexDfPokemon1', Number(totalHpInputElementPokemon1.value) * Number(totalDfInputElementPokemon1.value), rankDfTrElementPokemon1);
    });
    observerChangeTotalDfPokemon1.observe(totalDfTextElementPokemon1, {
        childList: true
    });
    totalDfInputElementPokemon1.addEventListener('input' , function() {
        const baseValue = baseDfInputElementPokemon1.value;
        const ivValue= ivDfInputElementPokemon1.value;
        const totalValue = totalDfInputElementPokemon1.value;
        const preTotalValue = totalDfTextElementPokemon1.innerText;
        const natureSelectedIndex = natureSelectBoxElementPokemon1.selectedIndex;
        const evValue = calcEvDf(baseValue, ivValue, totalValue, preTotalValue, natureSelectedIndex);
        const evElement = evDfInputElementPokemon1;
        evElement.value = evValue;
        evElement.dispatchEvent(new Event('change'));
    });

    // ポケモン1のC実数値が変更されたとき
    const observerChangeTotalSaPokemon1 = new MutationObserver((mutations) => {
        totalSaInputElementPokemon1.value = totalSaTextElementPokemon1.innerText;
    });
    observerChangeTotalSaPokemon1.observe(totalSaTextElementPokemon1, {
        childList: true
    });
    totalSaInputElementPokemon1.addEventListener('input' , function() {
        const baseValue = baseSaInputElementPokemon1.value;
        const ivValue= ivSaInputElementPokemon1.value;
        const totalValue = totalSaInputElementPokemon1.value;
        const preTotalValue = totalSaTextElementPokemon1.innerText;
        const natureSelectedIndex = natureSelectBoxElementPokemon1.selectedIndex;
        const evValue = calcEvSa(baseValue, ivValue, totalValue, preTotalValue, natureSelectedIndex);
        const evElement = evSaInputElementPokemon1;
        evElement.value = evValue;
        evElement.dispatchEvent(new Event('change'));
    });

    // ポケモン1のD実数値が変更されたとき
    const observerChangeTotalSdPokemon1 = new MutationObserver((mutations) => {
        totalSdInputElementPokemon1.value = totalSdTextElementPokemon1.innerText;
        addIndexText('indexSdPokemon1', Number(totalHpInputElementPokemon1.value) * Number(totalSdInputElementPokemon1.value), rankSdTrElementPokemon1);
    });
    observerChangeTotalSdPokemon1.observe(totalSdTextElementPokemon1, {
        childList: true
    });
    totalSdInputElementPokemon1.addEventListener('input' , function() {
        const baseValue = baseSdInputElementPokemon1.value;
        const ivValue= ivSdInputElementPokemon1.value;
        const totalValue = totalSdInputElementPokemon1.value;
        const preTotalValue = totalSdTextElementPokemon1.innerText;
        const natureSelectedIndex = natureSelectBoxElementPokemon1.selectedIndex;
        const evValue = calcEvSd(baseValue, ivValue, totalValue, preTotalValue, natureSelectedIndex);
        const evElement = evSdInputElementPokemon1;
        evElement.value = evValue;
        evElement.dispatchEvent(new Event('change'));
    });

    // ポケモン1のS実数値が変更されたとき
    const observerChangeTotalSpPokemon1 = new MutationObserver((mutations) => {
        totalSpInputElementPokemon1.value = totalSpTextElementPokemon1.innerText;
    });
    observerChangeTotalSpPokemon1.observe(totalSpTextElementPokemon1, {
        childList: true
    });
    totalSpInputElementPokemon1.addEventListener('input' , function() {
        const baseValue = baseSpInputElementPokemon1.value;
        const ivValue= ivSpInputElementPokemon1.value;
        const totalValue = totalSpInputElementPokemon1.value;
        const preTotalValue = totalSpTextElementPokemon1.innerText;
        const natureSelectedIndex = natureSelectBoxElementPokemon1.selectedIndex;
        const evValue = calcEvSp(baseValue, ivValue, totalValue, preTotalValue, natureSelectedIndex);
        const evElement = evSpInputElementPokemon1;
        evElement.value = evValue;
        evElement.dispatchEvent(new Event('change'));
    });

    // ポケモン2のH実数値が変更されたとき
    const observerChangeTotalHpPokemon2 = new MutationObserver((mutations) => {
        totalHpInputElementPokemon2.value = totalHpTextElementPokemon2.innerText;
        addIndexText('indexDfPokemon2', Number(totalHpInputElementPokemon2.value) * Number(totalDfInputElementPokemon2.value), rankDfTrElementPokemon2);
        addIndexText('indexSdPokemon2', Number(totalHpInputElementPokemon2.value) * Number(totalSdInputElementPokemon2.value), rankSdTrElementPokemon2);
        addDescriptionHp('descriptionHpPokemon2', totalHpInputElementPokemon2.value, rankHpTrElementPokemon2);
    });
    observerChangeTotalHpPokemon2.observe(totalHpTextElementPokemon2, {
        childList: true
    });
    totalHpInputElementPokemon2.addEventListener('input' , function() {
        const baseValue = baseHpInputElementPokemon2.value;
        const ivValue= ivHpInputElementPokemon2.value;
        const totalValue = totalHpInputElementPokemon2.value;
        const evValue = calcEvHp(baseValue, ivValue, totalValue);
        const evElement = evHpInputElementPokemon2;
        evElement.value = evValue;
        evElement.dispatchEvent(new Event('change'));
    });

    // ポケモン2のA実数値が変更されたとき
    const observerChangeTotalAtPokemon2 = new MutationObserver((mutations) => {
        totalAtInputElementPokemon2.value = totalAtTextElementPokemon2.innerText;
    });
    observerChangeTotalAtPokemon2.observe(totalAtTextElementPokemon2, {
        childList: true
    });
    totalAtInputElementPokemon2.addEventListener('input' , function() {
        const baseValue = baseAtInputElementPokemon2.value;
        const ivValue= ivAtInputElementPokemon2.value;
        const totalValue = totalAtInputElementPokemon2.value;
        const preTotalValue = totalAtTextElementPokemon2.innerText;
        const natureSelectedIndex = natureSelectBoxElementPokemon2.selectedIndex;
        const evValue = calcEvAt(baseValue, ivValue, totalValue, preTotalValue, natureSelectedIndex);
        const evElement = evAtInputElementPokemon2;
        evElement.value = evValue;
        evElement.dispatchEvent(new Event('change'));
    });

    // ポケモン2のB実数値が変更されたとき
    const observerChangeTotalDfPokemon2 = new MutationObserver((mutations) => {
        totalDfInputElementPokemon2.value = totalDfTextElementPokemon2.innerText;
        addIndexText('indexDfPokemon2', Number(totalHpInputElementPokemon2.value) * Number(totalDfInputElementPokemon2.value), rankDfTrElementPokemon2);
    });
    observerChangeTotalDfPokemon2.observe(totalDfTextElementPokemon2, {
        childList: true
    });
    totalDfInputElementPokemon2.addEventListener('input' , function() {
        const baseValue = baseDfInputElementPokemon2.value;
        const ivValue= ivDfInputElementPokemon2.value;
        const totalValue = totalDfInputElementPokemon2.value;
        const preTotalValue = totalDfTextElementPokemon2.innerText;
        const natureSelectedIndex = natureSelectBoxElementPokemon2.selectedIndex;
        const evValue = calcEvDf(baseValue, ivValue, totalValue, preTotalValue, natureSelectedIndex);
        const evElement = evDfInputElementPokemon2;
        evElement.value = evValue;
        evElement.dispatchEvent(new Event('change'));
    });

    // ポケモン2のC実数値が変更されたとき
    const observerChangeTotalSaPokemon2 = new MutationObserver((mutations) => {
        totalSaInputElementPokemon2.value = totalSaTextElementPokemon2.innerText;
    });
    observerChangeTotalSaPokemon2.observe(totalSaTextElementPokemon2, {
        childList: true
    });
    totalSaInputElementPokemon2.addEventListener('input' , function() {
        const baseValue = baseSaInputElementPokemon2.value;
        const ivValue= ivSaInputElementPokemon2.value;
        const totalValue = totalSaInputElementPokemon2.value;
        const preTotalValue = totalSaTextElementPokemon2.innerText;
        const natureSelectedIndex = natureSelectBoxElementPokemon2.selectedIndex;
        const evValue = calcEvSa(baseValue, ivValue, totalValue, preTotalValue, natureSelectedIndex);
        const evElement = evSaInputElementPokemon2;
        evElement.value = evValue;
        evElement.dispatchEvent(new Event('change'));
    });

    // ポケモン2のD実数値が変更されたとき
    const observerChangeTotalSdPokemon2 = new MutationObserver((mutations) => {
        totalSdInputElementPokemon2.value = totalSdTextElementPokemon2.innerText;
        addIndexText('indexSdPokemon2', Number(totalHpInputElementPokemon2.value) * Number(totalSdInputElementPokemon2.value), rankSdTrElementPokemon2);
    });
    observerChangeTotalSdPokemon2.observe(totalSdTextElementPokemon2, {
        childList: true
    });
    totalSdInputElementPokemon2.addEventListener('input' , function() {
        const baseValue = baseSdInputElementPokemon2.value;
        const ivValue= ivSdInputElementPokemon2.value;
        const totalValue = totalSdInputElementPokemon2.value;
        const preTotalValue = totalSdTextElementPokemon2.innerText;
        const natureSelectedIndex = natureSelectBoxElementPokemon2.selectedIndex;
        const evValue = calcEvSd(baseValue, ivValue, totalValue, preTotalValue, natureSelectedIndex);
        const evElement = evSdInputElementPokemon2;
        evElement.value = evValue;
        evElement.dispatchEvent(new Event('change'));
    });

    // ポケモン2のS実数値が変更されたとき
    const observerChangeTotalSpPokemon2 = new MutationObserver((mutations) => {
        totalSpInputElementPokemon2.value = totalSpTextElementPokemon2.innerText;
    });
    observerChangeTotalSpPokemon2.observe(totalSpTextElementPokemon2, {
        childList: true
    });
    totalSpInputElementPokemon2.addEventListener('input' , function() {
        const baseValue = baseSpInputElementPokemon2.value;
        const ivValue= ivSpInputElementPokemon2.value;
        const totalValue = totalSpInputElementPokemon2.value;
        const preTotalValue = totalSpTextElementPokemon2.innerText;
        const natureSelectedIndex = natureSelectBoxElementPokemon2.selectedIndex;
        const evValue = calcEvSp(baseValue, ivValue, totalValue, preTotalValue, natureSelectedIndex);
        const evElement = evSpInputElementPokemon2;
        evElement.value = evValue;
        evElement.dispatchEvent(new Event('change'));
    });

    // ポケモン1のテラスタルボタンが押下されたとき
    teraTypeButtonElementPokemon1.addEventListener('click' , function() {
        const type1 = type1SelectBoxElementPokemon1.value;
        const type2 = type2SelectBoxElementPokemon1.value;
        const typeTera = teraTypeSelectBoxElementPokemon1.value;
        if (teraTypeFlagPokemon1.value == 1) {
            addTypeIcon('typeIconPokemon1', type1, type2, typeTera, false, nameSelectBoxElementPokemon1);
            teraTypeButtonElementPokemon1.style.color = '#555555';
            teraTypeButtonElementPokemon1.style.background = '#e3e3e3';
            teraTypeButtonElementPokemon1.style.fontWeight = 'normal';
            teraTypeFlagPokemon1.value = 0;
        } else {
            addTypeIcon('typeIconPokemon1', type1, type2, typeTera, true, nameSelectBoxElementPokemon1);
            teraTypeButtonElementPokemon1.style.color = '#111111';
            teraTypeButtonElementPokemon1.style.background = '#f5f5f5';
            teraTypeButtonElementPokemon1.style.fontWeight = 'bold';
            teraTypeFlagPokemon1.value = 1;
        }
        // アイコン更新（テラパゴス用）
        const pokemonName = document.getElementById('resultHeaderL').innerText.replace(/'s.*/, '');
        if ('Terapagos-Stellar' === pokemonName) {
            const itemName = itemSelectBoxElementPokemon1.innerText;
            addPokemonIcon('iconPokemon1', 'Terapagos-Terastal', nameSelectBoxElementPokemon1);
            addItemIcon('itemIconPokemon1', itemName, nameSelectBoxElementPokemon1);
        } else if ('Terapagos-Terastal' === pokemonName) {
            const itemName = itemSelectBoxElementPokemon1.innerText;
            addPokemonIcon('iconPokemon1', 'Terapagos-Stellar', nameSelectBoxElementPokemon1);
            addItemIcon('itemIconPokemon1', itemName, nameSelectBoxElementPokemon1);
        }
    });

    // ポケモン2のテラスタルボタンが押下されたとき
    teraTypeButtonElementPokemon2.addEventListener('click' , function() {
        const type1 = type1SelectBoxElementPokemon2.value;
        const type2 = type2SelectBoxElementPokemon2.value;
        const typeTera = teraTypeSelectBoxElementPokemon2.value;
        if (teraTypeFlagPokemon2.value == 1) {
            addTypeIcon('typeIconPokemon2', type1, type2, typeTera, false, nameSelectBoxElementPokemon2);
            teraTypeButtonElementPokemon2.style.color = '#555555';
            teraTypeButtonElementPokemon2.style.background = '#e3e3e3';
            teraTypeButtonElementPokemon2.style.fontWeight = 'normal';
            teraTypeFlagPokemon2.value = 0;
        } else {
            addTypeIcon('typeIconPokemon2', type1, type2, typeTera, true, nameSelectBoxElementPokemon2);
            teraTypeButtonElementPokemon2.style.color = '#111111';
            teraTypeButtonElementPokemon2.style.background = '#f5f5f5';
            teraTypeButtonElementPokemon2.style.fontWeight = 'bold';
            teraTypeFlagPokemon2.value = 1;
        }
        // アイコン更新（テラパゴス用）
        const pokemonName = document.getElementById('resultHeaderR').innerText.replace(/'s.*/, '');
        if ('Terapagos-Stellar' === pokemonName) {
            const itemName = itemSelectBoxElementPokemon2.innerText;
            addPokemonIcon('iconPokemon2', 'Terapagos-Terastal', nameSelectBoxElementPokemon2);
            addItemIcon('itemIconPokemon2', itemName, nameSelectBoxElementPokemon2);
        } else if ('Terapagos-Terastal' === pokemonName) {
            const itemName = itemSelectBoxElementPokemon2.innerText;
            addPokemonIcon('iconPokemon2', 'Terapagos-Stellar', nameSelectBoxElementPokemon2);
            addItemIcon('itemIconPokemon2', itemName, nameSelectBoxElementPokemon2);
        }
    });

    // ポケモン1のテラスタイプが変更されたとき
    teraTypeSelectBoxElementPokemon1.addEventListener('change' , function() {
        const type1 = type1SelectBoxElementPokemon1.value;
        const type2 = type2SelectBoxElementPokemon1.value;
        const typeTera = teraTypeSelectBoxElementPokemon1.value;
        if (teraTypeFlagPokemon1.value == 1) {
            addTypeIcon('typeIconPokemon1', type1, type2, typeTera, true, nameSelectBoxElementPokemon1);
        } else {
            addTypeIcon('typeIconPokemon1', type1, type2, typeTera, false, nameSelectBoxElementPokemon1);
        }
    });

    // ポケモン2のテラスタイプが変更されたとき
    teraTypeSelectBoxElementPokemon2.addEventListener('change' , function() {
        const type1 = type1SelectBoxElementPokemon2.value;
        const type2 = type2SelectBoxElementPokemon2.value;
        const typeTera = teraTypeSelectBoxElementPokemon2.value;
        if (teraTypeFlagPokemon2.value == 1) {
            addTypeIcon('typeIconPokemon2', type1, type2, typeTera, true, nameSelectBoxElementPokemon2);
        } else {
            addTypeIcon('typeIconPokemon2', type1, type2, typeTera, false, nameSelectBoxElementPokemon2);
        }
    });

    // 計算結果が押下されたとき
    mainResultElement.addEventListener('click' , function() {
        alert('Copied to clipboard.');
    });

    // 計算結果のCopyボタンが押下されたとき
    copyResultButton.addEventListener('click' , function() {
        mainResultElement.click();
    });

    // 計算結果のSaveボタンが押下されたとき
    saveResultButton.addEventListener('click' , function() {

        const mainResult = document.querySelector("#mainResult").innerText;
        const damageValues = document.querySelector("#damageValues").innerText;

        const offenseInfo = mainResult.replace(/ vs\..*/g, '');
        const defenceInfo = mainResult.replace(/.*vs\. /g, '').replace(/: .*/g, '');

        let offenseName;
        let defenceName;
        let moveName;
        let offenseValue;
        let hpValue;
        let defenceValue;

        let isLeftOffense = true;

        if (document.querySelector("#resultMoveL1").checked) {
            moveName = document.querySelector("body > div.wrapper > div.move-result-group > div:nth-child(1) > div:nth-child(2) > label").innerText;
        } else if (document.querySelector("#resultMoveL2").checked) {
            moveName = document.querySelector("body > div.wrapper > div.move-result-group > div:nth-child(1) > div:nth-child(3) > label").innerText;
        } else if (document.querySelector("#resultMoveL3").checked) {
            moveName = document.querySelector("body > div.wrapper > div.move-result-group > div:nth-child(1) > div:nth-child(4) > label").innerText;
        } else if (document.querySelector("#resultMoveL4").checked) {
            moveName = document.querySelector("body > div.wrapper > div.move-result-group > div:nth-child(1) > div:nth-child(5) > label").innerText;
        } else if (document.querySelector("#resultMoveR1").checked) {
            moveName = document.querySelector("body > div.wrapper > div.move-result-group > div:nth-child(2) > div:nth-child(2) > label").innerText;
            isLeftOffense = false;
        } else if (document.querySelector("#resultMoveR2").checked) {
            moveName = document.querySelector("body > div.wrapper > div.move-result-group > div:nth-child(2) > div:nth-child(3) > label").innerText;
            isLeftOffense = false;
        } else if (document.querySelector("#resultMoveR3").checked) {
            moveName = document.querySelector("body > div.wrapper > div.move-result-group > div:nth-child(2) > div:nth-child(4) > label").innerText;
            isLeftOffense = false;
        } else {
            moveName = document.querySelector("body > div.wrapper > div.move-result-group > div:nth-child(2) > div:nth-child(5) > label").innerText;
            isLeftOffense = false;
        }

        if (isLeftOffense) {
            offenseName = document.getElementById('resultHeaderL').innerText.replace(/'s.*/, '');
            defenceName = document.getElementById('resultHeaderR').innerText.replace(/'s.*/, '');
            hpValue = 'H' + totalHpTextElementPokemon2.innerText;
            if (0 < offenseInfo.indexOf(' Atk ')) {
                offenseValue = 'A' + totalAtTextElementPokemon1.innerText;
            } else if (0 < offenseInfo.indexOf(' SpA ')) {
                offenseValue = 'C' + totalSaTextElementPokemon1.innerText;
            } else if (0 < offenseInfo.indexOf(' Def ')) {
                offenseValue = 'B' + totalDfTextElementPokemon1.innerText;
            } else {
                offenseValue = '(any)';
            }
            if (0 < defenceInfo.indexOf(' Def ')) {
                defenceValue = 'B' + totalDfTextElementPokemon2.innerText;
            } else if (0 < defenceInfo.indexOf(' SpD ')) {
                defenceValue = 'D' + totalSdTextElementPokemon2.innerText;
            } else {
                defenceValue = '(any)';
            }
        } else {
            offenseName = document.getElementById('resultHeaderR').innerText.replace(/'s.*/, '');
            defenceName = document.getElementById('resultHeaderL').innerText.replace(/'s.*/, '');
            hpValue = 'H' + totalHpTextElementPokemon1.innerText;
            if (0 < offenseInfo.indexOf(' Atk ')) {
                offenseValue = 'A' + totalAtTextElementPokemon2.innerText;
            } else if (0 < offenseInfo.indexOf(' SpA ')) {
                offenseValue = 'C' + totalSaTextElementPokemon2.innerText;
            } else if (0 < offenseInfo.indexOf(' Def ')) {
                offenseValue = 'B' + totalDfTextElementPokemon2.innerText;
            } else {
                offenseValue = '(any)';
            }
            if (0 < defenceInfo.indexOf(' Def ')) {
                defenceValue = 'B' + totalDfTextElementPokemon1.innerText;
            } else if (0 < defenceInfo.indexOf(' SpD ')) {
                defenceValue = 'D' + totalSdTextElementPokemon1.innerText;
            } else {
                defenceValue = '(any)';
            }
        }

        // テキストを抽出
        const offenseText = offenseInfo.replace(offenseName, '').replace(moveName, '').replace(/[0-9]+(\+|\-|) Atk/g, '').replace(/[0-9]+(\+|\-|) SpA/g, '').replace(/[0-9]+(\+|\-|) Def/g, '').replace('  ', ' ').trim();
        const defenceText = defenceInfo.replace(defenceName, '').replace(/[0-9]+(\+|\-|) HP/g, '').replace(/[0-9]+(\+|\-|) Def/g, '').replace(/[0-9]+(\+|\-|) SpD/g, '').replace(' / ', '').replace('  ', ' ').trim();
        const damage = damageValues.replace(/\(|\)/g, '').replace(/^([^,]+,){8}/g, '$&\r\n');
        const percentage = mainResult.replace(/.*\(/g, '').replace(/\).*/g, '');
        const koChance = mainResult.replace(/.* -- /g, '');

        const historyJson = localStorage.getItem('history');
        if (historyJson == null) {
            localStorage.setItem('history', JSON.stringify({}));
        }
        const historyObj = JSON.parse(historyJson);
        historyObj[count] = {};
        historyObj[count]['mainResult'] = mainResult;
        historyObj[count]['damageValues'] = damageValues;
        historyObj[count]['offenseName'] = offenseName;
        historyObj[count]['defenceName'] = defenceName;
        historyObj[count]['moveName'] = moveName;
        historyObj[count]['offenseValue'] = offenseValue;
        historyObj[count]['hpValue'] = hpValue;
        historyObj[count]['defenceValue'] = defenceValue;

        historyObj[count]['offenseText'] = offenseText;
        historyObj[count]['defenceText'] = defenceText;
        historyObj[count]['damage'] = damage;
        historyObj[count]['percentage'] = percentage;
        historyObj[count]['koChance'] = koChance;

        addHistory(count, offenseName, defenceName, moveName, offenseValue, hpValue, defenceValue, offenseText, defenceText, damage, percentage, koChance);

        localStorage.setItem('history', JSON.stringify(historyObj));
        count++;
    });

    // カスタムセットのSaveボタンが押下されたとき
    calcSetSaveButtonElementPokemon1.id = 'calcSetSaveButton1';
    calcSetSaveButtonElementPokemon1.setAttribute('onclick', '');
    calcSetSaveButtonElementPokemon1.addEventListener('click' , function() {
        runSaveCalc(1); // setdex_custom.js
        const pokemonName = document.getElementById('resultHeaderL').innerText.replace(/'s.*/, '');
        const setName = pokemonName + ' (' + document.querySelector("#setName1").value + ')';
        $("#p1 .set-selector").val(setName).trigger('change');
        document.querySelector("#s2id_autogen1 > a > span.select2-chosen").innerText = setName;

        // スロットの登録情報を更新
        const slotListObj1 = JSON.parse(localStorage.getItem('p1_slot_info'));
        for (let i = 1; i <= 6; i++) {
            if (slotListObj1[i] && slotListObj1[i]['setName'] === setName) {
                const itemName = document.querySelector("#s2id_autogen25 > a > span.select2-chosen").innerText;
                slotListObj1[i]['itemName'] = itemName;
                const id = 'p1_slot_info_' + i;
                const slotElement = document.querySelector('#slot' + i + 'Pokemon1');
                setSlotIcon(slotElement, id, setName.replace(/ \(.*/g, ''), itemName);
            }
        }
        const slotListObj2 = JSON.parse(localStorage.getItem('p2_slot_info'));
        for (let i = 1; i <= 6; i++) {
            if (slotListObj2[i] && slotListObj2[i]['setName'] === setName) {
                const itemName = document.querySelector("#s2id_autogen25 > a > span.select2-chosen").innerText;
                slotListObj2[i]['itemName'] = itemName;
                const id = 'p2_slot_info_' + i;
                const slotElement = document.querySelector('#slot' + i + 'Pokemon2');
                setSlotIcon(slotElement, id, setName.replace(/ \(.*/g, ''), itemName);
            }
        }
        localStorage.setItem('p1_slot_info', JSON.stringify(slotListObj1));
        localStorage.setItem('p2_slot_info', JSON.stringify(slotListObj2));
    });
    calcSetSaveButtonElementPokemon2.id = 'calcSetSaveButton2';
    calcSetSaveButtonElementPokemon2.setAttribute('onclick', '');
    calcSetSaveButtonElementPokemon2.addEventListener('click' , function() {
        runSaveCalc(2); // setdex_custom.js
        const pokemonName = document.getElementById('resultHeaderR').innerText.replace(/'s.*/, '');
        const setName = pokemonName + ' (' + document.querySelector("#setName2").value + ')';
        $("#p2 .set-selector").val(setName).trigger('change');
        document.querySelector("#s2id_autogen3 > a > span.select2-chosen").innerText = setName;

        // スロットの登録情報を更新
        const slotListObj1 = JSON.parse(localStorage.getItem('p1_slot_info'));
        for (let i = 1; i <= 6; i++) {
            if (slotListObj1[i] && slotListObj1[i]['setName'] === setName) {
                const itemName = document.querySelector("#s2id_autogen27 > a > span.select2-chosen").innerText;
                slotListObj1[i]['itemName'] = itemName;
                const id = 'p1_slot_info_' + i;
                const slotElement = document.querySelector('#slot' + i + 'Pokemon1');
                setSlotIcon(slotElement, id, setName.replace(/ \(.*/g, ''), itemName);
            }
        }
        const slotListObj2 = JSON.parse(localStorage.getItem('p2_slot_info'));
        for (let i = 1; i <= 6; i++) {
            if (slotListObj2[i] && slotListObj2[i]['setName'] === setName) {
                const itemName = document.querySelector("#s2id_autogen27 > a > span.select2-chosen").innerText;
                slotListObj2[i]['itemName'] = itemName;
                const id = 'p2_slot_info_' + i;
                const slotElement = document.querySelector('#slot' + i + 'Pokemon2');
                setSlotIcon(slotElement, id, setName.replace(/ \(.*/g, ''), itemName);
            }
        }
        localStorage.setItem('p1_slot_info', JSON.stringify(slotListObj1));
        localStorage.setItem('p2_slot_info', JSON.stringify(slotListObj2));
    });

})();

function addHistory(index, offenseName, defenceName, moveName, offenseValue, hpValue, defenceValue, offenseInfo, defenceInfo, damageInfo, damageRateInfo, koChanceInfo) {

    // tdオブジェクトを作成
    const historyTdOffenseInfoElement = document.createElement('td');
    const historyTdDefenceInfoElement = document.createElement('td');
    const historyTdDamageInfoElement = document.createElement('td');
    const historyTdDamageRateInfoElement = document.createElement('td');
    const historyTdKoChanceInfoElement = document.createElement('td');
    const historyTdButtonAreaElement = document.createElement('td');

    // trオブジェクトを作成
    const historyTrElement = document.createElement('tr');
    historyTrElement.id = 'historyTrElement' + index;
    historyTrElement.append(historyTdOffenseInfoElement);
    historyTrElement.append(historyTdDefenceInfoElement);
    historyTrElement.append(historyTdDamageInfoElement);
    historyTrElement.append(historyTdDamageRateInfoElement);
    historyTrElement.append(historyTdKoChanceInfoElement);
    historyTrElement.append(historyTdButtonAreaElement);

    // ポケモンアイコンを設定
    const offenseInfoElement = document.createElement('div');
    offenseInfoElement.style.display = 'flex';
    offenseInfoElement.style.alignItems = 'center';
    const offenseIconElement = document.createElement('div');
    offenseIconElement.style.display = 'flex';
    offenseIconElement.style.width = '32px';
    offenseIconElement.style.minWidth = '32px';
    offenseIconElement.style.height = '32px';
    offenseIconElement.style.justifyContent = 'center';
    offenseIconElement.style.alignItems = 'center';
    const offenseIcon = document.createElement('img');
    offenseIcon.src = getPokemonImagePath(offenseName);
    offenseIcon.style.transform = 'scale(0.66)';
    offenseIconElement.append(offenseIcon);
    const offenseStatsElement = document.createElement('div');
    offenseStatsElement.innerText = offenseValue;
    offenseStatsElement.style.display = 'inline-block';
    offenseStatsElement.style.marginLeft = '4px';
    offenseStatsElement.style.minWidth = '30px';
    const offenseMoveElement = document.createElement('div');
    offenseMoveElement.innerText = moveName;
    offenseMoveElement.style.display = 'inline-block';
    offenseMoveElement.style.marginLeft = '4px';
    offenseMoveElement.style.minWidth = '110px';
    const offenseTextElement = document.createElement('div');
    offenseTextElement.style.display = 'inline-block';
    offenseTextElement.innerText = offenseInfo;
    offenseTextElement.style.marginLeft = '4px';
    offenseTextElement.style.fontStyle = "italic";
    offenseInfoElement.append(offenseIconElement);
    offenseInfoElement.append(offenseStatsElement);
    offenseInfoElement.append(offenseMoveElement);
    offenseInfoElement.append(offenseTextElement);
    historyTdOffenseInfoElement.append(offenseInfoElement);

    const defenceInfoElement = document.createElement('div');
    defenceInfoElement.style.display = 'flex';
    defenceInfoElement.style.alignItems = 'center';
    const defenceIconElement = document.createElement('div');
    defenceIconElement.style.display = 'flex';
    defenceIconElement.style.width = '32px';
    defenceIconElement.style.minWidth = '32px';
    defenceIconElement.style.height = '32px';
    defenceIconElement.style.justifyContent = 'center';
    defenceIconElement.style.alignItems = 'center';
    const defenceIcon = document.createElement('img');
    defenceIcon.src = getPokemonImagePath(defenceName);
    defenceIcon.style.transform = 'scale(0.66)';
    defenceIconElement.append(defenceIcon);
    const defenceStatsElement = document.createElement('div');
    defenceStatsElement.innerText = hpValue + '-' + defenceValue;
    defenceStatsElement.style.display = 'inline-block';
    defenceStatsElement.style.marginLeft = '4px';
    defenceStatsElement.style.minWidth = '64px';
    const defenceTextElement = document.createElement('div');
    defenceTextElement.style.display = 'inline-block';
    defenceTextElement.innerText = defenceInfo;
    defenceTextElement.style.marginLeft = '4px';
    defenceTextElement.style.fontStyle = "italic";
    defenceInfoElement.append(defenceIconElement);
    defenceInfoElement.append(defenceStatsElement);
    defenceInfoElement.append(defenceTextElement);
    historyTdDefenceInfoElement.append(defenceInfoElement);

    // ラベルを設定
    historyTdDamageInfoElement.innerText = damageInfo;
    historyTdDamageRateInfoElement.innerText = damageRateInfo;
    historyTdKoChanceInfoElement.innerText = koChanceInfo;

    // 削除ボタンの動作
    const historyTdDeleteButtonElement = document.createElement('button');
    historyTdDeleteButtonElement.type = 'button';
    //historyTdDeleteButtonElement.id = 'deleteHistory' + index;
    historyTdDeleteButtonElement.innerText = 'Delete';
    //historyTdDeleteButtonElement.style.fontSize = '10px';
    historyTdDeleteButtonElement.style.fontSize = '12px';
    historyTdDeleteButtonElement.style.fontFamily = 'Open Sans';
    //historyTdDeleteButtonElement.disabled = true;
    historyTdDeleteButtonElement.addEventListener('click' , function() {
        deleteHistory(historyTrElement.id);
        const json = localStorage.getItem('history');
        const obj = JSON.parse(json);
        delete obj[index];
        localStorage.setItem('history', JSON.stringify(obj));
    });
    historyTdButtonAreaElement.append(historyTdDeleteButtonElement);

    // スタイルを適用
    historyTdOffenseInfoElement.style.border = '1px solid #000000';
    historyTdOffenseInfoElement.style.paddingLeft = '4px';
    historyTdOffenseInfoElement.style.paddingRight = '8px';
    historyTdOffenseInfoElement.style.paddingTop = '4px';
    historyTdOffenseInfoElement.style.paddingBottom = '4px';
    historyTdDefenceInfoElement.style.border = '1px solid #000000';
    historyTdDefenceInfoElement.style.paddingLeft = '4px';
    historyTdDefenceInfoElement.style.paddingRight = '8px';
    historyTdDefenceInfoElement.style.paddingTop = '4px';
    historyTdDefenceInfoElement.style.paddingBottom = '4px';
    historyTdDamageInfoElement.style.border = '1px solid #000000';
    historyTdDamageInfoElement.style.padding = '4px 6px';
    historyTdDamageRateInfoElement.style.border = '1px solid #000000';
    historyTdDamageRateInfoElement.style.padding = '4px 6px';
    historyTdKoChanceInfoElement.style.border = '1px solid #000000';
    historyTdKoChanceInfoElement.style.padding = '4px 6px';
    historyTdButtonAreaElement.style.border = '1px solid #000000';
    historyTdButtonAreaElement.style.padding = '4px 6px';

    historyTdOffenseInfoElement.style.fontSize = '12px';
    historyTdDefenceInfoElement.style.fontSize = '12px';
    historyTdDamageInfoElement.style.fontSize = '12px';
    historyTdDamageRateInfoElement.style.fontSize = '12px';
    historyTdKoChanceInfoElement.style.fontSize = '12px';
    //historyTdButtonAreaElement.style.height = '24px';

    document.querySelector("#historyTrHeaderElement").after(historyTrElement);
    document.querySelector("#panelElementHistory").style.display = 'inline-block';
}

function deleteHistory(id) {
    document.getElementById(id).style.display = 'none';
}

function hideElement(element) {
    element.style.display = 'none';
}

function disableElement(element) {
    element.disabled = true;
    element.style.backgroundColor = '#f3f3f3';
}

function changeStyle() {
    for (const element of document.getElementsByTagName('input')) {
        element.style.fontSize = '12px';
        element.style.fontFamily = 'Open Sans';
    }
    for (const element of document.getElementsByTagName('select')) {
        element.style.fontSize = '12px';
        element.style.fontFamily = 'Open Sans';
    }
    for (const element of document.getElementsByTagName('button')) {
        element.style.fontSize = '12px';
        element.style.fontFamily = 'Open Sans';
    }
    for (const element of document.getElementsByClassName('evbutton')) {
        element.style.padding = '2px';
        element.style.fontSize = '9px';
    }
    for (const element of document.getElementsByClassName('move-selector')) {
        element.style.width = '120px';
    }

    // 文字列選択を不可にする（クリック時のイベントで不具合が出るため）
    for (const element of document.getElementsByTagName('label')) {
        element.style.userSelect = 'none';
    }

    // ポケモン選択ボックスの縦幅を広くする
    for (const element of document.getElementsByClassName('select2-results')) {
        element.style.maxHeight = '420px';
    }

    for (const element of document.getElementsByClassName('move-result-subgroup')) {
        element.style.marginLeft = '8px';
        element.style.width = '460px';
    }
}

function addFieldInfo(panelElement) {
    const fieldInfoLeftDiv = document.createElement('div');
    fieldInfoLeftDiv.style.display = 'inline-block';
    fieldInfoLeftDiv.style.textAlign = 'left';
    fieldInfoLeftDiv.style.width = '80%';

    const fieldInfoRightDiv = document.createElement('div');
    fieldInfoRightDiv.style.display = 'inline-block';
    fieldInfoRightDiv.style.textAlign = 'right';
    fieldInfoRightDiv.style.width = '20%';

    const resetButtonElement = document.createElement('button');
    resetButtonElement.type = 'button';
    resetButtonElement.id = 'reset';
    resetButtonElement.innerText = 'Reset';
    fieldInfoRightDiv.appendChild(resetButtonElement);
    resetButtonElement.addEventListener('click' , function() {
    });

    panelElement.prepend(document.createElement('hr'));
    panelElement.prepend(fieldInfoRightDiv);
    panelElement.prepend(fieldInfoLeftDiv);
}

function createSlotElement(pokemonNum, slotNum) {
    const slotElement = document.createElement('div');
    slotElement.id = 'slot' + slotNum + 'Pokemon' + pokemonNum;
    slotElement.style.display = 'flex';
    slotElement.style.height = '28px';
    slotElement.style.width = '28px';
    slotElement.style.border = '1px dashed #ffffff';
    slotElement.style.borderRadius = '8px';
    slotElement.style.marginRight = '12px';
    slotElement.style.backgroundColor = '#404040';
    slotElement.style.justifyContent = 'center';
    slotElement.style.alignItems = 'center';

    const addIconDiv = document.createElement('div');
    addIconDiv.id = 'slot' + slotNum + 'AddIcon' + pokemonNum;
    addIconDiv.style.backgroundImage = 'url(https://seiseikinkin.github.io/tools/image/common/add-24.png)';
    addIconDiv.style.display = 'none';
    addIconDiv.style.backgroundRepeat = 'no-repeat';
    addIconDiv.style.width = '16px';
    addIconDiv.style.height = '16px';
    addIconDiv.style.backgroundSize = '16px';
    addIconDiv.style.backgroundPosition = 'center';
    slotElement.append(addIconDiv);

    // マウスオーバー時の挙動を設定
    slotElement.addEventListener('mouseover', function() {
        slotElement.style.backgroundColor = '#606060';
        addIconDiv.style.display = 'inline-block';
    });
    slotElement.addEventListener('mouseleave', function() {
        slotElement.style.backgroundColor = '#404040';
        addIconDiv.style.display = 'none';
    });

    // 右クリックで登録情報を削除
    //const key = 'p' + pokemonNum + '_slot' + slotNum + '_set_name';
    const key = 'p' + pokemonNum + '_slot_info';
    slotElement.addEventListener('contextmenu',function(e){
        const id = key + '_' + slotNum;
        if (document.querySelector('#' + id + '_pokemon')) {
            document.querySelector('#' + id + '_pokemon').remove();
        }
        if (document.querySelector('#' + id + '_item')) {
            document.querySelector('#' + id + '_item').remove();
        }

        // スタイルを適用
        slotElement.style.border = '1px dashed #ffffff';

        // 削除後の情報を保存
        const slotListObj = JSON.parse(localStorage.getItem(key));
        delete slotListObj[slotNum];
        localStorage.setItem(key, JSON.stringify(slotListObj));

        // マウスオーバー時の挙動を再設定
        slotElement.addEventListener('mouseover', function() {
            slotElement.style.backgroundColor = '#606060';
            addIconDiv.style.display = 'inline-block';
        });
        slotElement.addEventListener('mouseleave', function() {
            slotElement.style.backgroundColor = '#404040';
            addIconDiv.style.display = 'none';
        });
    });

    // 左クリックでスロットに登録
    slotElement.addEventListener('click' , function() {
        if (addIconDiv.style.display !== 'none') {

            // 名称を取得
            let pokemonName;
            let customSetName;
            let setName;
            let itemName;
            if (pokemonNum === 1) {
                pokemonName = document.getElementById('resultHeaderL').innerText.replace(/'s.*/, '');
                customSetName = pokemonName + ' (' + document.querySelector("#setName1").value + ')';
                setName = document.querySelector("#s2id_autogen1 > a > span.select2-chosen").innerText;
                itemName = document.querySelector("#s2id_autogen25 > a > span.select2-chosen").innerText;
            } else {
                pokemonName = document.getElementById('resultHeaderR').innerText.replace(/'s.*/, '');
                customSetName = pokemonName + ' (' + document.querySelector("#setName2").value + ')';
                setName = document.querySelector("#s2id_autogen3 > a > span.select2-chosen").innerText;
                itemName = document.querySelector("#s2id_autogen27 > a > span.select2-chosen").innerText;
            }

            // スロットに登録
            const slotObj = {};
            slotObj['setName'] = setName;
            slotObj['itemName'] = itemName;

            const slotListObj = JSON.parse(localStorage.getItem(key));
            slotListObj[slotNum] = slotObj;
            localStorage.setItem(key, JSON.stringify(slotListObj));

            // アイコンを作成
            const id = key + '_' + slotNum;
            setSlotIcon(slotElement, id, setName.replace(/ \(.*/g, ''), itemName);

            // スタイルを適用
            slotElement.style.border = '1px solid #404040';

            // マウスオーバー時の挙動を再設定
            slotElement.addEventListener('mouseover', function() {
                slotElement.style.backgroundColor = '#f5f5f5';
                addIconDiv.style.display = 'none';
            });
            slotElement.addEventListener('mouseleave', function() {
                slotElement.style.backgroundColor = '#e3e3e3';
                addIconDiv.style.display = 'none';
            });

            // Saveボタンを自動押下
            if (pokemonNum === 1) {
                if (setName !== customSetName) {
                    document.querySelector("#setName1").value = 'My Custom Slot Set';
                }
                document.querySelector("#calcSetSaveButton1").click();
            } else {
                if (setName !== customSetName) {
                    document.querySelector("#setName2").value = 'My Custom Slot Set';
                }
                document.querySelector("#calcSetSaveButton2").click();
            }

        } else {

            // スロットの情報を読み込み
            const slotListObj = JSON.parse(localStorage.getItem(key));
            const slotObj = slotListObj[slotNum];
            const setName = slotObj['setName'];
            if (pokemonNum === 1) {
                $("#p1 .set-selector").val(setName).trigger('change');
                document.querySelector("#s2id_autogen1 > a > span.select2-chosen").innerText = setName;
            } else {
                $("#p2 .set-selector").val(setName).trigger('change');
                document.querySelector("#s2id_autogen3 > a > span.select2-chosen").innerText = setName;
            }
        }
    });

    // 初期設定
    //const slotObj = JSON.parse(localStorage.getItem(key));
    const slotListObj = JSON.parse(localStorage.getItem(key));
    //if (slotObj && slotObj['setName']) {
    if (slotListObj == null) {
        localStorage.setItem(key, JSON.stringify({}));
    }
    if (slotListObj && slotListObj[slotNum] && slotListObj[slotNum]['setName']) {
        const setName = slotListObj[slotNum]['setName'];
        const itemName = slotListObj[slotNum]['itemName'];
        const id = key + '_' + slotNum;
        setSlotIcon(slotElement, id, setName.replace(/ \(.*/g, ''), itemName);
        slotElement.style.border = '1px solid #404040';
        slotElement.style.backgroundColor = '#e3e3e3';
        addIconDiv.style.display = 'none';

        // マウスオーバー時の挙動を再設定
        slotElement.addEventListener('mouseover', function() {
            slotElement.style.backgroundColor = '#f5f5f5';
            addIconDiv.style.display = 'none';
        });
        slotElement.addEventListener('mouseleave', function() {
            slotElement.style.backgroundColor = '#e3e3e3';
            addIconDiv.style.display = 'none';
        });
    }

    return slotElement;
}

function setSlotIcon(element, id, pokemonName, itemName) {
    if (document.querySelector('#' + id + '_pokemon')) {
        document.querySelector('#' + id + '_pokemon').remove();
    }
    if (document.querySelector('#' + id + '_item')) {
        document.querySelector('#' + id + '_item').remove();
    }

    const pokemonIconElement = document.createElement('div');
    pokemonIconElement.id = id + '_pokemon';
    pokemonIconElement.style.display = 'flex';
    pokemonIconElement.style.height = '50px';
    pokemonIconElement.style.minWidth = '58px';
    pokemonIconElement.style.justifyContent = 'center';
    pokemonIconElement.style.alignItems = 'center';
    pokemonIconElement.style.marginLeft = '-3px';

    const pokemonIcon = document.createElement('img');
    pokemonIcon.src = getPokemonImagePath(pokemonName);
    pokemonIcon.style.transform = 'scale(0.66)';
    pokemonIconElement.append(pokemonIcon);
    element.append(pokemonIconElement);

    const itemIconElement = document.createElement('img');
    itemIconElement.id = id + '_item';
    itemIconElement.src = getItemImagePath(itemName);
    itemIconElement.style.transform = 'scale(0.4)';
    itemIconElement.style.marginLeft = '-43px';
    itemIconElement.style.marginBottom = '-12px';
    element.append(itemIconElement);
    if (itemName === '(none)') {
        itemIconElement.style.display = 'none';
    }
}

function getPokemonImagePath(pokemonName) {
    if (pokemonName == '') {
        //return 'https://www.serebii.net/pokedex-sv/icon/new/1024.png';
        return 'https://img.yakkun.com/poke/icon32/n1021.gif';
    } else if (pokemonName == 'Terapagos') {
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

function addPokemonIcon(id, pokemonName, element) {
    if (document.querySelector('#' + id)) {
        document.querySelector('#' + id).remove();
    }
    const pokemonIconDiv = document.createElement('div');
    pokemonIconDiv.id = id;
    pokemonIconDiv.style.backgroundImage = 'url(' + getPokemonImagePath(pokemonName) + ')';
    pokemonIconDiv.style.display = 'inline-block';
    pokemonIconDiv.style.backgroundRepeat = 'no-repeat';
    pokemonIconDiv.style.marginLeft = '-6px';
    pokemonIconDiv.style.marginRight = '0px';
    pokemonIconDiv.style.marginTop = '-12px';
    pokemonIconDiv.style.marginBottom = '2px';
    pokemonIconDiv.style.width = '48px';
    pokemonIconDiv.style.height = '50px';
    pokemonIconDiv.style.backgroundPosition = 'bottom';
    // 画像を挿入
    element.before(pokemonIconDiv);
}

function getItemImagePath(itemName) {
    //const baseImagePath = 'https://play.pokemonshowdown.com/sprites/itemicons/';
    const baseImagePath = 'https://www.serebii.net/itemdex/sprites/'
    const imageExtension = '.png';
    const itemImagePath = baseImagePath + itemName.replace(' ', '').toLowerCase() + imageExtension;
    return itemImagePath;
}

function addItemIcon(id, itemName, element) {
    if (document.querySelector('#' + id)) {
        document.querySelector('#' + id).remove();
    }
    const itemIconDiv = document.createElement('div');
    itemIconDiv.id = id;
    itemIconDiv.style.display = 'inline-block';
    itemIconDiv.style.backgroundImage = 'url(' + getItemImagePath(itemName) + ')';
    itemIconDiv.style.backgroundRepeat = 'no-repeat';
    itemIconDiv.style.backgroundPosition = 'bottom';
    itemIconDiv.style.backgroundSize = '24px';
    itemIconDiv.style.marginLeft = '-4px';
    itemIconDiv.style.marginRight = '12px';
    itemIconDiv.style.marginBottom = '2px';
    itemIconDiv.style.width = '24px';
    itemIconDiv.style.height = '36px';
    // 画像を挿入
    element.before(itemIconDiv);
}

function getTypeImagePath(typeName) {
    const baseImagePath = 'https://seiseikinkin.github.io/tools/image/type_en/';
    //const baseImagePath = 'https://play.pokemonshowdown.com/sprites/types/';
    const imageExtension = '.png';
    const itemImagePath = baseImagePath + typeName.toLowerCase() + imageExtension;
    return itemImagePath;
}

function getTeraTypeImagePath(typeName) {
    const baseImagePath = 'https://seiseikinkin.github.io/tools/image/teratype_en/';
    //const baseImagePath = 'https://play.pokemonshowdown.com/sprites/types/';
    const imageExtension = '.png';
    const itemImagePath = baseImagePath + typeName.toLowerCase() + imageExtension;
    return itemImagePath;
}

function addTypeIcon(id, typeName1, typeName2, typeNameTera, isTera, preElement) {
    if (document.querySelector('#' + id)) {
        document.querySelector('#' + id).remove();
    }
    const type1IconDiv = document.createElement('div');
    type1IconDiv.style.display = 'inline-block';
    type1IconDiv.style.marginBottom = '1.2px';
    type1IconDiv.style.marginLeft = '2px';
    type1IconDiv.style.marginRight = '2px';
    type1IconDiv.style.width = '70px';
    type1IconDiv.style.height = '14px';
    if (typeName1) {
        type1IconDiv.style.backgroundImage = 'url(' + getTypeImagePath(typeName1) + ')';
        type1IconDiv.style.backgroundSize = '70px 14px';
        type1IconDiv.style.backgroundRepeat = 'no-repeat';
        type1IconDiv.style.backgroundPosition = 'center';
    }
    const type2IconDiv = document.createElement('div');
    type2IconDiv.style.display = 'inline-block';
    type2IconDiv.style.marginBottom = '1.2px';
    type2IconDiv.style.marginLeft = '2px';
    type2IconDiv.style.marginRight = '2px';
    type2IconDiv.style.width = '70px';
    type2IconDiv.style.height = '14px';
    if (typeName2) {
        type2IconDiv.style.backgroundImage = 'url(' + getTypeImagePath(typeName2) + ')';
        type2IconDiv.style.backgroundSize = '70px 14px';
        type2IconDiv.style.backgroundRepeat = 'no-repeat';
        type2IconDiv.style.backgroundPosition = 'center';
    } else {
        type2IconDiv.style.display = 'none';
    }
    const typeTeraIconDiv = document.createElement('div');
    typeTeraIconDiv.style.display = 'inline-block';
    typeTeraIconDiv.style.marginLeft = '10px';
    typeTeraIconDiv.style.marginRight = '2px';
    typeTeraIconDiv.style.width = '70px';
    typeTeraIconDiv.style.height = '16.66px';
    typeTeraIconDiv.style.backgroundImage = 'url(' + getTeraTypeImagePath(typeNameTera) + ')';
    typeTeraIconDiv.style.backgroundSize = '70px 16.66px';
    typeTeraIconDiv.style.backgroundRepeat = 'no-repeat';
    typeTeraIconDiv.style.backgroundPosition = 'center';
    //if (typeNameTera) {
    //    typeTeraIconDiv.style.backgroundImage = 'url(' + getTeraTypeImagePath(typeNameTera) + ')';
    //    typeTeraIconDiv.style.backgroundSize = '70px 16.66px';
    //    typeTeraIconDiv.style.backgroundRepeat = 'no-repeat';
    //    typeTeraIconDiv.style.backgroundPosition = 'center';
    //}
    if (isTera) {
        typeTeraIconDiv.style.opacity = '1';
    } else {
        typeTeraIconDiv.style.opacity = '0.33';
    }
    // 画像を挿入
    const typeIconDiv = document.createElement('div');
    typeIconDiv.id = id;
    typeIconDiv.style.display = 'block';
    typeIconDiv.style.marginLeft = '74px';
    typeIconDiv.style.marginTop = '-2px';
    typeIconDiv.style.marginBottom = '-8px';
    typeIconDiv.style.height = '20px';
    typeIconDiv.appendChild(type1IconDiv);
    typeIconDiv.appendChild(type2IconDiv);
    typeIconDiv.appendChild(typeTeraIconDiv);
    preElement.after(typeIconDiv);
}

function addTotalInputElement(totalText, totalInput) {
    totalInput.type = 'number';
    totalInput.min = '0';
    totalInput.max = '999';
    totalInput.value = totalText.innerText;
    totalText.after(totalInput);
    totalText.style.display = 'none';
}

function createEvMinButton() {
    const button = document.createElement('input');
    button.classList.add('evbutton');
    button.type = 'button';
    button.value = '0';
    button.style.fontSize = '10px';
    button.style.padding = '2px';
    button.style.textAlign = 'center';
    return button;
}

function createEvMaxButton() {
    const button = document.createElement('input');
    button.classList.add('evbutton');
    button.type = 'button';
    button.value = '252';
    button.style.fontSize = '10px';
    button.style.padding = '2px';
    button.style.textAlign = 'center';
    return button;
}

function createEvAllButton() {
    const button = document.createElement('input');
    button.classList.add('evbutton');
    button.type = 'button';
    button.value = 'All';
    button.style.fontSize = '10px';
    button.style.padding = '2px';
    button.style.textAlign = 'center';
    return button;
}

function addEvButton(preElement, evInputElement, ivInputElement, underLimitEvElement) {
    const evTdElement = document.createElement('td');
    const evMinButton = createEvMinButton();
    const evMaxButton = createEvMaxButton();
    const evAllButton = createEvAllButton();
    evTdElement.appendChild(evMinButton);
    evTdElement.appendChild(evMaxButton);
    evTdElement.appendChild(evAllButton);
    evTdElement.style.width = '58px';
    evTdElement.style.display = 'inline-block';
    preElement.after(evTdElement);
    evMinButton.addEventListener('click' , function() {
        const evElement = evInputElement;
        evElement.value = '0';
        evElement.dispatchEvent(new Event('change'));
    });
    evMaxButton.addEventListener('click' , function() {
        const evElement = evInputElement;
        evElement.value = '252';
        evElement.dispatchEvent(new Event('change'));
    });
    evAllButton.addEventListener('click' , function() {
        const evElement = evInputElement;
        const iv = Number(ivInputElement.value);
        const ev = Number(evInputElement.value);
        const underLimitEv = Number(underLimitEvElement.innerText);
        if (252 <= underLimitEv) {
            evElement.value = '252';
        } else if (underLimitEv < 0) {
            if (iv % 2 == 1) {
                const surplus = (ev + underLimitEv + 4) % 8;
                if (ev + underLimitEv - surplus < 0) {
                    evElement.value = '0';
                } else {
                    evElement.value = ev + underLimitEv - surplus;
                }
            } else {
                const surplus = underLimitEv % 8
                if (ev + underLimitEv - surplus < 0) {
                    evElement.value = '0';
                } else {
                    evElement.value = ev + underLimitEv - surplus;
                }
            }
        } else {
            if (iv % 2 == 1) {
                const surplus = (ev + underLimitEv + 4) % 8;
                if (252 <= ev + underLimitEv - surplus) {
                    evElement.value = '252';
                } else {
                    evElement.value = ev + underLimitEv - surplus
                }
            } else {
                const surplus = (ev + underLimitEv) % 8
                if (252 <= ev + underLimitEv - surplus) {
                    evElement.value = '252';
                } else {
                    evElement.value = ev + underLimitEv - surplus
                }
            }
        }
        evElement.dispatchEvent(new Event('change'));
    });
}

function addIndexText(id, index, preElement) {
    if (document.querySelector('#' + id)) {
        document.querySelector('#' + id).remove();
    }
    const indexSpan = document.createElement('span');
    indexSpan.innerText = index;
    const indexTd = document.createElement('td');
    indexTd.id = id;
    indexTd.appendChild(indexSpan);
    preElement.after(indexTd);
}

function addDescriptionHp(id, totalHp, tdElement) {
    if (document.querySelector('#' + id)) {
        document.querySelector('#' + id).remove();
    }
    const descriptionSpan = document.createElement('span');
    descriptionSpan.id = id;
    if (totalHp % 16 == 0) {
        descriptionSpan.innerText = '16n';
    } else if (totalHp % 16 == 1) {
        descriptionSpan.innerText = '16n+1';
    } else if (totalHp % 16 == 15) {
        descriptionSpan.innerText = '16n-1';
    } else if (totalHp % 4 == 0) {
        descriptionSpan.innerText = '4n';
    } else if (totalHp % 4 == 1) {
        descriptionSpan.innerText = '4n+1';
    } else {
        const surplus = totalHp % 16;
        if (surplus < 8) {
            descriptionSpan.innerText = '16n+' + surplus;
        } else {
            descriptionSpan.innerText = '16n-' + (16 - surplus);
        }
    }
    tdElement.appendChild(descriptionSpan);
}

function correctionEv(ev) {
    if (ev < 0) {
        return 0;
    } else if (252 < ev) {
        return 252;
    }
    return ev;
}

function calcEvHp(base, iv, total) {
    const IncreasedValue = total - (Number(base) + 60 + (iv / 2.0));
    return correctionEv(IncreasedValue * 8);
}

function calcEv(base, iv, total, preTotal, nature) {
    const increasedValue = Math.ceil(total / nature) - (Number(base) + 5 + (iv / 2.0));
    if (nature === 1.1 && preTotal % 11 === 0 && preTotal - total === 1) {
        return correctionEv(increasedValue * 8 - 8);
    } else {
        return correctionEv(increasedValue * 8);
    }
}

function calcEvAt(base, iv, total, preTotal, natureSelectedIndex) {
    if (natureSelectedIndex === 0 || natureSelectedIndex === 3 || natureSelectedIndex === 13 || natureSelectedIndex === 17) {
        return calcEv(base, iv, total, preTotal, 1.1);
    } else if (natureSelectedIndex === 2 || natureSelectedIndex === 4 || natureSelectedIndex === 15 || natureSelectedIndex === 24) {
        return calcEv(base, iv, total, preTotal, 0.9);
    }
    return calcEv(base, iv, total, preTotal, 1.0);
}

function calcEvDf(base, iv, total, preTotal, natureSelectedIndex) {
    if (natureSelectedIndex === 2 || natureSelectedIndex === 10 || natureSelectedIndex === 12 || natureSelectedIndex === 21) {
        return calcEv(base, iv, total, preTotal, 1.1);
    } else if (natureSelectedIndex === 7 || natureSelectedIndex === 9 || natureSelectedIndex === 13 || natureSelectedIndex === 14) {
        return calcEv(base, iv, total, preTotal, 0.9);
    }
    return calcEv(base, iv, total, preTotal, 1.0);
}

function calcEvSa(base, iv, total, preTotal, natureSelectedIndex) {
    if (natureSelectedIndex === 14 || natureSelectedIndex === 15 || natureSelectedIndex === 18 || natureSelectedIndex === 20) {
        return calcEv(base, iv, total, preTotal, 1.1);
    } else if (natureSelectedIndex === 0 || natureSelectedIndex === 5 || natureSelectedIndex === 10 || natureSelectedIndex === 11) {
        return calcEv(base, iv, total, preTotal, 0.9);
    }
    return calcEv(base, iv, total, preTotal, 1.0);
}

function calcEvSd(base, iv, total, preTotal, natureSelectedIndex) {
    if (natureSelectedIndex === 4 || natureSelectedIndex === 5 || natureSelectedIndex === 7 || natureSelectedIndex === 22) {
        return calcEv(base, iv, total, preTotal, 1.1);
    } else if (natureSelectedIndex === 12 || natureSelectedIndex === 16 || natureSelectedIndex === 17 || natureSelectedIndex === 20) {
        return calcEv(base, iv, total, preTotal, 0.9);
    }
    return calcEv(base, iv, total, preTotal, 1.0);
}

function calcEvSp(base, iv, total, preTotal, natureSelectedIndex) {
    if (natureSelectedIndex === 9 || natureSelectedIndex === 11 || natureSelectedIndex === 16 || natureSelectedIndex === 24) {
        return calcEv(base, iv, total, preTotal, 1.1);
    } else if (natureSelectedIndex === 3 || natureSelectedIndex === 18 || natureSelectedIndex === 21 || natureSelectedIndex === 22) {
        return calcEv(base, iv, total, preTotal, 0.9);
    }
    return calcEv(base, iv, total, preTotal, 1.0);
}

// クリップボードへコピー（コピーの処理）
function copyToClipboard(text) {
    if (!navigator.clipboard) {
        return;
    }
    navigator.clipboard.writeText(text).then( () => { alert('Copied to clipboard.'); }, () => {} );
}

function backupallset() {
    const json = localStorage.getItem('custom_gen_9');
    copyToClipboard(json);
}

function deleteset(pokemonName, setName) {
    const key = 'custom_gen_9';
    const json = localStorage.getItem(key);
    const obj = JSON.parse(json);
    delete obj[pokemonName][setName];
    localStorage.setItem(key, JSON.stringify(obj));

    // setdex_custom.js
    // SETDEX_CUSTOM_SV = JSON.parse(localStorage.getItem(key));
    // reloadSVScript();

    // スロットの登録情報を更新
    const slotListObj1 = JSON.parse(localStorage.getItem('p1_slot_info'));
    for (let i = 1; i <= 6; i++) {
        if (slotListObj1[i] && slotListObj1[i]['setName'] === pokemonName + ' (' + setName + ')') {
            delete slotListObj1[i];
            const id = 'p1_slot_info_' + i;
            const slotElement = document.querySelector('#slot' + i + 'Pokemon1');
            const addIconElement = document.querySelector('#slot' + i + 'AddIcon1');

            if (document.querySelector('#' + id + '_pokemon')) {
                document.querySelector('#' + id + '_pokemon').remove();
            }
            if (document.querySelector('#' + id + '_item')) {
                document.querySelector('#' + id + '_item').remove();
            }
            slotElement.style.border = '1px dashed #ffffff';
            slotElement.style.backgroundColor = '#404040';

            // マウスオーバー時の挙動を再設定
            slotElement.addEventListener('mouseover', function() {
                slotElement.style.backgroundColor = '#606060';
                addIconElement.style.display = 'inline-block';
            });
            slotElement.addEventListener('mouseleave', function() {
                slotElement.style.backgroundColor = '#404040';
                addIconElement.style.display = 'none';
            });
        }
    }
    const slotListObj2 = JSON.parse(localStorage.getItem('p2_slot_info'));
    for (let i = 1; i <= 6; i++) {
        if (slotListObj2[i] && slotListObj2[i]['setName'] === pokemonName + ' (' + setName + ')') {
            delete slotListObj2[i];
            const id = 'p2_slot_info_' + i;
            const slotElement = document.querySelector('#slot' + i + 'Pokemon2');
            const addIconElement = document.querySelector('#slot' + i + 'AddIcon2');

            if (document.querySelector('#' + id + '_pokemon')) {
                document.querySelector('#' + id + '_pokemon').remove();
            }
            if (document.querySelector('#' + id + '_item')) {
                document.querySelector('#' + id + '_item').remove();
            }
            slotElement.style.border = '1px dashed #ffffff';
            slotElement.style.backgroundColor = '#404040';

            // マウスオーバー時の挙動を再設定
            slotElement.addEventListener('mouseover', function() {
                slotElement.style.backgroundColor = '#606060';
                addIconElement.style.display = 'inline-block';
            });
            slotElement.addEventListener('mouseleave', function() {
                slotElement.style.backgroundColor = '#404040';
                addIconElement.style.display = 'none';
            });
        }
    }
    localStorage.setItem('p1_slot_info', JSON.stringify(slotListObj1));
    localStorage.setItem('p2_slot_info', JSON.stringify(slotListObj2));
}


