const refs = {
    decrementBtn: document.querySelector('[data-action = "decrement"]'),
    incrementBtn: document.querySelector('[data-action = "increment"]'),
    valueEl: document.querySelector('#value'),
};

let counterValue = 0

refs.decrementBtn.addEventListener('click', onDecrement)
refs.incrementBtn.addEventListener('click', onIncrement)

function onDecrement() {
    counterValue -= 1
    refs.valueEl.textContent = counterValue
}

function onIncrement() {
    counterValue += 1
    refs.valueEl.textContent = counterValue
}