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

function pageSwap() {
    create50PercentsButton(document);
    button50Percents(document);
}

function pageFarm() {
    alert("FARM PAGE");
}

window.addEventListener('load', function () {
    console.log("debug1")
    if (checkPageUrl("swap", false))
        pageSwap();
    if (checkPageUrl("farm/", /[0-99]/g))
        pageFarm();
});
