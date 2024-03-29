function getDetails(){
    const element1 = document.getElementsByTagName("H1")[0];
    const element2 = document.querySelectorAll('[data-test="qsp-price"]')[0];

    return {name:element1.textContent, price:element2.textContent};
}

function setFormValue(val:any){
    let element = document.getElementById("yfin-usr-qry");
    element?.setAttribute('value',val)
    let elementButton = document.getElementById("header-desktop-search-button");
    elementButton?.click();
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("content script received message", request);
    if (request.msg === "getStockDetails") {
        let details = getDetails();
        sendResponse({ stockName: details.name, stockPrice: details.price });
    }
});


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("content script received message", request);
    if (request.msg === "setSearchForm") {
        let val = request.val;
        setFormValue(val);
    }
});