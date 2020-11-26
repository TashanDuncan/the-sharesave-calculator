//DOM Variables
const form = document.getElementById('myForm');
const submit = document.getElementById('submit');
const returnText = document.getElementById('return');
const savedText = document.getElementById('saved');
const profitText = document.getElementById('profit');
const percentageText = document.getElementById('percent');
const optionsText = document.getElementById('options');
const resultsDiv = document.getElementById('results');
const taxText = document.getElementById('tax');
const totalText = document.getElementById('total');
const taxfreetext = document.getElementById('tax-free');

// Event Listener

form.addEventListener('submit', (event) => {
    event.preventDefault();
    resultsDiv.classList.remove('d-none');
    returnText.textContent = `£${convertToCurrency(estimatedReturn())}`;
    savedText.textContent = `£${convertToCurrency(totalSavings())}`;
    profitText.textContent =`£${convertToCurrency(estimatedProfit())}`;
    percentageText.textContent = `${percentIncreased()}%`;
    optionsText.textContent = `${numberWithCommas(numberOfOptions())}`;
    taxText.textContent = `*£${convertToCurrency(calculateTax())}`;
    totalText.textContent = `£${convertToCurrency(grandTotal())}`;
    taxfreetext.textContent = `*Currently the first £${convertToCurrency(taxableIncome)} of profit is tax free`;
})