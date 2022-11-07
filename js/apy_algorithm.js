function calculatePeriods(everyXfrequency) {
    const coef_frequency = 24;
    let nbrOfPeriods = 365 * (coef_frequency / everyXfrequency);
    return (nbrOfPeriods);
}

function calculateGrossRewards(nbrOfPeriods, gasCost, apr, initialInvest) {
    return ((((1 + ((apr / 100) / nbrOfPeriods)) ** nbrOfPeriods - 1) * initialInvest) - (gasCost * nbrOfPeriods));
}

function calculateAPY(nbrOfPeriods, apr) {
    return (((1 + ((apr / 100) / nbrOfPeriods)) ** (nbrOfPeriods) - 1) * 100)
}

function calculateOptimumCompoundTime(gasCost, apr, initialInvest) {
    let nbrOfPeriods;
    var optimumCompoundTime = 0.1;
    var grossRewards = -99999999;
    var continueWhile = true;
    var everyXfrequency = 0;
    var test = 0;

    while (optimumCompoundTime < 10000 && continueWhile) {
        nbrOfPeriods = calculatePeriods(optimumCompoundTime);
        everyXfrequency = calculateGrossRewards(nbrOfPeriods, gasCost, apr, initialInvest);
        if (everyXfrequency > 0) {
            if (everyXfrequency > grossRewards)
                grossRewards = everyXfrequency;
            else
                continueWhile = false;
        }
        optimumCompoundTime += 0.01;
    }
    return (optimumCompoundTime);
}
