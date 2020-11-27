const taxFree = 12300;

// Obtain total savings based on monthly saving * duration of savings
function totalSavings() {
    const savingsPerMonth = document.getElementById("monthly-savings").value;
    let yearlyTerm;

    if (document.getElementById('saving-3-years').checked) {
        yearlyTerm = 36;
    } else if (document.getElementById('saving-5-years').checked) {
        yearlyTerm = 60;
    }
    const totalSavings = savingsPerMonth * yearlyTerm;
    return totalSavings;
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function numberOfOptions() {
    const options = document.getElementById("option-price").value;
    const result = Number.parseInt(totalSavings() / options * 100);
    return result;
}

function estimatedReturn() {
    return numberOfOptions() * document.getElementById('estimate-price').value / 100;
}

function estimatedProfit() {
    if(estimatedReturn() > totalSavings()){
        return estimatedReturn() - totalSavings();
    } else {
        return 0;
    }
}

function convertToCurrency(num) {
    const decimal = Number.parseFloat(num).toFixed(2);
    return numberWithCommas(decimal);
}

function percentIncreased() {
    if(estimatedProfit() === 0){
        return 0;
    } else {
        return Number.parseFloat((estimatedReturn() - totalSavings()) / totalSavings()).toFixed(2) * 100;
    }
}

function calculateTax() {
    let taxableIncome;
    if (estimatedProfit() > taxableIncome) {
        taxableIncome = estimatedProfit() - taxableIncome;
        return taxableIncome / 10;
    } else {
        return 0;
    }

}

function grandTotal() {
    return estimatedReturn() - calculateTax();
}