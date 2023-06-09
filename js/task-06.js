const refs = {
    input: document.querySelector('input'),
}

refs.input.addEventListener('blur', onInputControl)

function onInputControl(event) {
    if (event.currentTarget.value.length === Number(refs.input.dataset.length)) {
        refs.input.classList.add('valid')
        refs.input.classList.remove('invalid')
        return
    }
    refs.input.classList.add('invalid')
} 

