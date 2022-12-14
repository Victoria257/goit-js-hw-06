const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },


];

// Напиши скрипт для створення галереї зображень на підставі масиву даних. 
// HTML містить список ul.gallery.

// <ul class="gallery"></ul>

//   Використовуй масив об'єктів images для створення елементів <img>,
//  вкладених в < li >.Для створення розмітки використовуй шаблонні рядки
//   і метод insertAdjacentHTML().

// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами або грідами через CSS
// класи.
// const listEl = document.querySelector(".gallery")

// for (let i = 0; i < images.length; i += 1) {
//   const imgArrEl = images[i];
//   const setEl = document.createElement("li");
//   setEl.classList.add("gallery__set")
//   const imgEl = document.createElement("img");
//   imgEl.classList.add("gallery__image");
//   imgEl.src = imgArrEl.url;
//   imgEl.alt = imgArrEl.alt;
//   setEl.appendChild(imgEl)
//   console.log(setEl)
//   listEl.append(setEl)
// }

const listEl = document.querySelector(".gallery")
const setsEl = images.map((setEl) => `<li class="gallery__set"><img class="gallery__image" src="${setEl.url}" alt="${setEl.alt}"></li>`).join("");
listEl.insertAdjacentHTML("afterbegin", setsEl);

