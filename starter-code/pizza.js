// Write your Pizza Builder JavaScript in this file.

// TOTAL
var spanTotalPrice = document.querySelector('.total-price');
var totalPrice = parseInt(spanTotalPrice.textContent);


// PEPPERONI

var btnPepperoni = document.querySelector('.btn-pepperonni');
var divPepperoni = document.querySelector('.pep-div');
var liPep = document.querySelector('.li-pep');

var flagBtnPep = false;

btnPepperoni.addEventListener('click', function(){
    if (flagBtnPep == true) {
        divPepperoni.className += ' ' + 'clear';
        btnPepperoni.classList.remove('active');
        liPep.classList.add('clear');
        totalPrice--
        spanTotalPrice.textContent = totalPrice;
        flagBtnPep = false;
    } else {
        divPepperoni.classList.remove('clear');
        btnPepperoni.classList.add('active');
        totalPrice++
        spanTotalPrice.textContent = totalPrice;
        liPep.classList.remove('clear');
        flagBtnPep = true;
    }
});


// GREEN PEPPER

var btnGreenPepper = document.querySelector('.btn-green-peppers');
var divGreenPepper = document.querySelector('.green-pepper-div');
var liGreen = document.querySelector('.li-green');

var flagBtnGreen = false;

btnGreenPepper.addEventListener('click', function(){
    if (flagBtnGreen == true) {
        divGreenPepper.className += ' ' + 'clear';
        btnGreenPepper.classList.remove('active');
        liGreen.classList.add('clear');
        totalPrice--
        spanTotalPrice.textContent = totalPrice;
        flagBtnGreen = false;
    } else {
        divGreenPepper.classList.remove('clear');
        btnGreenPepper.classList.add('active');
        liGreen.classList.remove('clear');
        totalPrice++
        spanTotalPrice.textContent = totalPrice;
        flagBtnGreen = true;
    }
});

// MUSHROOM

var btnMushroom = document.querySelector('.btn-mushrooms');
var divMushroom = document.querySelector('.mushroom-div');
var liMush = document.querySelector('.li-mush');

var flagBtnMush = false;

btnMushroom.addEventListener('click', function(){
    if (flagBtnMush == true) {
        divMushroom.className += ' ' + 'clear';
        btnMushroom.classList.remove('active');
        liMush.classList.add('clear');
        totalPrice--
        spanTotalPrice.textContent = totalPrice;
        flagBtnMush = false;
    } else {
        divMushroom.classList.remove('clear');
        btnMushroom.classList.add('active');
        liMush.classList.remove('clear');
        totalPrice++
        spanTotalPrice.textContent = totalPrice;
        flagBtnMush = true;
    }
});

// CRUST

var btnCrust = document.querySelector('.btn-crust');
var sectionCrust = document.querySelector('.crust');
var liCrust = document.querySelector('.li-crust');

var flagCrust = false;

btnCrust.addEventListener('click', function(){
    if (flagCrust == true) {
        sectionCrust.classList.remove('crust-gluten-free');
        btnCrust.classList.remove('active');
        liCrust.classList.add('clear');
        totalPrice -= 5;
        spanTotalPrice.textContent = totalPrice;
        flagCrust = false;
    } else {
        sectionCrust.classList.add('crust-gluten-free');
        btnCrust.classList.add('active');
        liCrust.classList.remove('clear');
        totalPrice += 5;
        spanTotalPrice.textContent = totalPrice;
        flagCrust = true;
    }
});

// WHITE SAUCE

var btnWS = document.querySelector('.btn-sauce');
var sectionWS = document.querySelector('.sauce');
var liWS = document.querySelector('.li-ws');

var flagWS = false;

btnWS.addEventListener('click', function(){
    if (flagWS == true) {
        sectionWS.className += ' ' + 'sauce-white';
        btnWS.classList.remove('active');
        liWS.classList.add('clear');
        totalPrice -= 3;
        spanTotalPrice.textContent = totalPrice;
        flagWS = false;
    } else {
        sectionWS.classList.remove('sauce-white');
        btnWS.classList.add('active');
        liWS.classList.remove('clear');
        totalPrice += 3;
        spanTotalPrice.textContent = totalPrice;
        flagWS = true;
    }
});


