const input = document.getElementById("font-size-control")
const text = document.getElementById("text")

input.addEventListener("input", onInputChange)

function onInputChange(evt){
const inputValue = evt.currentTarget.value
text.style.fontSize = `${inputValue}px`
}
