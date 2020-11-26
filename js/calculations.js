const taxableIncome = 12300;

// Obtain total savings based on monthly saving * duration of savings
const totalSavings = () =>{
    const savingsPerMonth = document.getElementById("monthly-savings").value;
    let yearlyTerm;
    
    if (document.getElementById('saving-3-years').checked){
        yearlyTerm = 36;
    } else if (document.getElementById('saving-5-years').checked){
        yearlyTerm = 60;
    }
    const totalSavings = savingsPerMonth * yearlyTerm;
    return totalSavings;
}


const numberOfOptions = () => {
    const options = document.getElementById("option-price").value;
    const result = Number.parseInt(totalSavings() / options * 100);
    return result;
}

const estimatedReturn = () => numberOfOptions() * document.getElementById('estimate-price').value / 100;

const estimatedProfit = () => estimatedReturn() - totalSavings();

const convertToCurrency = (num) =>  `£${Number.parseFloat(num).toFixed(2)}`

const percentIncreased = () => `${Number.parseFloat((estimatedReturn() - totalSavings()) / totalSavings()).toFixed(2) * 100}%`

const calculateTax = () => {
   const taxFree = estimatedReturn() - taxableIncome;

   return taxFree / 10;
}