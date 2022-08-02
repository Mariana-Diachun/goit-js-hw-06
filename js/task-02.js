const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientContainer = document.querySelector('#ingredients');
console.log(ingredientContainer);


const itemElements = ingredients.map(index => {
  const itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.textContent = index;
  return itemEl;
})
console.log(itemElements);

ingredientContainer.append(...itemElements);
