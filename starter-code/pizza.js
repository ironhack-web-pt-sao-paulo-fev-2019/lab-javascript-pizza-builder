var Pizza = function (ingrOne, ingreTwo, ingreThree, ingreFour, ingreFive) {




    this.pepe = ingrOne;
    this.green = ingreTwo;
    this.mushroom = ingreThree;
    this.cheese = ingreFour;
    this.sauce = ingreFive;
    this.ingr = [];
    this.status = [];
    this.valorPizza = 0;

    this.items = function () {

        this.ingr.push(this.pepe,
            this.green, this.mushroom,
            this.cheese, this.sauce)
    }
};


Pizza.prototype.clear = function () {

    this.ingr.forEach(element => {

        element.forEach(item => {

            item.style.display = "none"

        })

    });

}

Pizza.prototype.clearPizzaMain = function(ingred){


    ingred.forEach(element => {

        element.style.display = "none"

    });

}


Pizza.prototype.clearPizza = function () {

    this.clear(this.items())
     

}

Pizza.prototype.pepeShow = function (value) {



     this.setValue(value);

    this.pizzaShow(this.pepe,'pepe')

}


Pizza.prototype.greenShow = function (value) {
    this.setValue(value);
    this.pizzaShow(this.green,'green')

}


Pizza.prototype.mushroomShow = function (value) {
    this.setValue(value);
    this.pizzaShow(this.mushroom,'mushroom')

}


Pizza.prototype.cheeseShow = function (value) {

    this.setValue(value);
    this.pizzaShow(this.cheese,'cheese')
}


Pizza.prototype.sauceShow = function (value) {
    this.setValue(value);

    this.pizzaShow(this.sauce,'sauce')
}



Pizza.prototype.crustShow = function (value) {
    this.setValue(value);
    
}


Pizza.prototype.pizzaShow = function (pizza,text) {

    this.status.push(text,true);
    
    pizza.forEach(element => {
        element.style.display = "block"
    })


}
Pizza.prototype.setValue = function(value){

    var split = document.querySelectorAll("strong")[0].textContent.split("$")
    var splitTrans = parseInt(split[1])
    var result = this.valorPizza = splitTrans + parseInt(value)
    
    document.querySelectorAll("strong")[0].innerText ="$"+result;

}

Pizza.prototype.subValue = function(value){

    var split = document.querySelectorAll("strong")[0].textContent.split("$")
    var splitTrans = parseInt(split[1])
    var result = this.valorPizza = splitTrans - parseInt(value)
    
    document.querySelectorAll("strong")[0].innerText ="$"+result;

}

Pizza.prototype.listValue = function(position,value){

   position.innerText =value


}



Pizza.prototype.listValueMais = function(position,value){

    position.innerText =value
 
 
 }