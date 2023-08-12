function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const backgroundText = document.querySelector(".color")
const button = document.querySelector(".change-color")
button.addEventListener("click", onClick)

function onClick(evt){
  const color = getRandomHexColor()
  document.body.style.backgroundColor = color
  backgroundText.textContent = color
}


