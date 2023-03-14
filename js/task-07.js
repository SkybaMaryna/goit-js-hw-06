const refs = {
    input: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
}

refs.input.addEventListener('input', onTextSizeChange)

function onTextSizeChange(event) {
    refs.text.style.fontSize = `${event.currentTarget.value}px`
    console.log(`${event.currentTarget.value}px`);
}