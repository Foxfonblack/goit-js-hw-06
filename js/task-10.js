function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
 const input = document.getElementById("controls").firstElementChild
 const btnCreate = document.querySelector("[data-create]")
 const btnDestroy = document.querySelector("[data-destroy]")

 const boxes = document.getElementById("boxes")

 btnCreate.addEventListener("click", createBoxes) 
 btnDestroy.addEventListener("click", destroyBoxes)
 
 let counter = 0
 const height = 30
 const width = 30

 function createBox(){
  const box = document.createElement('div')
  box.style.width = width + counter + 'px'
  box.style.height = height + counter + 'px'
  box.style.backgroundColor = getRandomHexColor()
  counter += 10
  return box 
 }

function createBoxes(amount){
  amount = input.value;

  const fragment = document.createDocumentFragment()
  for (let i=1; i<=amount; i+=1){
    fragment.append(createBox())
  }
  return boxes.append(fragment)
}

function destroyBoxes(){
  boxes.innerHTML = ""
  counter = 0
  input.value = ""
}
