document.getElementById('damageValues').addEventListener('click', function () {
    const damage = document.getElementById('damageValues').innerText.replaceAll(/\(|\)/g, '');
    navigator.clipboard.writeText(damage);
});
