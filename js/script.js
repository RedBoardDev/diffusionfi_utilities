function createElement_fct(document, type, className, text) {
    var apyText = document.createElement(type);

    apyText.className = className;
    apyText.innerHTML = text;
    return (apyText);
}

const insertAfter = (newNode, referenceNode) => {
    if (referenceNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }
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

function pageSwap(document) {
    create50PercentsButton(document);
    button50Percents(document)
}

async function pageFarm(document) {
    const apyTitle = createElement_fct(document, 'div', "sc-kAzzGY ezqlXG css-1l5pk9w", "APY");
    const apyText = createElement_fct(document, 'div', "sc-kAzzGY cVbXJ css-59zb50", "6294%");
    const titleParty = await waitForElm_byClassName('sc-kAzzGY ezqlXG css-1l5pk9w', 2);
    const textPercents = await waitForElm_byClassName('sc-kAzzGY cVbXJ css-59zb50', 1);

    insertAfter(apyTitle, titleParty);
    insertAfter(apyText, textPercents);
}

window.addEventListener('load',() => {
    if (checkPageUrl("swap", false))
        pageSwap(document);
    if (checkPageUrl("farm/", /[0-99]/g))
        pageFarm(document);
});
