document.getElementById('btn-cash-out')
.addEventListener('click', function(event) {
    event.preventDefault();
    const cashOut = getInputFieldValueById('input-cash-out');
    const pinNumber = getInputFieldValueById('input-cash-out-pin-number');

    if(isNaN(cashOut)) {
        alert('Failed to cash out');
        return;
    }

    
    // validation pin number (wrong way)

    if(pinNumber === 1234) {
        const balance = getTextFieldValueById('account-balance');

        if(cashOut > balance) {
            alert('Not enough money');
            return;
        }
        const balanceNew = balance - cashOut;
        document.getElementById('account-balance').innerText = balanceNew;

        const div = document.createElement('div');
        div.classList.add('bg-yellow-300');
        div.innerHTML = `
        <h4 class = "text-xl text-semibold">Cash Out: </h4>
        <p> Debited ${cashOut} taka. C/B: ${balanceNew} taka

        `
        document.getElementById('transaction-id').appendChild(div);

    } 

    else {
        alert('Failed Cash out !');
    }
    
    
})