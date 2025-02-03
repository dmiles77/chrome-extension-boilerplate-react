export const chromeStorage = {
    get: (key: string, callback: (result: any) => void) => {
        chrome.storage.sync.get([key], (result) => callback(result));
    },
    set: (key: string, value: any) => {
        chrome.storage.sync.set({ [key]: value });
    },
};
