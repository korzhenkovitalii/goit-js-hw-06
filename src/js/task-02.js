const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsList = document.querySelector('#ingredients');

const items = ingredients.map(element => {
  const itemIngredient = document.createElement('li');
  itemIngredient.classList.add('item');
  itemIngredient.textContent = element;

  return itemIngredient;
});

ingredientsList.append(...items);
console.log(ingredientsList);
