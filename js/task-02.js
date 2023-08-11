const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listEl = document.querySelector("#ingredients")

function createMarkUp(arr){
const fragment = document.createDocumentFragment()
arr.forEach(item => {
  const liEl = document.createElement('li')
  liEl.textContent = item
  liEl.classList.add("item")
  fragment.append(liEl)
});
  return fragment
}

const markup = createMarkUp(ingredients)
console.log(markup);

listEl.append(markup)


