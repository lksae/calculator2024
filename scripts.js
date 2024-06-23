let firstNumber = 0;
let secondNumber = 0;
let operator = "";
let displayValue = "";
let calculationInProgress = false;


function add (a,b) {
    return (a + b);
}

function substract (a,b) {
    return (a - b);
}

function multiply (a,b) {
    return (a * b);
}

function divide (a,b) {
    return (a / b);
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
        if (calculationInProgress) {
            displayValue = button.getAttribute("id");
            display.innerHTML = displayValue;
            calculationInProgress = false;
        } else {
            if(parseFloat(display.innerHTML) == 0) {
                displayValue = button.getAttribute("id");
                display.innerHTML = displayValue;
            } else {
                displayValue += button.getAttribute("id");
                display.innerHTML = displayValue;
            }
            
        }
        

    })
})

const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach(button => {
    button.addEventListener("click", () => {

        if (button.getAttribute("id") == "equal") {
            if(parseFloat(display.innerHTML) == 0) {
                clear();
                display.innerHTML = "Nope!"
            } else {
                calculateAndDisplay(); 
                calculationInProgress = true;
                firstNumber = 0;
            }
            
        } else {
            operator = button.getAttribute("id");
            if (firstNumber == 0) {
                setFirstNumber();
            } else {
                calculateAndDisplay();
                firstNumber = displayValue;
                calculationInProgress = true;
            }
        }
        dotButton.disabled = false;
    })
})

function setFirstNumber() {
    firstNumber = parseFloat(displayValue);
    calculationInProgress = true;
}

function calculateAndDisplay(){
    secondNumber = parseFloat(display.innerHTML);
    displayValue = operate(operator, firstNumber,secondNumber);
    display.innerHTML = displayValue.toFixed(2);
    
}

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => {
    clear();
})

function clear(){
    firstNumber = 0;
    secondNumber = 0;
    operator = "";
    displayValue = 0;
    display.innerHTML = displayValue;
    calculationInProgress = false;
    dotButton.disabled = false;
}

const dotButton = document.querySelector(".dot");
dotButton.addEventListener("click", () => {
    dotButton.disabled = true;
})
