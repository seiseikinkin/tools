document.querySelectorAll('input[type="number"]').forEach((el) => {
    el.addEventListener('focus', function () {
        // iOS Safari など一部環境では遅延が必要
        setTimeout(() => this.select(), 0);
    });
});
