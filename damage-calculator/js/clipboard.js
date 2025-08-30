document.getElementById('damageValues').addEventListener('click', function () {
    const damage = document.getElementById('damageValues').innerText.replaceAll(/\(|\)/g, '');
    navigator.clipboard.writeText(damage);
});

async function copyElementAsImage(el) {
    // 要素をCanvasにレンダリング
    const canvas = await html2canvas(el, {
        backgroundColor: null, // 透明を保持したい場合
        useCORS: true, // 外部画像にCORSヘッダが付いている場合
        scale: window.devicePixelRatio, // 高解像度にしたい場合
    });

    // Canvas → Blob(PNG)
    const blob = await new Promise((resolve) => canvas.toBlob(resolve, 'image/png'));

    // Clipboard APIで画像を書き込み（Chrome/Edge/Opera/一部Safari）
    await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);

    alert('Copied to clipboard! ✔');
}

camera.addEventListener('click', function () {
    const text = document.getElementById('mainResult').innerText;
    document.getElementById('mainResult').innerText = text.replaceAll(/(:\s)/g, '$1\r\n');
    copyElementAsImage(document.getElementsByClassName('main-result-group')[0]);
    document.getElementById('mainResult').innerText = text;
});
