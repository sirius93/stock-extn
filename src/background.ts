/// <reference types="chrome"/>

chrome.runtime.onInstalled.addListener(() => {
  chrome.action.disable();
    chrome.webNavigation.onCompleted.addListener(() => {
      chrome.tabs.query({ active: true, currentWindow: true }, ([{ id }]) => {
        if (id) {
          chrome.action.enable(id);
        }
      });
    }, { url: [{ hostContains: "finance.yahoo.com", pathContains:"quote" }] });
});