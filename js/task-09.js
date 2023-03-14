const refs = {
  button: document.querySelector('.change-color'),
  text: document.querySelector('.color'),
  body: document.querySelector('body')
}

refs.button.addEventListener('click', onBodyColorChange)

function onBodyColorChange() {
  const color = function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  }

  refs.body.style.backgroundColor = color()
  refs.text.textContent = color()
}




 