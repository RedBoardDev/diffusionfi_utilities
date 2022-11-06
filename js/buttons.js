async function create50PercentsButton(document) {
    const neartag = await waitForElm("#swap-currency-input > div > div.sc-7ovl44-5.sc-7ovl44-6.cmwkpY > div > div.sc-kkGfuU.sc-7ad97h-0.sc-7ad97h-4.TXsfB > div");
    const button = document.createElement('button');
    button.innerHTML = '(50%)';
    button.className = "sc-7ovl44-40-50p";
    insertAfter(button, neartag);
};

async function button50Percents(document) {
    const buttonOnClick = await waitForElm("#swap-currency-input > div > div.sc-7ovl44-5.sc-7ovl44-6.cmwkpY > div > div.sc-kkGfuU.sc-7ad97h-0.sc-7ad97h-4.TXsfB > button.sc-7ovl44-40-50p");
    buttonOnClick.addEventListener("click", () => {
        const countToken_doc = document.querySelector("#swap-currency-input > div > div.sc-7ovl44-5.sc-7ovl44-6.cmwkpY > div > div.sc-kkGfuU.sc-7ad97h-0.sc-7ad97h-4.TXsfB > div");
        const countToken = parseFloat(countToken_doc.textContent.split(" ")[1]);
        const fillInput = document.querySelector("#swap-currency-input > div > div.sc-7ovl44-4.eYnRMv > input");
        fillInput.value = countToken / 2;
        const change = new InputEvent('change', { bubbles: true });
        fillInput.dispatchEvent(change);
    });
};
