// add money button

document.getElementById('btn-add-money')
.addEventListener('click', function(event) {
    event.preventDefault();
    const addMoneyNumber = getInputFieldValueById('input-add-money');
    const pinNumber = getInputFieldValueById('input-pin-number');
    
    // validation pin number (wrong way)

    if(pinNumber === 1234) {
        const balance = getTextFieldValueById('account-balance');
        const balanceNew = balance + addMoneyNumber;
        document.getElementById('account-balance').innerText = balanceNew;

    } 

    else {
        alert('Failed adding money !');
    }
    
    
})