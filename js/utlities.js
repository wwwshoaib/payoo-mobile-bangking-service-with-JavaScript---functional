//function: to get input value

function getInputFieldValueById(id) {
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue)
    return inputNumber;
} 

//function: to get text value

function getTextFieldValueById(id) {
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
} 

// function to show a section by hidding other sections

function showSectionById(id) {
    document.getElementById('show-form-add-money').classList.add('hidden');
    document.getElementById('show-form-cash-out').classList.add('hidden');
    document.getElementById('show-transaction-section').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');

}