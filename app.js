let num1 = null;
let num2 = null;
let operator = null;

const numberButtons = document.querySelectorAll(".num-btn");
const operatorButtons = document.querySelectorAll(".operator-btn");

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        populateDisplay(button.value);
    });
});

operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        operator = button.value;
        console.log(button.value);
    });
});

function populateDisplay(value) {
    const display = document.querySelector(".currentDisplay");

    let displayValue;
    
    if (operator === null) {
        num1 = num1 === null ? value : num1 += value;
        displayValue = num1;
    } else {
        num2 = num2 === null ? value : num2+= value;
        displayValue = num2;
    } 

    display.textContent = `${displayValue}`;
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