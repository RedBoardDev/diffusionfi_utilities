const insertAfter = (newNode, referenceNode) => {
    if (referenceNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }
};

function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }
        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

function checkPageUrl(strInd, strRe) {
    const urlIndex = window.location.href;
    var urlIndex1 = 0;
    var urlIndex2 = 0;
    if (strInd != false)
        urlIndex1 = urlIndex.indexOf(strInd);
    if (strRe != false)
        urlIndex2 = urlIndex.search(strRe);
    if (urlIndex1 != -1 && urlIndex2 != -1) {
        return (true);
    } else
        return (false);
}

function pageSwap(document) {
    create50PercentsButton(document);
    button50Percents(document)
}

function pageFarm() {
    alert("FARM PAGE");
}

window.addEventListener('load',() => {
    // create50PercentsButton(document)

    // const buttonOnClick = document.querySelector("#swap-currency-input > div > div.sc-7ovl44-5.sc-7ovl44-6.cmwkpY > div > div.sc-kkGfuU.sc-7ad97h-0.sc-7ad97h-4.TXsfB > button.sc-7ovl44-40-50p");
    // buttonOnClick.addEventListener("click", () => {
    //     button50Percents(document)
    // });
    // if (checkPageUrl("swap", false))
    pageSwap(document);
    // if (checkPageUrl("farm/", /[0-99]/g))
    //     pageFarm();
});
