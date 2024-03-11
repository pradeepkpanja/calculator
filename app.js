let currentInput = '0'; 
let previousInput = '0'; 
let operator = null;     
let result = null;      

function clearCalculator() {
    currentInput = '0';
    previousInput = '0';
    operator = null;
    result = null;
    updateDisplay();
}

function appendInput(number) {
    if (currentInput === '0' && number !== '.') {
        currentInput = number;
    } else {
        currentInput += number;
    }
    updateDisplay();
}

function setOperator(op) {
    if (operator !== null) {
        calculate();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '0';
}

function calculate() {
    let prev = parseFloat(previousInput);
    let curr = parseFloat(currentInput);
    switch (operator) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            result = prev / curr;
            break;
        default:
            result = curr;
    }
    currentInput = result.toString();
    previousInput = '0';
    operator = null;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('textInput').value = currentInput;
}
