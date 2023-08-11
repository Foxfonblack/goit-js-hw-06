// const decrementBtn = document.querySelector('[data-action=decrement]')
const decrementBtn = document.querySelector("#counter").firstElementChild
const increment = document.querySelector("#counter").lastElementChild
const count = document. querySelector('#value')
console.log(count);

decrementBtn.addEventListener("click", onDicrementClick)
increment.addEventListener("click", onIncrementClick)
let counter = 0

function onDicrementClick(){
   
  counter-=1
  count.textContent = counter  
}
function onIncrementClick(){
    counter+=1
    count.textContent = counter  
}


