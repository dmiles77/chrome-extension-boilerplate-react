console.log('This is the background page.');
console.log('Put the background scripts here.');

console.log("Service worker loaded.");

// Fires when the extension is installed/updated
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ enabled: true });
    console.log("Extension installed, default settings applied.");
});

// Example: Listen for messages from the popup or content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "getStatus") {
        chrome.storage.sync.get(["enabled"], (data) => {
            sendResponse({ enabled: data.enabled });
        });
        return true; // Keeps the response channel open for async response
    }
});
