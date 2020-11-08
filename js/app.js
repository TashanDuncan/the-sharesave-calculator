

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

    const result = totalSavings() / options * 100;
    return result;
}