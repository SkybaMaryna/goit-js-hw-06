const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatoes',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector("#ingredients")

const elementList = []
  
  ingredients.forEach(ingredient => {
  const li = document.createElement("li")
  li.textContent = ingredient
  li.classList.add("item")
  elementList.push(li)
 })

  ingredientsEl.append(...elementList);