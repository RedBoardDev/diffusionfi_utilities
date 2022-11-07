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
    const titleParty = await waitForElm_byClassName('sc-kAzzGY ezqlXG css-1l5pk9w', 2);
    insertAfter(apyTitle, titleParty);
    var textPercents = await waitForLoadNumber_byClassName('sc-kAzzGY cVbXJ css-59zb50', 1);
    const apr = textPercents.textContent.split("%")[0];
    const gasCost = 0.1;

    var initialInvest = await waitForLoadNumber_byQuerySelector("#root > div > div.sc-129be35-1.jdMKkZ > div.sc-1ns39us-2.z0dxnq-0.hwPorj > div.sc-kkGfuU.sc-7ad97h-0.sc-7ad97h-1.sc-1thw45e-6.iQaxNZ > div > div:nth-child(3) > div:nth-child(2) > div.sc-kAzzGY.cVbXJ.css-1n8grf4");
    // const initialInvest = await waitForElm('sc-kAzzGY cVbXJ css-1n8grf4', 0);
    initialInvest = parseFloat(initialInvest.textContent.split("$")[1].replace(",", ""));
    const optimumCompoundDays = calculateOptimumCompoundTime(gasCost, apr, initialInvest);
    const nbrOfPeriods = calculatePeriods(optimumCompoundDays);
    const optimumApy = calculateAPY(nbrOfPeriods, apr);
    const apyText = createElement_fct(document, 'div', "sc-kAzzGY cVbXJ css-59zb50", optimumApy.toFixed(2) + "%");

    const grossRewards = calculateGrossRewards(nbrOfPeriods, gasCost, apr, initialInvest);
    // alert(grossRewards);

    insertAfter(apyText, textPercents);
}

const delay = async (ms = 1000) =>
  new Promise(resolve => setTimeout(resolve, ms))

async function makeALoopWait(document) {
  while (checkPageUrl("farm/", /[0-99]/g)) {
    pageFarm(document);
    await delay(120000)
  }
}

window.addEventListener('load',() => {
    if (checkPageUrl("swap", false))
        pageSwap(document);
    if (checkPageUrl("farm/", /[0-99]/g))
    makeALoopWait(document);
});
