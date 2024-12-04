// add money button

document.getElementById('btn-add-money')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const addMoneyNumber = getInputFieldValueById('input-add-money');
        const pinNumber = getInputFieldValueById('input-pin-number');
        if(isNaN(addMoneyNumber)) {
            alert('Failed to cash out');
            return;
        }
    

        // validation pin number (wrong way)

        if (pinNumber === 1234) {
            const balance = getTextFieldValueById('account-balance');
            const balanceNew = balance + addMoneyNumber;
            document.getElementById('account-balance').innerText = balanceNew;

            // add transaction history (without function)
            const div = document.createElement('div');
            p.innerHTML = `Credited ${addMoneyNumber} taka. C/B: ${balanceNew} taka`;
            document.getElementById('transaction-id').appendChild(div);

            // toast

            <div class="toast toast-top toast-start">
                <div class="alert alert-info">
                    <span>New mail arrived.</span>
                </div>
                <div class="alert alert-success">
                    <span>Message sent successfully.</span>
                </div>
            </div>

        }

        else {
            alert('Failed adding money !');
        }


    })