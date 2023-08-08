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
 const el =  arr.map(item => {
   const listItem = document.createElement('li');
   listItem.textContent = item;
    listItem.classList.add('item')

return fragment 
  });
  return el;
  
}
const markUp = createMarkUp(ingredients)
console.log(markUp)



