// Write your Pizza Builder JavaScript in this file.
var pizza = document.querySelectorAll('#pizza');
var btn = document.querySelectorAll('.btn');
var crustG = document.getElementsByClassName('crust');
var panel = document.querySelectorAll('li');
var total = document.querySelectorAll('strong');
var contaPep = 0;
var contaMus = 0
var contaGreen = 0
var contaSauce = 0
var contaCrust = 0;
var precPep = 0;
var precMus = 0;
var precGreen = 0;
var precSauce = 0;
var precCrust = 0;
var x = 10;
//visible
window.onload = function () {
    pizza.forEach(element => {
        element.style.visibility = 'hidden';
        crustG[0].className = 'crust';
        crustG[0].style.visibility = 'visible';
        total[0].innerText = '$ ' + 10;
    });
    for (var i = 5; i < 10; i++) {
        panel[i].innerText = '$' + 0 + ' ' + panel[i - 5].innerText;
    }
    btn.forEach(element => {
        element.addEventListener('click', function () {
            var x = element.innerText;
            switch (x.toLowerCase()) {
                case 'pepperonni':
                    if (contaPep == 0) {
                        contaPep += 1;
                        precPep = 1;
                        panel[5].innerText = '$' + precPep + ' ' + panel[0].innerText;
                        return addElement(document.querySelectorAll('.pep'));
                    } else {
                        contaPep = 0;
                        precPep = 0;
                        panel[5].innerText = '$' + precPep + ' ' + panel[0].innerText;
                        return removeElement(document.querySelectorAll('.pep'))
                    }
                case 'mushrooms':
                    if (contaMus == 0) {
                        contaMus += 1;
                        precMus = 1;
                        panel[6].innerText = '$' + precMus + ' ' + panel[1].innerText;
                        return addElement(document.querySelectorAll('.mushroom'));
                    } else {
                        contaMus = 0;
                        precMus = 0;
                        panel[6].innerText = '$' + precMus + ' ' + panel[1].innerText;
                        return removeElement(document.querySelectorAll('.mushroom'))
                    }
                case 'green peppers':
                    if (contaGreen == 0) {
                        contaGreen += 1;
                        precGreen = 1;
                        panel[7].innerText = '$' + precGreen + ' ' + panel[2].innerText;
                        return addElement(document.querySelectorAll('.green-pepper'));
                    } else {
                        contaGreen = 0;
                        precGreen = 0;
                        panel[7].innerText = '$' + precGreen + ' ' + panel[2].innerText;
                        return removeElement(document.querySelectorAll('.green-pepper'))
                    }
                case 'white sauce':
                    if (contaSauce == 0) {
                        contaSauce += 1;
                        precSauce = 3;
                        panel[8].innerText = '$' + precSauce + ' ' + panel[3].innerText;
                        return addElement(document.querySelectorAll('.sauce-white'));
                    } else {
                        contaSauce = 0;
                        precSauce = 0
                        panel[8].innerText = '$' + precSauce + ' ' + panel[3].innerText;
                        return removeElement(document.querySelectorAll('.sauce-white'))
                    }
                case 'gluten-free crust':
                    if (contaCrust == 0) {
                        contaCrust += 1;
                        precCrust = 5;
                        x = 10 + precPep + precMus + precGreen + precSauce + precCrust;
                        panel[9].innerText = '$' + precCrust + ' ' + panel[4].innerText;
                        total[0].innerText = '$ ' + x;
                        crustG[0].className = 'crust crust-gluten-free';
                        return
                    } else {
                        contaCrust = 0;
                        precCrust = 0;
                        x = 10 + precPep + precMus + precGreen + precSauce + precCrust;
                        panel[9].innerText = '$' + precCrust + ' ' + panel[4].innerText;
                        total[0].innerText = '$ ' + x;
                        crustG[0].className = 'crust';
                    }

            }
        });
    });

}

function addElement(toAdd) {
    toAdd.forEach(element => {
        element.style.visibility = 'visible';
        x = 10 + precPep + precMus + precGreen + precSauce + precCrust;
        total[0].innerText = '$ ' + x;
    });
}

function removeElement(toRem) {
    toRem.forEach(element => {
        element.style.visibility = 'hidden';
        x = 10 + precPep + precMus + precGreen + precSauce + precCrust;
        total[0].innerText = '$ ' + x;
    });
}