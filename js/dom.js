const submit = document.getElementById('submit')
const returnText = document.getElementById('return')
const savedText = document.getElementById('saved')
const profitText = document.getElementById('profit')
const percentageText = document.getElementById('percent')
const optionsText = document.getElementById('options')

submit.addEventListener('click', () => {

    returnText.textContent = `${convertToCurrency(estimatedReturn())}`;
    savedText.textContent = `${convertToCurrency(totalSavings())}`;
    profitText.textContent =`${convertToCurrency(estimatedProfit())}`;
    percentageText.textContent = `${percentIncreased()}`;
    optionsText.textContent = `${numberOfOptions()}`;
})