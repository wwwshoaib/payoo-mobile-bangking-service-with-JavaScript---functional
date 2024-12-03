//login 

document.getElementById('btn-login')
.addEventListener('click', function(event){
    event.preventDefault();
    // get mobile number
    const mobileNumberInput = document.getElementById('input-mobile-number').value;
    const pinNumberInput = document.getElementById('input-pin-number').value;
    // mobile number and pin validation
    if(mobileNumberInput === '1234' && pinNumberInput === '1234') {
        window.location.href = '/home.html';
    }

    else {
        alert('Failed login! Wrong phone number or pin');
    }
})