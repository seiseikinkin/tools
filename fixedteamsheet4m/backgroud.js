chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (tab.url.indexOf('https://play.pokemonshowdown.com/') > -1) {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ['main.js'],
        });
    }
});