const input = document.querySelector(".input")
const button = document.querySelectorAll(".button")
const deleteButton = document.querySelector("#delete")
const resetButton = document.querySelector("#reset")
const equalButton = document.querySelector(".red")

let currentInput = "";

function updatedInput(){
    input.value = currentInput
}

button.forEach((button) => {
    button.addEventListener("click", () => {
        currentInput += button.textContent
        updatedInput()
    });
})

deleteButton.addEventListener("click", () => {
    currentInput = currentInput.slice(0, -1)
    updatedInput()
})

resetButton.addEventListener("click", () => {
    currentInput = ""
    updatedInput()
})

equalButton.addEventListener("click", () => {
    try {
        const result = eval(currentInput)
        currentInput = result.toString()
        updatedInput()
    } catch (error) {
        alert("invalid expression")
    }
})

