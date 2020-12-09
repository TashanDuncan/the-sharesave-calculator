//Load Modal window
$(window).on('load',function(){
    $('#myModal').modal('show');
    localLoad();
});

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
    $('#saveModal').modal('show');
    resultsDiv.classList.remove('d-none');
    returnText.textContent = `£${convertToCurrency(estimatedReturn())}`;
    savedText.textContent = `£${convertToCurrency(totalSavings())}`;
    profitText.textContent =`£${convertToCurrency(estimatedProfit())}`;
    percentageText.textContent = `${percentIncreased()}%`;
    optionsText.textContent = `${numberWithCommas(numberOfOptions())}`;
    taxText.textContent = `*£${convertToCurrency(calculateTax())}`;
    totalText.textContent = `£${convertToCurrency(grandTotal())}`;
    taxfreetext.textContent = `*Currently the first £${convertToCurrency(taxFree)} of profit is tax free`;
})

//Local Storage
const storageSettings = [];
const monthlySavings = document.getElementById("monthly-savings");
const saving3 = document.getElementById("saving-3-years");
const saving5 = document.getElementById("saving-5-years");
const optionPrice = document.getElementById("option-price");
const estimatePrice = document.getElementById("estimate-price");
const saveModal = document.getElementById("saveModal");
const saveModalText = document.getElementById("saveModalText")
const saveModalFooter = document.getElementById("saveModalfooter")


function localSave() {
    const modalBackdrop = document.querySelector('.modal-backdrop');

    storageSettings.push(monthlySavings.value);
    storageSettings.push(saving3.checked);
    storageSettings.push(saving5.checked);
    storageSettings.push(optionPrice.value);
    storageSettings.push(estimatePrice.value);
    localStorage.setItem('settings', JSON.stringify(storageSettings));
    saveModalFooter.remove();
    saveModalText.innerHTML = `<p>Settings saved! &#128516</p>`;
    
    setTimeout(function(){saveModal.remove()}, 1000);
    setTimeout(function(){modalBackdrop.remove()}, 1000);
    document.body.classList.remove("modal-open");
}

function localLoad() {
    let settings = JSON.parse(localStorage.getItem('settings'));
    monthlySavings.value = settings[0];
    saving3.checked = settings[1];
    saving5.checked = settings[2];
    optionPrice.value = settings[3];
    estimatePrice.value = settings[4];
}

