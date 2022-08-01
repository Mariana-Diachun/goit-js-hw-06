const categoryEl = document.querySelector('#categories');

const listEl = categoryEl.children;
console.log('Number of categories:', listEl.length);


const titleEl = document.querySelectorAll('h2');



const allListEl = document.querySelectorAll('ul')

const firstItemEl = allListEl[1].children;
const secondItemEl = allListEl[2].children;
const thirdItemEl = allListEl[3].children;


console.log('Category:', titleEl[0].textContent);
console.log('Elements:',firstItemEl.length);

console.log('Category:', titleEl[1].textContent);
console.log('Elements:',secondItemEl.length);

console.log('Category:', titleEl[2].textContent);
console.log('Elements:',thirdItemEl.length);
