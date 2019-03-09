// Write your Pizza Builder JavaScript in this file.

/* Quantidade de cada um dos três sabor - Pepperoni, Mushrooms e Green Peppers */
var sabores = [0,0,0]
var numSabor = 0;


function totalPrice(){
    if(document.getElementById('pepperoni-list').style.visibility == 'hidden'){
        pepperoni =0;}
    else{
        pepperoni=1;
    }
    if(document.getElementById('mushroom-list').style.visibility == 'hidden'){
        mushroom =0;}
    else{
        mushroom=1;
    }
    if(document.getElementById('greenpepper-list').style.visibility == 'hidden'){
        greenpepper =0;}
    else{
        greenpepper=1;
    }
    if(document.getElementById('sauce-list').style.visibility == 'hidden'){
        sauce =0;}
    else{
        sauce=3;
    }
    if(document.getElementById('queijo-list').style.visibility == 'hidden'){
        queijo =0;}
    else{
        queijo=5;
    }
    total = pepperoni + mushroom + greenpepper + sauce + queijo;
    document.getElementById('total').innerText = total + 10
}



function hidePepperoni(){
    var pizza = document.getElementById('pepperoni-place')
    for(i=1;i<pizza.childNodes.length;i++){
        if(i==1 || i%2 ==1){
        pizza.childNodes[i].style.visibility = 'hidden'
        }
    }
    document.getElementById('pepperoni-list').style.visibility = 'hidden'
    totalPrice()
}

function showPepperoni(){
    var pizza = document.getElementById('pepperoni-place')
    for(i=1;i<pizza.childNodes.length;i++){
        if(i==1 || i%2 ==1){
        pizza.childNodes[i].style.visibility = 'visible'
        }
    }
    document.getElementById('pepperoni-list').style.visibility = 'visible'
    totalPrice()
}

function hideMushroom(){
    var pizza = document.getElementById('mushroom-place')
    for(i=1;i<pizza.childNodes.length;i++){
        if(i==1 || i%2 ==1){
        pizza.childNodes[i].style.visibility = 'hidden'
        }
    }
    document.getElementById('mushroom-list').style.visibility = 'hidden'
    totalPrice()
}

function showMushroom(){
    var pizza = document.getElementById('mushroom-place')
    for(i=1;i<pizza.childNodes.length;i++){
        if(i==1 || i%2 ==1){
        pizza.childNodes[i].style.visibility = 'visible'
        }
    }
    document.getElementById('mushroom-list').style.visibility = 'visible'
    totalPrice()
}

function hideGreenPepper(){
    var pizza = document.getElementById('greenpepper-place')
    for(i=1;i<pizza.childNodes.length;i++){
        if(i==1 || i%2 ==1){
        pizza.childNodes[i].style.visibility = 'hidden'
        }
    }
    document.getElementById('greenpepper-list').style.visibility = 'hidden'
    totalPrice()
}

function showGreenPepper(){
    var pizza = document.getElementById('greenpepper-place')
    for(i=1;i<pizza.childNodes.length;i++){
        if(i==1 || i%2 ==1){
        pizza.childNodes[i].style.visibility = 'visible'
        }
    }
    document.getElementById('greenpepper-list').style.visibility = 'visible'
    totalPrice()
}

var mushroomvisible = false
var pepperonivisible = false
var grenpeppervisible = false

function pepperoniButton(){
    if (pepperonivisible==false){
        showPepperoni();
        pepperonivisible=true;}
    else{
        hidePepperoni();
        pepperonivisible=false;
    }
}

function mushroomButton(){
    if (mushroomvisible==false){
        showMushroom();
        mushroomvisible=true;}
    else{
        hideMushroom();
        mushroomvisible=false;
    }
}

function greenpepperButton(){
    if (grenpeppervisible==false){
        showGreenPepper();
        grenpeppervisible=true;}
    else{
        hideGreenPepper();
        grenpeppervisible=false;
    }
}


function queijo(){
    var queijo = document.getElementById('cheese')
    var queijoPrice = document.getElementById('queijo-list')

    if (queijo.style.visibility == 'hidden'){
        queijo.style.visibility = 'visible'
        queijoPrice.style.visibility = 'visible'
    }       
        else{
        queijo.style.visibility = 'hidden'
        queijoPrice.style.visibility = 'hidden'
        }
        totalPrice()
}

function sauce(){
    var sauce = document.getElementById('sauce')
    var saucePrice = document.getElementById('sauce-list')

    if (sauce.style.visibility == 'hidden'){
        sauce.style.visibility = 'visible'
        saucePrice.style.visibility = 'visible'
    }
        else{
        sauce.style.visibility = 'hidden'
        saucePrice.style.visibility = 'hidden'
        }
        totalPrice()
}


window.onload = function(){


document.getElementById('btn-pepperonni').addEventListener('click',pepperoniButton)
document.getElementById('btn-mushroom').addEventListener('click',mushroomButton)
document.getElementById('btn-greenpepper').addEventListener('click',greenpepperButton)
document.getElementById('btn-queijo').addEventListener('click',queijo)
document.getElementById('btn-sauce').addEventListener('click',sauce)


}

