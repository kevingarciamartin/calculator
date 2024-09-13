let num1 = null;
let num2 = null;
let operator = null;

const numButtons = document.querySelectorAll(".num-btn");

numButtons.forEach((button) => {
    button.addEventListener("click", () => {
        populateDisplay(button.value);
    });
});

function populateDisplay(value) {
    const display = document.querySelector(".currentDisplay");
    
    if (operator === null) num1 = num1 === null ? value : num1 += value;
    else num2 = num2 === null ? value : num2+= value;

    display.textContent = `${num1}`;
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(operator, num1, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        default:
            console.log("Error: Invalid operator.");
            break;
    }
}