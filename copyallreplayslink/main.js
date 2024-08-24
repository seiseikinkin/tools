(function() {

    // ボタンを作成
    const CopyAllLinksButtonElement = document.createElement('button');
    CopyAllLinksButtonElement.classList.add('button');
    CopyAllLinksButtonElement.innerText= 'Copy all links';
    CopyAllLinksButtonElement.style.marginLeft = '4px';

    // ボタン押下時の動作
    CopyAllLinksButtonElement.addEventListener('click' , function() {

        const objlist = document.querySelector("#main > div > div:nth-child(1) > section > form > ul").getElementsByTagName('li');
        const linkList = [];
        for (var i = objlist.length - 1; 0 <= i; i--) {
            linkList.push(objlist[i].getElementsByTagName('a')[0].href);
        }
        copyToClipboard(linkList.join('\r\n'));

        //alert('Copied all replays link to clipboard.');
    });

    // ボタンを追加
    document.querySelector("#main > div > div:nth-child(1) > section.section.first-section > form > p:nth-child(4)").append(CopyAllLinksButtonElement);

})();

// クリップボードへコピー（コピーの処理）
function copyToClipboard(text) {
    if (!navigator.clipboard) {
        return;
    }
    navigator.clipboard.writeText(text).then( () => {}, () => {} );
}
