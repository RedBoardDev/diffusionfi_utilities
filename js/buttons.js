function create50PercentsButton(document) {
    const neartag = document.querySelector("#swap-currency-input > div > div.sc-7ovl44-5.sc-7ovl44-6.cmwkpY > div > div.sc-kkGfuU.sc-7ad97h-0.sc-7ad97h-4.TXsfB > div");

    const button = document.createElement('button');
    button.innerHTML = '(50%)';
    button.className = "sc-7ovl44-40-50p";
    insertAfter(button, neartag);
}
