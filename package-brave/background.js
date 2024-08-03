chrome.webRequest.onBeforeSendHeaders.addListener(data => {
	for (let header of data.requestHeaders) {
		let currentHeader = header.name.toLowerCase();
	        if (currentHeader === 'user-agent') {
	            header.value = navigator.userAgent.split('AppleWebKit')[0] + 'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36 Edg/127.0.0.0';
	        } else if (currentHeader === 'sec-ch-ua') {
	            header.value = '"Not)A;Brand";v="99", "Microsoft Edge";v="127", "Chromium";v="127"';
	        }
	}
	return { requestHeaders: data.requestHeaders };
}, { urls: ['https://*.bing.com/*', 'https://copilot.microsoft.com/*'] }, ['blocking', 'requestHeaders']);
chrome.browserAction.onClicked.addListener(() => {
	chrome.tabs.create({ url: 'https://chat.bing.com' });
});
chrome.runtime.onInstalled.addListener(({ reason }) => {
	if (reason === 'install') {
		chrome.tabs.create({ url: 'https://chat.bing.com' });
	}
});