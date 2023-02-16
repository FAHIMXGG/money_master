// ID
// income-input
// food-input
// rent-input
// clothes-input
// calculate-button

// total-ex
// balance

// save-input
// save-btn

// s-amount
// r-balance
document.getElementById('calculate-button').addEventListener('click', function(){
    //income-input
    const incomeInput = document.getElementById('income-input')
    const incomeInputString = incomeInput.value;
    const incomeInputValue = parseFloat(incomeInputString);
    //console.log(incomeInputValue);
    //food-input
    const foodInput = document.getElementById('food-input')
    const foodInputString = foodInput.value;
    const foodInputValue = parseFloat(foodInputString);
    //console.log(foodInputValue);

    const rentInput = document.getElementById('rent-input')
    const rentInputString = rentInput.value;
    const rentInputValue = parseFloat(rentInputString);
    //console.log(rentInputValue);

    const clothesInput = document.getElementById('clothes-input')
    const clothesInputString = clothesInput.value;
    const clothesInputValue = parseFloat(clothesInputString);
    //console.log(clothesInputValue);

    //total expanse 
    const totalEx = document.getElementById('total-ex')
    const totalExpanse = foodInputValue + rentInputValue + clothesInputValue;
    totalEx.innerText = totalExpanse

    //Balance
    const balanceText = document.getElementById('balance')
    const balance = incomeInputValue - totalExpanse
    balanceText.innerText = balance;
})


document.getElementById('save-btn').addEventListener('click', function(){
    const saveInput = document.getElementById('save-input')
    const saveInputString = saveInput.value;
    const saveInputValue = parseFloat(saveInputString);
    

    const balance = document.getElementById('balance')
    const balanceString = balance.innerText;
    const balanceValue = parseFloat(balanceString);
    
    const savingAmountText = document.getElementById('s-amount')
    const saving = balanceValue * (saveInputValue / 100 );
    savingAmountText.innerText = saving
    
    const remainingBalanceText = document.getElementById('r-balance');
    const remainingBalance = balanceValue - saving;
    remainingBalanceText.innerText = remainingBalance;


})