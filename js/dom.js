//DOM Variables
const submit = document.getElementById('submit')
const returnText = document.getElementById('return')
const savedText = document.getElementById('saved')
const profitText = document.getElementById('profit')
const percentageText = document.getElementById('percent')
const optionsText = document.getElementById('options')
const resultsDiv = document.getElementById('results')

// Event Listeners
submit.addEventListener('click', () => {
    resultsDiv.classList.remove('d-none');
    returnText.textContent = `${convertToCurrency(estimatedReturn())}`;
    savedText.textContent = `${convertToCurrency(totalSavings())}`;
    profitText.textContent =`${convertToCurrency(estimatedProfit())}`;
    percentageText.textContent = `${percentIncreased()}`;
    optionsText.textContent = `${numberOfOptions()}`;
})