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

function waitForElm_byClassName(selector, case_nbr) {
    return new Promise(resolve => {
        if (document.getElementsByClassName(selector)[case_nbr]) {
            return resolve(document.getElementsByClassName(selector)[case_nbr]);
        }
        const observer = new MutationObserver(mutations => {
            if (document.getElementsByClassName(selector)[case_nbr]) {
                resolve(document.getElementsByClassName(selector)[case_nbr]);
                observer.disconnect();
            }
        });
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

function containsNumbers(str) {
    return /[1-9]/.test(str);
  }

function waitForLoadNumber(selector, case_nbr) {
    return new Promise(resolve => {
        if (document.getElementsByClassName(selector)[case_nbr] && containsNumbers(document.getElementsByClassName(selector)[case_nbr].textContent)) {
            return resolve(document.getElementsByClassName(selector)[case_nbr]);
        }
        const observer = new MutationObserver(mutations => {
            if (document.getElementsByClassName(selector)[case_nbr] && containsNumbers(document.getElementsByClassName(selector)[case_nbr].textContent)) {
                resolve(document.getElementsByClassName(selector)[case_nbr]);
                observer.disconnect();
            }
        });
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}
