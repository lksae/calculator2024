let firstNumber = 0;
let secondNumber = 0;
let operator = "";


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
            add(firstNumber, secondNumber);
        case 'substract':
            substract(firstNumber,secondNumber);
        case 'multiply':
            multiply(firstNumber, secondNumber);
        case 'divide':
            divide(firstNumber, secondNumber);
    }
}

const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        console.log(button.innerHTML);
    })
})