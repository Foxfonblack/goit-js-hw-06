const form = document.querySelector(".login-form")

form.addEventListener("submit", onSubmit)

function onSubmit(evt){
    evt.preventDefault()
    const emailInput = evt.currentTarget.elements.email.value
    const passInput = evt.currentTarget.elements.password.value
    const email =  evt.currentTarget.elements.email.getAttribute("name")
    const password =  evt.currentTarget.elements.password.getAttribute("name")
    if (emailInput.length === 0 || passInput.length === 0){
        alert("все поля должны быть заполнены")
    }
const obj = {[email] : emailInput, [password]: passInput}
console.log(obj)
evt.currentTarget.reset()

 

}

