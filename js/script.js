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

window.addEventListener('load',() => {
    if (checkPageUrl("swap", false))
        pageSwap(document);
    if (checkPageUrl("farm/", /[0-99]/g))
    pageFarm(document);
});
