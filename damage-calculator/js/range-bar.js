const values = [0, 4, 12, 20, 28, 36, 44, 52, 60, 68, 76, 84, 92, 100, 108, 116, 124, 132, 140, 148, 156, 164, 172, 180, 188, 196, 204, 212, 220, 228, 236, 244, 252];
// const numBox = document.getElementById('hpInputR');
// const rangeBar = document.getElementById('hpRangeR');

// 初期値
// numBox.value = values[rangeBar.value];

// シークバーを動かしたとき
// rangeBar.addEventListener('input', () => {
//     numBox.value = values[rangeBar.value];
//     numBox.dispatchEvent(new Event('change'));
// });

// テキストボックスを変更したとき
// numBox.addEventListener('change', () => {
//     const val = Number(numBox.value);
//     // 一番近い値を探す
//     let closest = values.reduce((a, b) => (Math.abs(b - val) < Math.abs(a - val) ? b : a));
//     rangeBar.value = values.indexOf(closest);
//     numBox.value = closest; // 値を補正
// });

for (const evsElement of document.getElementsByClassName('evs')) {
    evsElement.addEventListener('keydown', (e) => {
        let current = Number(evsElement.value);
        let idx = values.indexOf(current);

        if (e.key === 'ArrowUp') {
            if (idx < values.length - 1) {
                evsElement.value = values[idx + 1];
            }
            e.preventDefault(); // 標準の挙動を止める
        }
        if (e.key === 'ArrowDown') {
            if (idx > 0) {
                evsElement.value = values[idx - 1];
            }
            e.preventDefault();
        }
    });
}
