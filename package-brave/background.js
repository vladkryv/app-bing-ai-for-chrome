chrome.webRequest.onBeforeSendHeaders.addListener(data => {
    const headers = data.requestHeaders.map(header => {
        if (header.name.toLowerCase() === 'user-agent') {
            const userAgent = navigator.userAgent;
            const chromeVersionMatch = userAgent.match(/Chrome\/([0-9.]+)/);
            const chromeVersion = chromeVersionMatch[1];
            header.value = `${userAgent} Edg/${chromeVersion}`;
        }
        return header;
    }).filter(header => !header.name.toLowerCase().startsWith('sec-ch-ua'));
    return { requestHeaders: headers };
}, { urls: ['https://*.bing.com/*', 'https://copilot.microsoft.com/*'] }, ['blocking', 'requestHeaders']);
chrome.browserAction.onClicked.addListener(() => {
    chrome.tabs.create({ url: 'https://chat.bing.com' });
});
chrome.runtime.onInstalled.addListener(({ reason }) => {
    if (reason === 'install') {
        chrome.tabs.create({ url: 'https://chat.bing.com' });
    }
});