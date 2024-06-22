let firstNumber = 0;
let secondNumber = 0;
let operator = "";
let displayValue = "";


function add (a,b) {
    return a + b;
}

function substract (a,b) {
    return a - b;
}

function multiply (a,b) {
    return a * b;
}

function divide (a,b) {
    return a / b;
}

function operate (operator, firstNumber, secondNumber) {
    switch (operator) {
        case 'add':
            return add(firstNumber, secondNumber);
            break;
        case 'substract':
            return substract(firstNumber,secondNumber);
            break;
        case 'multiply':
            return multiply(firstNumber, secondNumber);
            break;
        case 'divide':
            return divide(firstNumber, secondNumber);
            break;
    }
}

const display = document.querySelector(".display");

const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        displayValue += button.innerHTML;
        display.innerHTML = displayValue;

    })
})

const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        switch (button.getAttribute("id")) {
            case "add":
                operator = "add";
                setFirstNumberAndDisplay();
                break;
            case "substract":
                setFirstNumberAndDisplay();
                operator = "substract";
                break;
            case "multiply":
                setFirstNumberAndDisplay();
                operator = "multiply";
                break;
            case "divide":
                operator = "divide";
                etFirstNumberAndDisplay();
                
                
                break;
            case "equal":
                calculateAndDisplay()
                break;
        }
    })
})

function setFirstNumberAndDisplay() {
    firstNumber = parseFloat(displayValue);
    display.innerHTML = 0;
    displayValue = "";
}

function calculateAndDisplay(){
    secondNumber = parseFloat(display.innerHTML);
    displayValue = operate(operator, firstNumber,secondNumber);
    display.innerHTML = displayValue;
    firstNumber = 0;
}