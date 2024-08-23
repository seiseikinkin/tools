(function() {

    const title = document.querySelector('head > title');

    // 処理が重複しないようにルームをリストで管理する
    const executedRoomList = [];

    var mo = new MutationObserver(function() {

        //  console.log('FixedTeamSheet - START');

        // すべてのルームにボタン追加処理を適用する
        for (const room of document.getElementsByClassName('ps-room-opaque')) {

            if (executedRoomList.indexOf(room.id) < 0) {

                // チームシートを表示するボタンを追加
                const rightTeamSheetButton = createFixedTeamSheetButton(room.id);
                document.querySelector('#' + room.id + ' > div.battle-log > div.battle-options > div').append(rightTeamSheetButton);

                // 処理実行済みのルームをリストに追加
                executedRoomList.push(room.id);

                // console.log(executedRoomList);
                // console.log(room.id);
            }
        }

        //console.log('FixedTeamSheet - END');

    });

    var config = {
        subtree: true,
        attributes: true,
        childList: true,
        characterData: true
    };

    mo.observe(title, config);

})();

function createFixedTeamSheetButton(id, isLeft) {

    const fixedTeamSheetButtonElement = document.createElement('button');
    fixedTeamSheetButtonElement.classList.add('icon', 'button');
    // fixedTeamSheetButtonElement.style.float = 'right';
    fixedTeamSheetButtonElement.style.marginLeft = '10px';
    fixedTeamSheetButtonElement.innerText= 'View OTS';

    fixedTeamSheetButtonElement.addEventListener('click' , function() {

        if (document.getElementById('fts_' + id)) {
            document.getElementById('fts_' + id).remove();
        } else {

        // document.querySelector('#' + id + ' > div.battle-log > div.inner.message-log > div:nth-child(8) > div > details')

        for (const infoBox of document.querySelector('#' + id + ' > div.battle-log > div.inner.message-log').getElementsByClassName('infobox')) {

            const leftUserName = document.querySelector('#' + id + ' > div.battle > div > div.leftbar > div > strong').innerText;
            // console.log(leftUserName);
            // console.log(infoBox.getElementsByTagName('summary')[0].innerText.replace(/.* /g, ''));

            if (leftUserName !== infoBox.getElementsByTagName('summary')[0].innerText.replace(/Open Team Sheet for /g, '')) {
                document.querySelector('#' + id + ' > div.battle-log > div.inner.message-log').prepend(createFixedTeamSheetPanel(id, infoBox));
            }

        }
        }
        // console.log(document.getElementsByClassName('usernametext').innerText);
    });

    return fixedTeamSheetButtonElement;
}

