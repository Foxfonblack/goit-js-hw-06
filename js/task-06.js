const inputEl = document.getElementById("validation-input")

inputEl.addEventListener("blur", onBlur)

function onBlur(evt){
    const length = evt.currentTarget.value.length
if (length < evt.currentTarget.dataset.length && length !== 0){
    evt.currentTarget.classList.remove('valid')
   evt.currentTarget.classList.add('invalid')
}  else if (length >= evt.currentTarget.dataset.length){
    evt.currentTarget.classList.remove('invalid')
evt.currentTarget.classList.add('valid')}
else if(length === 0) {
    evt.currentTarget.classList.remove("valid");
    evt.currentTarget.classList.remove("invalid");
   
}

}


