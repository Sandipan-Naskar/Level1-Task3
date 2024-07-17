let display = document.getElementById('display');
let currentInput = '';
let previousInput = '';
let operator = '';

function appendValue(value) {
    currentInput += value;
    display.innerText = currentInput;
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    display.innerText = '';
}

function calculateResult() {
    if (currentInput === '' || previousInput === '') return;

    let result;
    let previous = parseFloat(previousInput);
    let current = parseFloat(currentInput);

    switch (operator) {
        case '+':
            result = previous + current;
            break;
        case '-':
            result = previous - current;
            break;
        case '*':
            result = previous * current;
            break;
        case '/':
            result = previous / current;
            break;
        default:
            return;
    }

    display.innerText = result;
    currentInput = result.toString();
    previousInput = '';
    operator = '';
}

function setOperator(op) {
    if (currentInput === '') return;

    if (previousInput !== '') {
        calculateResult();
    }

    operator = op;
    previousInput = currentInput;
    currentInput = '';
}
