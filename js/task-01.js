const categoriesEl = document.querySelector('#categories');
const categoriesItem = categoriesEl.children.length;
console.log(`Number of categories: ${categoriesItem}`);

const itemsElem = document.querySelectorAll('.item');

itemsElem.forEach(element => {
  console.log('Category:', element.firstElementChild.textContent);
  console.log('Elements:', element.lastElementChild.children.length);
});
