let currentOperand = "";
let previousOperand = "";
let operation = null;

const display = document.getElementById('display');

function clearDisplay() {
    currentOperand = "";
    previousOperand = "";
    operation = null;
    updateDisplay();
}

function appendNumber(number) {
    currentOperand += number.toString();
    updateDisplay();
}

function chooseOperation(op) {
    if (currentOperand === "") return;
    if (previousOperand !== "") {
        calculate();
    }
    operation = op;
    previousOperand = currentOperand;
    currentOperand = "";
}

function calculate() {
    if (currentOperand === "" || previousOperand === "") return;
    
    let result;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    
    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }
    
    currentOperand = result.toString();
    operation = null;
    previousOperand = "";
    updateDisplay();
}

function updateDisplay() {
    display.innerText = currentOperand;
}

clearDisplay();
