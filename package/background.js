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
                        value: navigator.userAgent.split('AppleWebKit')[0] + 'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36 Edg/127.0.0.0'
                    },
                    {
                        operation: 'set',
                        header: 'sec-ch-ua',
                        value: '"Not)A;Brand";v="99", "Microsoft Edge";v="127", "Chromium";v="127"'
                    },
                    {
                        operation: 'set',
                        header: 'sec-ch-ua-full-version-list',
                        value: '"Not)A;Brand";v="99.0.0.0", "Microsoft Edge";v="127.0.2651.86", "Chromium";v="127.0.6533.89"'
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
    chrome.tabs.create({ url: 'https://chat.bing.com' });
});
chrome.runtime.onInstalled.addListener(({ reason }) => {
    if (reason === 'install') {
        chrome.tabs.create({ url: 'https://chat.bing.com' });
    }
});