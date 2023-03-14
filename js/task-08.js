const refs = {
    form: document.querySelector('.login-form')
}

refs.form.addEventListener('submit', onDataCheck)

function onDataCheck(event) {
    event.preventDefault();

    const emailName = event.target.elements.email.name
    const passwordName = event.target.elements.password.name
    const emailValue = event.target.elements.email.value
    const passwordValue = event.target.elements.password.value

    if (emailValue === "" || passwordValue === "") {
        alert("Усі поля мають бути заповнені. Будь-ласка надайте повні дані.")
        return
    }
    
    let dataInput = {
        [emailName]: emailValue,
        [passwordName]: passwordValue
   }

    console.log(dataInput);
   
    refs.form.reset()
}