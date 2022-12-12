const listEl =  document.querySelector('#categories')
const setsArrEl = listEl.children;
console.log(`Number of categories:${setsArrEl.length}`);
for (let i = 0; i < setsArrEl.length; i += 1) {
    const titleEl = setsArrEl[i].firstElementChild;
    console.log(`Category:${titleEl.textContent}`)
    const categoryListEl = setsArrEl[i].lastElementChild;
    const elementsEl = categoryListEl.children;
       console.log(`Elements:${elementsEl.length}`)
}