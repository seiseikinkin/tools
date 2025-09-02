document.addEventListener(
    'touchstart',
    function (event) {
        if (event.touches.length > 1) {
            event.preventDefault(); // ピンチズーム防止
        }
    },
    { passive: false }
);

let lastTouchEnd = 0;
document.addEventListener(
    'touchend',
    function (event) {
        const now = new Date().getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault(); // ダブルタップズーム防止
        }
        lastTouchEnd = now;
    },
    { passive: false }
);
