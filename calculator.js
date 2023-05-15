//get values from index.html
const display = document.querySelector('.display__input');
const result = document.querySelector('.display__result');
const clearBtn = document.getElementsByClassName('btn_clear');
const deleteBtn = document.getElementsByClassName('btn_delete');
const divideBtn = document.getElementsByClassName('btn_divide');
const subtractBtn = document.getElementsByClassName('btn_minus');
const addBtn = document.getElementsByClassName('btn_plus');
const equalBtn = document.getElementsByClassName('btn_equal');
const percentBtn = document.getElementsByClassName('btn_percent');
const numberBtns = document.querySelectorAll('.btn_number');


let shouldResetDisplay = false;

// Add event listeners to number buttons
numberBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (display.textContent === '0' ) {
            resetDisplay();
        }
        display.textContent += btn.textContent;
    });
})

// Add event listener to clear button
clearBtn.addEventListener('click', () => {
    resetCalculator();
    updateDisplay();
})

// Add event listener to delete button
deleteBtn.addEventListener('click', () => {
    display.textContent = display.textContent.slice(0, -1);
});

// Reset the calculator
function resetCalculator() {
    shouldResetDisplay = false;
}

//Function to update display
function resetDisplay() {
    display.textContent = '';
    result.textContent = '0'
}

//Function to update display
function updateDisplay() {
    display.textContent = '0';
    result.textContent = '';
}