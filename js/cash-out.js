document.getElementById('btn-cash-out')
.addEventListener('click', function(event) {
    event.preventDefault();
    const cashOut = getInputFieldValueById('input-cash-out');
    const pinNumber = getInputFieldValueById('input-cash-out-pin-number');
    
    // validation pin number (wrong way)

    if(pinNumber === 1234) {
        const balance = getTextFieldValueById('account-balance');
        const balanceNew = balance - cashOut;
        document.getElementById('account-balance').innerText = balanceNew;

    } 

    else {
        alert('Failed Cash out !');
    }
    
    
})