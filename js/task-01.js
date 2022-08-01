const categoryEl = document.querySelector('#categories');

const listEl = categoryEl.children;
console.log('Number of categories:', listEl.length);


const titleEl = document.querySelectorAll('h2');
console.log('Category:', titleEl[0].textContent);

console.log('Category:', titleEl[1].textContent);

console.log('Category:', titleEl[2].textContent);


const itemEl = document.querySelectorAll('li')
console.log(itemEl)