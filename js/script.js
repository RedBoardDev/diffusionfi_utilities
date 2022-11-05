const insertAfter = (newNode, referenceNode) => {
    if (referenceNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }
};

function create50PercentsButton(document) {
    const neartag = document.querySelector("#swap-currency-input > div > div.sc-7ovl44-5.sc-7ovl44-6.cmwkpY > div > div.sc-kkGfuU.sc-7ad97h-0.sc-7ad97h-4.TXsfB > div");
    console.log("debug2", neartag);
    const button = document.createElement('button');
    button.innerHTML = '(50%)';
    button.className = "sc-7ovl44-40-50p";
    insertAfter(button, neartag);
}

function button50Percents(document) {
    const buttonOnClick = document.querySelector("#swap-currency-input > div > div.sc-7ovl44-5.sc-7ovl44-6.cmwkpY > div > div.sc-kkGfuU.sc-7ad97h-0.sc-7ad97h-4.TXsfB > button.sc-7ovl44-40-50p");
    buttonOnClick.addEventListener("click", () => {
        const countToken_doc = document.querySelector("#swap-currency-input > div > div.sc-7ovl44-5.sc-7ovl44-6.cmwkpY > div > div.sc-kkGfuU.sc-7ad97h-0.sc-7ad97h-4.TXsfB > div");
        const countToken = parseFloat(countToken_doc.textContent.split(" ")[1]);
        console.log(countToken);
        const fillInput = document.querySelector("#swap-currency-input > div > div.sc-7ovl44-4.eYnRMv > input");
        fillInput.value = countToken / 2;
        const change = new InputEvent('change', { bubbles: true });
        fillInput.dispatchEvent(change);
    });
};

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

function pageSwap() {
    console.log("debug1");
    create50PercentsButton(document);
    // button50Percents(document)
}

function pageFarm() {
    alert("FARM PAGE");
}

window.addEventListener('load', function () {
    // create50PercentsButton(document)

    // const buttonOnClick = document.querySelector("#swap-currency-input > div > div.sc-7ovl44-5.sc-7ovl44-6.cmwkpY > div > div.sc-kkGfuU.sc-7ad97h-0.sc-7ad97h-4.TXsfB > button.sc-7ovl44-40-50p");
    // buttonOnClick.addEventListener("click", () => {
    //     button50Percents(document)
    // });
    if (checkPageUrl("swap", false))
        pageSwap();
    if (checkPageUrl("farm/", /[0-99]/g))
        pageFarm();

});

