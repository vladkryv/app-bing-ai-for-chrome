chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: [1],
    addRules: [
        {
            id: 1,
            priority: 1,
            action: {
                type: 'modifyHeaders',
                requestHeaders: [
                    {
                        operation: 'set',
                        header: 'user-agent',
                        value: (() => {
                            const userAgent = navigator.userAgent;
                            const chromeVersionMatch = userAgent.match(/Chrome\/([0-9.]+)/);
                            const chromeVersion = chromeVersionMatch[1];
                            return `${userAgent} Edg/${chromeVersion}`;
                        })()
                    },
                    {
                        operation: 'remove',
                        header: 'sec-ch-ua'
                    },
                    {
                        operation: 'remove',
                        header: 'sec-ch-ua-full-version-list'
                    }
                ]
            },
            condition: {
                resourceTypes: Object.values(chrome.declarativeNetRequest.ResourceType)
            }
        }
    ],
});
chrome.action.onClicked.addListener(() => {
    chrome.tabs.create({ url: 'https://copilot.microsoft.com' });
});
chrome.runtime.onInstalled.addListener(({ reason }) => {
    if (reason === 'install') {
        chrome.tabs.create({ url: 'https://copilot.microsoft.com' });
    }
});