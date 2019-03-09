
var pepe = document.querySelectorAll("section.pep");
var green = document.querySelectorAll("section.green-pepper");
var mushroom = document.querySelectorAll("section.mushroom");
var cheese = document.querySelectorAll("section.cheese");
var sauce = document.querySelectorAll("section.sauce-white");
var crust = document.querySelectorAll("section.crust.crust-gluten-free")[0]
crust.setAttribute("class", "crust");
var lista = document.querySelectorAll("body li");
var pepeStatus = false, greenState = false, mushroomState = false, sauceState = false, crustState = false, cheeseStatus = false;


var pizza = new Pizza(pepe, green, mushroom, cheese, sauce)

pizza.clearPizza();
document.querySelectorAll("strong")[0].innerText = "$10";

var textValue = document.querySelectorAll("strong")[0];


var classnamePepe = document.getElementsByClassName("btn btn-pepperonni active")[0];
var myPepe = function () {

 

    if (pepeStatus == false) {

        pizza.pepeShow(1)
        pepeStatus = true
        pizza.listValue(lista[5],'$0 pepperonni')
    } else if(pepeStatus==true){
        pizza.clearPizzaMain(pizza.pepe)
        pepeStatus = false
        if (parseInt(textValue.textContent.split("$")[1]) <= 10) {

            return false

        } else {

            pizza.subValue(1)
            pizza.listValueMais(lista[5],'$1 pepperonni')
        }

   
    }

};
classnamePepe.addEventListener('click', myPepe, false);






var classnameGreen = document.getElementsByClassName("btn btn-green-peppers active")[0];
var myGreen = function () {
    if (greenState == false) {

        pizza.greenShow(1)
        greenState = true;
        pizza.listValue(lista[7],'$0 green peppers')
    } else {

        pizza.clearPizzaMain(pizza.green)
        greenState = false;
        if (parseInt(textValue.textContent.split("$")[1]) <= 10) {
            return false
        } else {

            pizza.subValue(1)
            pizza.listValueMais(lista[7],'$1 green peppers')
        }

    }
};

classnameGreen.addEventListener('click', myGreen, false);






var classnameMushroom = document.getElementsByClassName("btn btn-mushrooms active")[0];
var myMushroom = function () {

    if (mushroomState == false) {

        pizza.mushroomShow(1)

        mushroomState = true;
        pizza.listValue(lista[6],'$0 mushrooms')
    } else {
        pizza.clearPizzaMain(pizza.mushroom)
        mushroomState = false;
        if (parseInt(textValue.textContent.split("$")[1]) <= 10) {
            return false
        } else {

            pizza.subValue(1)
            pizza.listValueMais(lista[6],'$1 mushrooms')
        }

    }


};

classnameMushroom.addEventListener('click', myMushroom, false);



var classnameCheese = document.getElementsByClassName("btn btn-sauce active")[0];
var mySauce = function () {

    if (sauceState == false) {
        pizza.sauceShow(3)
        pizza.cheeseShow(0)
        sauceState = true
        pizza.listValue(lista[8],'$0 white sauce')

    } else {

        pizza.clearPizzaMain(pizza.sauce)
        pizza.clearPizzaMain(pizza.cheese)
        sauceState = false
        if (parseInt(textValue.textContent.split("$")[1]) <= 10) {
            return false
        } else {

            pizza.subValue(3)
            pizza.listValueMais(lista[8],'$3 white sauce')
        }

    }

};
classnameCheese.addEventListener('click', mySauce, false);




var classnameSauce = document.getElementsByClassName("btn btn-crust active")[0];

var myCrust = function () {
    crust.setAttribute("class", "crust crust-gluten-free")

    if (crustState == false) {
        pizza.crustShow(5)
        crustState = true
        pizza.listValue(lista[9],'$0 gluten-free crust')
    } else {
        crust.setAttribute("class", "crust")

        crustState = false;
        if (parseInt(textValue.textContent.split("$")[1]) <= 10) {
            return false

        } else {

            pizza.subValue(5)
            pizza.listValueMais(lista[9],'$5 gluten-free crust')
        }

    }


};
classnameSauce.addEventListener('click', myCrust, false);



