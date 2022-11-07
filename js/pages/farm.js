

async function pageFarm_addTitle(document) {
    const neartag_apy = await waitForElm_byClassName('sc-kAzzGY ezqlXG css-1l5pk9w', 2);
    const apyTitle = createElement_fct(document, 'div', "sc-kAzzGY ezqlXG css-1l5pk9w", "APY");
    insertAfter(apyTitle, neartag_apy);
    const neartag_compoundTime = await waitForElm_byClassName("sc-kkGfuU sc-7ad97h-0 sc-7ad97h-1 hXnnJd", 6);
    const compoundTimeTitle = createElement_fct(document, 'div', "sc-kAzzGY cVbXJ css-8626y4", "Optimum compound time");
    insertAfter(compoundTimeTitle, neartag_compoundTime);
}

async function pageFarm_addAPY(document, nbrOfPeriods, apr, percentsText) {
    const optimumApy = calculateAPY(nbrOfPeriods, apr);
    let apyText;
    if (document.getElementsByClassName("sc-kAzzGY cVbXJ css-59zb50")[2]) {
        apyText = document.getElementsByClassName("sc-kAzzGY cVbXJ css-59zb50")[2];
        apyText.textContent = optimumApy.toFixed(2) + "%";
    } else {
        apyText = createElement_fct(document, 'div', "sc-kAzzGY cVbXJ css-59zb50", optimumApy.toFixed(2) + "%");
        insertAfter(apyText, percentsText);
    }
}

async function pageFarm_addOCT(document, optimumCompoundDays) {
    const neartag_compoundTime = await waitForElm_byClassName("sc-kAzzGY cVbXJ css-8626y4", 5);
    let compoundTimeText;
    if (document.getElementsByClassName("sc-kAzzGY cVbXJ css-8626y4")[6]) {
        OCT_text = document.getElementsByClassName("sc-kAzzGY cVbXJ css-8626y4")[6];
        OCT_text.textContent = optimumCompoundDays.toFixed(2) + " hours";
    } else {
        compoundTimeText = createElement_fct(document, 'div', "sc-kAzzGY cVbXJ css-8626y4", optimumCompoundDays.toFixed(2) + " hours");
        insertAfter(compoundTimeText, neartag_compoundTime);
    }
}

async function pageFarm(document) {
    pageFarm_addTitle(document);
    const delay = async (ms = 1000) =>
    new Promise(resolve => setTimeout(resolve, ms))
    while (checkPageUrl("farm/", /[0-99]/g)) {
        const gasCost = 0.05;
        const percentsText = await waitForLoadNumber_byClassName('sc-kAzzGY cVbXJ css-59zb50', 1);
        const apr = percentsText.textContent.split("%")[0];
        var initialInvest = await waitForLoadNumber_byQuerySelector("#root > div > div.sc-129be35-1.jdMKkZ > div.sc-1ns39us-2.z0dxnq-0.hwPorj > div.sc-kkGfuU.sc-7ad97h-0.sc-7ad97h-1.sc-1thw45e-6.iQaxNZ > div > div:nth-child(3) > div:nth-child(2) > div.sc-kAzzGY.cVbXJ.css-1n8grf4");
        initialInvest = parseFloat(initialInvest.textContent.split("$")[1].replace(",", ""));
        const optimumCompoundDays = calculateOptimumCompoundTime(gasCost, apr, initialInvest);
        const nbrOfPeriods = calculatePeriods(optimumCompoundDays);

        pageFarm_addAPY(document, nbrOfPeriods, apr, percentsText);
        pageFarm_addOCT(document, optimumCompoundDays);
        await delay(1200);
    }
}
