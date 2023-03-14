const refs = {
    input: document.querySelector('input'),
}

refs.input.addEventListener('blur', onInputControl)

function onInputControl(event) {
    if (event.currentTarget.value.length < refs.input.dataset.length) {
        refs.input.classList.add('valid')
        refs.input.classList.remove('invalid')
        return
    }
    refs.input.classList.remove('valid')
    refs.input.classList.add('invalid')
} 

