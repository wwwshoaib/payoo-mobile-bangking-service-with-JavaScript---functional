// add money button

document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();
    const addMoney = getInputFieldValueById('input-add-money');
    const pinNumber = getInputFieldValueById('input-pin-number');

    if (isNaN(addMoney) || addMoney<0) {
        alert('Failed to add money');
        return;
    }





    // validation pin number (wrong way)

    if (pinNumber === 1234) {
        const balance = getTextFieldValueById('account-balance');
        const balanceNew = balance + addMoney;
        document.getElementById('account-balance').innerText = balanceNew;

       
        // transaction history

        const div = document.createElement('div');
        div.classList.add('bg-yellow-300');
        div.innerHTML = `
        <h4 class = "text-xl text-semibold">Add Money: </h4>
        <p> Credited ${addMoney} taka. C/B: ${balanceNew} taka

        `
        document.getElementById('transaction-id').appendChild(div);

    }

    else {
        alert('Failed adding money !');
    }


});