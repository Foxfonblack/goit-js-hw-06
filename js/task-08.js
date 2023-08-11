const form = document.querySelector(".login-form")

form.addEventListener("submit", onSubmit)

function onSubmit(evt){
    evt.preventDefault()
    const obj = {}
    const emailInput = evt.currentTarget.elements.email.value
    const passInput = evt.currentTarget.elements.password.value
    const email =  evt.currentTarget.elements.email.getAttribute("name")
console.log(email)
    if (emailInput.length === 0 || passInput.length === 0){
        alert("все поля должны быть заполнены")
    }
console.log(evt.currentTarget.elements.email)
   obj[email] = emailInput
   return obj

}

