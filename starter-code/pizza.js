//Variables

var counterPep = true;
var counterMush = true;
var counterPepper = true;
var counterSauce = true;
var counterCrust = true;
var result = 10;

var pizza = document.getElementById('pizza');
var pepperonnis = document.querySelectorAll('.pep');
var mushrooms = document.querySelectorAll('.mushroom');
var greenPeppers = document.querySelectorAll('.green-pepper');
var sauce = document.querySelector('.sauce');
var crust = document.querySelector('.crust');
var pepPrice = document.querySelector('.pep-price');
var mushPrice = document.querySelector('.mush-price');
var greenPrice = document.querySelector('.green-price');
var whitePrice = document.querySelector('.white-price');
var glutenPrice = document.querySelector('.gluten-price');
var totalPrice = document.querySelector('.total-price');

var buttonPepperonni = document.querySelector('.btn-pepperonni');
var buttonMushroom = document.querySelector('.btn-mushrooms');
var buttonGreenPepper = document.querySelector('.btn-green-peppers');
var buttonSauce = document.querySelector('.btn-sauce');
var buttonCrust = document.querySelector('.btn-crust');


function currentPrice () {
    totalPrice.innerHTML = result;
}

//Buttons
    
buttonPepperonni.addEventListener("click", function () {
    if (counterPep === false) {
        pepperonnis.forEach (function (pep) {
            pep.style.display = "none";
        });
        pepPrice.style.display = "none"
        counterPep = true;
        buttonPepperonni.className = "btn btn-pepperonni";
        result -= 1;
    } else {
        pepperonnis.forEach (function (pep) {
            pep.style.display = "block";
        });
        pepPrice.style.display = "block"
        counterPep = false;
        buttonPepperonni.className = "btn btn-pepperonni active";
        result += 1;
    }
    currentPrice();
})

buttonMushroom.addEventListener("click", function () {
    if (counterMush === false) {
        mushrooms.forEach (function (mush) {
            mush.style.display = "none";
        });
        mushPrice.style.display = "none"
        counterMush = true;
        buttonMushroom.className = "btn btn-mushrooms";
        result -= 1;
    } else {
        mushrooms.forEach (function (mush) {
            mush.style.display = "block";
        });
        mushPrice.style.display = "block"
        counterMush = false;
        buttonMushroom.className = "btn btn-mushrooms active";
        result += 1;
    }
    currentPrice();
})

buttonGreenPepper.addEventListener("click", function () {
    if (counterPepper === false) {
        greenPeppers.forEach (function (green) {
            green.style.display = "none";
        });
        greenPrice.style.display = "none"
        counterPepper = true;
        buttonGreenPepper.className = "btn btn-green-peppers";
        result -= 1;
    } else {
        greenPeppers.forEach (function (green) {
            green.style.display = "block";
        });
        greenPrice.style.display = "block"
        counterPepper = false;
        buttonGreenPepper.className = "btn btn-green-peppers active";
        result += 1;
    }
    currentPrice();
})

buttonSauce.addEventListener("click", function () {
    if (counterSauce === true) {
        sauce.className = "sauce sauce-white";
        whitePrice.style.display = "block"
        counterSauce = false;
        buttonSauce.className = "btn btn-sauce active";
        result += 3;
    } else {
        sauce.className = "sauce";
        whitePrice.style.display = "none"
        counterSauce = true;
        buttonSauce.className = "btn btn-sauce";
        result -= 3;
    }  
    currentPrice();
})

buttonCrust.addEventListener("click", function () {
    if (counterCrust === true) {
        crust.className = "crust crust-gluten-free";
        glutenPrice.style.display = "block"
        counterCrust = false;
        buttonCrust.className = "btn btn-crust active";
        result += 5;
    } else {
        crust.className = "crust";
        glutenPrice.style.display = "none"
        counterCrust = true;
        buttonCrust.className = "btn btn-crust";
        result -= 5;
    }  
    currentPrice();
})