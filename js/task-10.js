const refs = {
  input: document.querySelector('input'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  list: document.querySelector('#boxes'),
}

refs.createBtn.addEventListener('click', () => { createBoxes(refs.input.value)})
refs.destroyBtn.addEventListener('click', destroyBoxes)

function createBoxes(amount) {
  let a = 30
  let markup = []
  for (let i = 0; i < amount; i++) {
  const divEl = document.createElement('div')
    divEl.style.width = `${a}px`
    divEl.style.height = `${a}px`
    divEl.style.backgroundColor = getRandomHexColor()
    a += 10
    markup.push(divEl)
  }
  refs.list.append(...markup)
}

function destroyBoxes() {
  refs.list.innerHTML = ""
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}