const inputEl = document.getElementById("name-input")
const textEl = document.getElementById("name-output")

inputEl.addEventListener('input', onInput)

function onInput(evt){
    const content = evt.currentTarget.value
    if(content.length === 0){
        textEl.textContent = 'Anonymous'
    } else { textEl.textContent = content;}
   
}
