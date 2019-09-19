function toggleElement(targetClassName, toggleClass) {
  let elements = document.querySelectorAll(targetClassName);
  elements.forEach((element) => {
    element.classList.toggle(toggleClass);
  });
}

let pepperButton = document.querySelector('.btn-green-peppers')
pepperButton.onclick = () => toggleElement(".green-pepper", 'hidden');

let pepperonniButton = document.querySelector('.btn-pepperonni')
pepperonniButton.onclick = () => toggleElement(".pep", 'hidden');

let mushroomButton = document.querySelector('.btn-mushrooms')
mushroomButton.onclick = () => toggleElement(".mushroom", 'hidden');

let crustButton = document.querySelector('.btn-crust')
crustButton.onclick = () => toggleElement('.crust', 'crust-gluten-free');