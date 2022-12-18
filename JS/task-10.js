// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// const buttonCreate = document.querySelector("[data-create]");
// const buttonDestroy = document.querySelector("[data-destroy]");
// const inputEl = document.querySelector("input");
// const boxesEl = document.querySelector("#boxes");

// function repeat(n, action) {
// for (let i = 0; i < n; i += 1) {
//   action(i);
//   }
// }

// function functionRepeat(amount) {
//   const div1 = document.createElement("div");
//   div1.classList.add("box");
//   div1.style.width = `${30+10*it.next().value}px`;
//   div1.style.height = div1.style.width;
//   div1.style.backgroundColor = getRandomHexColor();
//   boxesEl.append(div1);

// }
// const testRepeat = () => repeat(inputEl.value, functionRepeat)

// buttonCreate.addEventListener("click", testRepeat);

// function destroyBoxes() {
//  boxesEl.remove()
// }

// buttonDestroy.addEventListener("click",destroyBoxes)


// let index;
// function* idMaker(){
//   index = 0;
//   while(true)
//   yield index ++;
// }
// let it = idMaker();

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonCreate = document.querySelector("[data-create]");
const buttonDestroy = document.querySelector("[data-destroy]");
const inputEl = document.querySelector("input");
const boxesEl = document.querySelector("#boxes");

let divBoxes = [];

function createBoxes() {
  
  for (let i = 0; i < inputEl.value; i += 1) { 
    const div1 = document.createElement("div");
    div1.classList.add("box");
    div1.style.width = `${30+10*i}px`;
    div1.style.height = div1.style.width;
    div1.style.backgroundColor = getRandomHexColor();
    divBoxes.push(div1);
  }
  boxesEl.append(...divBoxes)
}

buttonCreate.addEventListener("click", createBoxes);

function destroyBoxes() {
 boxesEl.remove()
}

buttonDestroy.addEventListener("click",destroyBoxes)

// Напиши скрипт створення і очищення колекції елементів.
//  Користувач вводить кількість елементів в input і натискає кнопку
// Створити, після чого рендериться колекція.Натисненням на кнопку Очистити,
//   колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один параметр - число.
//  Функція створює стільки < div >, скільки вказано в amount і додає
//   їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від 
// попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. 
// Використовуй готову функцію getRandomHexColor для отримання кольору.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у 
// такий спосіб видаляючи всі створені елементи.