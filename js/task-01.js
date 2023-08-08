const listEl = document.querySelector("#categories")
console.log(`Number of categories: ${listEl.children.length}`);


const categoryEl = listEl.querySelectorAll(".item")

categoryEl.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`)
    console.log(`Elements: ${item.lastElementChild.children.length}`);
})