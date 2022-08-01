const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const firstItemEl = document.createElement("li");
firstItemEl.textContent = ingredients[0]
firstItemEl.classList.add("item")


const secondItemEl = document.createElement("li");
secondItemEl.textContent = ingredients[1]
secondItemEl.classList.add("item")

const thirdItemEl = document.createElement("li");
thirdItemEl.textContent = ingredients[2]
thirdItemEl.classList.add("item")

const fouthItemEl = document.createElement("li");
fouthItemEl.textContent = ingredients[3]
fouthItemEl.classList.add("item")

const fifthItemEl = document.createElement("li");
fifthItemEl.textContent = ingredients[4]
fifthItemEl.classList.add("item")

const sixthItemEl = document.createElement("li");
sixthItemEl.textContent = ingredients[5]
sixthItemEl.classList.add("item")


const listEl = document.querySelector("#ingredients");
listEl.append(firstItemEl, secondItemEl, thirdItemEl, fouthItemEl, fifthItemEl, sixthItemEl);
console.log(listEl)