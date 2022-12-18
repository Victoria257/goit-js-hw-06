const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент < li >.Обов'язково використовуй метод document.
// createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.


let ingredientsEl = document.querySelector('#ingredients');
let setsEl = [];

for (let i = 0; i < ingredients.length; i += 1) {
  let setEl = document.createElement("li");
  setEl.textContent = ingredients[i];
  setEl.classList.add("item");
  setsEl.push(setEl)
}
  console.log(setsEl);
ingredientsEl.append(...setsEl)
console.log(ingredientsEl);