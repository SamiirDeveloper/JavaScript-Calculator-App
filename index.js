const display = document.getElementById('display');
let shouldResetDisplay = false;

function appendToDisplay(input) {
    if (shouldResetDisplay) {
        display.value = '';
        shouldResetDisplay = false;
    }
    display.value += input;
}

function clearDisplay() {
    display.value = '';
    shouldResetDisplay = false;
}

function calculate() {
    try {
        display.value = eval(display.value);
        shouldResetDisplay = true;
    } catch (error) {
        display.value = 'Error';
        shouldResetDisplay = true;
    }
}