function createFixedTeamSheetPanel(id, infoBox) {

    const fixedTeamSheetPanelElement = document.createElement('div');
    fixedTeamSheetPanelElement.id = 'fts_' + id;
    fixedTeamSheetPanelElement.style.display = 'block';
    fixedTeamSheetPanelElement.style.minWidth = '394px';
    fixedTeamSheetPanelElement.style.maxWidth = '394px';
    fixedTeamSheetPanelElement.style.minHeight = '240px';
    fixedTeamSheetPanelElement.style.maxHeight = '240px';
    // fixedTeamSheetPanelElement.style.border = '2px solid rgba(0,0,0,0.9)';
    fixedTeamSheetPanelElement.style.border = '2px solid #000000';
    fixedTeamSheetPanelElement.style.borderRadius = '4px';
    // fixedTeamSheetPanelElement.style.backgroundColor = 'rgba(255,255,255,0.9)';
    fixedTeamSheetPanelElement.style.backgroundColor = '#ffffff';
    fixedTeamSheetPanelElement.style.position = 'fixed';
    fixedTeamSheetPanelElement.style.zIndex = '2';
    fixedTeamSheetPanelElement.style.marginTop = '10px';
    // fixedTeamSheetPanelElement.style.marginLeft = '8px';

    const fixedTeamSheetPanelTopElement = document.createElement('div');
    fixedTeamSheetPanelTopElement.style.display = 'inline-block';
    fixedTeamSheetPanelTopElement.style.minWidth = '378px';
    fixedTeamSheetPanelTopElement.style.maxWidth = '378px';
    fixedTeamSheetPanelTopElement.style.minHeight = '112px';
    fixedTeamSheetPanelTopElement.style.maxHeight = '112px';
    fixedTeamSheetPanelTopElement.style.marginTop = '8px';
    fixedTeamSheetPanelTopElement.style.marginLeft = '8px';
    fixedTeamSheetPanelTopElement.style.marginRight = '8px';
    // fixedTeamSheetPanelTopElement.style.backgroundColor = 'rgba(255,0,255,0.8)';

    const fixedTeamSheetPanelBottomElement = document.createElement('div');
    fixedTeamSheetPanelBottomElement.style.display = 'inline-block';
    fixedTeamSheetPanelBottomElement.style.minWidth = '378px';
    fixedTeamSheetPanelBottomElement.style.maxWidth = '378px';
    fixedTeamSheetPanelBottomElement.style.minHeight = '112px';
    fixedTeamSheetPanelBottomElement.style.maxHeight = '112px';
    fixedTeamSheetPanelBottomElement.style.marginBottom = '8px';
    fixedTeamSheetPanelBottomElement.style.marginLeft = '8px';
    fixedTeamSheetPanelBottomElement.style.marginRight = '8px';
    // fixedTeamSheetPanelBottomElement.style.backgroundColor = 'rgba(255,0,0,0.8)';

    let num = 1;
    let imageHtml = '';
    let textHtml = '';
    let isSkip = true;
    const formattedHtmlList = infoBox.getElementsByTagName('details')[0].innerHTML.replace(/(<[^/])/g,'\n$1').replace(/<br>/g, '').replace(/^\n/g, '').split('\n');
    console.log(formattedHtmlList);
    for (const formattedHtml of formattedHtmlList) {
        if (formattedHtml.indexOf('<span class="picon"') === 0) {
            imageHtml += formattedHtml;
        } else if (formattedHtml.indexOf('<span class="itemicon"') === 0) {
            imageHtml += formattedHtml.replace(/(style=")/g,'$1scale: 0.8; ');
        } else if (formattedHtml.indexOf('Ability:') === 0) {
            textHtml += formattedHtml.replace(/\(.*\)/g, '').trim() + '<br>';
            isSkip = false;
        } else if (!isSkip && formattedHtml.length === 0) {
            if (num < 4) {
                fixedTeamSheetPanelTopElement.append(createPokemonCard(imageHtml, textHtml));
            } else {
                fixedTeamSheetPanelBottomElement.append(createPokemonCard(imageHtml, textHtml));
            }
            num++;
            imageHtml = '';
            textHtml = '';
            isSkip = true;
        } else if (!isSkip) {
            if (formattedHtml.indexOf('Tera Type:') === 0) {
                const teraTypeImageUrl = 'https://seiseikinkin.github.io/tools/image/teratypeicon/' + formattedHtml.trim().replace(/.* /g, '').toLowerCase() + '.png';
                const teraTypeImageHtml = '<div style="display: inline-block; background-image: url(' + teraTypeImageUrl + '); background-repeat: no-repeat; background-position: center center; width: 20px; height: 20px; background-size: 20px; margin-bottom: 2px;"></div>';
                imageHtml += teraTypeImageHtml;
            } else if (formattedHtml.indexOf('- ') === 0) {
                textHtml += formattedHtml.trim() + '<br>';
            }
        }
    }

    /*
    const fixedTeamSheetDeleteButtonElement = document.createElement('div');
    fixedTeamSheetDeleteButtonElement.style.display = 'inline-block';
    fixedTeamSheetDeleteButtonElement.style.backgroundImage = 'url(https://seiseikinkin.github.io/tools/image/common/delete-24.png)';
    fixedTeamSheetDeleteButtonElement.style.backgroundRepeat = 'no-repeat';
    fixedTeamSheetDeleteButtonElement.style.backgroundPosition = 'center';
    fixedTeamSheetDeleteButtonElement.style.width = '16px';
    fixedTeamSheetDeleteButtonElement.style.height = '16px';
    fixedTeamSheetDeleteButtonElement.style.backgroundSize = '16px';
    fixedTeamSheetDeleteButtonElement.style.position = 'fixed';
    fixedTeamSheetDeleteButtonElement.style.marginLeft = '-16px';
    fixedTeamSheetDeleteButtonElement.style.cursor = 'pointer';

    fixedTeamSheetDeleteButtonElement.addEventListener('click' , function() {
        fixedTeamSheetPanelElement.remove();
    });
    */

    fixedTeamSheetPanelElement.append(fixedTeamSheetPanelTopElement);
    // fixedTeamSheetPanelElement.append(fixedTeamSheetDeleteButtonElement);
    fixedTeamSheetPanelElement.append(fixedTeamSheetPanelBottomElement);

    // fixedTeamSheetPanelElement.style.scale = '0.75';
    // fixedTeamSheetPanelElement.style.opacity = '0.9';

    return fixedTeamSheetPanelElement;
}

function createPokemonCard(imageHtml, textHtml) {

    const pokemonCardElement = document.createElement('div');
    // pokemonCardElement.id = 'pcard' + num;
    pokemonCardElement.style.display = 'inline-block';
    pokemonCardElement.style.minWidth = '126px';
    pokemonCardElement.style.maxWidth = '126px';
    pokemonCardElement.style.minHeight = '112px';
    pokemonCardElement.style.maxHeight = '112px';
    // pokemonCardElement.style.backgroundColor = '#ffff00';

    const pokemonCardImageAreaElement = document.createElement('div');
    // pokemonCardImageAreaElement.id = 'pcardimage' + num;
    pokemonCardImageAreaElement.innerHTML = imageHtml;
    pokemonCardImageAreaElement.style.display = 'block';
    pokemonCardImageAreaElement.style.minWidth = '126px';
    pokemonCardImageAreaElement.style.maxWidth = '126px';
    pokemonCardImageAreaElement.style.minHeight = '30px';
    pokemonCardImageAreaElement.style.maxHeight = '30px';
    // pokemonCardImageAreaElement.style.backgroundColor = '#00ffff';

    const pokemonCardTextAreaElement = document.createElement('div');
    // pokemonCardTextAreaElement.id = 'pcardtext' + num;
    pokemonCardTextAreaElement.innerHTML = textHtml;
    pokemonCardTextAreaElement.style.display = 'block';
    pokemonCardTextAreaElement.style.minWidth = '126px';
    pokemonCardTextAreaElement.style.maxWidth = '126px';
    pokemonCardTextAreaElement.style.minHeight = '82px';
    pokemonCardTextAreaElement.style.maxHeight = '82px';
    pokemonCardTextAreaElement.style.fontSize = '12px';
    pokemonCardTextAreaElement.style.color = '#000000';
    pokemonCardTextAreaElement.style.fontSize = '11px';
    // pokemonCardTextAreaElement.style.backgroundColor = '#0000ff';

    pokemonCardElement.append(pokemonCardImageAreaElement);
    pokemonCardElement.append(pokemonCardTextAreaElement);
    pokemonCardElement.style.verticalAlign = 'top';

    return pokemonCardElement;
}
