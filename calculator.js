//get values from index.html
const display = document.querySelector('.display__input');
const result = document.querySelector('.display__result');
const clearBtn = document.querySelector('.btn_clear');
const deleteBtn = document.querySelector('.btn_delete');
const divideBtn = document.querySelector('.btn_divide');
const multiplyBtn = document.querySelector('.btn_multiply');
const subtractBtn = document.querySelector('.btn_minus');
const addBtn = document.querySelector('.btn_plus');
const equalBtn = document.querySelector('.btn_equal');
const percentBtn = document.querySelector('.btn_percent');
const numberBtns = document.querySelectorAll('.btn_number');


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
})

// Add event listener to delete button
deleteBtn.addEventListener('click', () => {
    const currentValue = display.textContent;
    if (currentValue.length === 0) {
        result.textContent = '';
    } else {
    display.textContent = currentValue.slice(0, -1);
    }
});

//Add event listener for add button
addBtn.addEventListener('click', () => {
    display.textContent += addBtn.textContent;
})

//Add event listener for subtract button
subtractBtn.addEventListener('click', () => {
    display.textContent += subtractBtn.textContent;
})

//Add event listener for divide button
divideBtn.addEventListener('click', () => {
    display.textContent += divideBtn.textContent;
})

//Add event listener for multiply button
multiplyBtn.addEventListener('click', () => {
    display.textContent += multiplyBtn.textContent;
})

//Add event listener for percent button
percentBtn.addEventListener('click', () => {
    const currentValue = parseFloat(display.textContent);
    display.textContent = (currentValue / 100).toString();
    if (currentValue.length >= 8) {
        currentValue = currentValue.toFixed(5);
        display.textContent = currentValue;
    }
    //set display length
    setDisplayLength();
});


//Add event listener for equal button
equalBtn.addEventListener('click', () => {
    //get current value
    let currentValue = display.textContent;
        // if (display.textContent === '0') {
        //     resetDisplay();
        // } */
    currentValue = (display.textContent === '0') ? resetDisplay() : display.textContent;

    //evaluate calculation
    if (currentValue.includes('+') || currentValue.includes('-') || currentValue.includes('/')) {
        result.textContent = eval(currentValue);
    }
    else if (currentValue.includes(multiplyBtn.textContent)) {
        console.log(currentValue);
        let newValue = currentValue.replace(multiplyBtn.textContent, '*')
        result.textContent = eval(newValue);
    }
    else {
        result.textContent = Number(currentValue);
    }
    //reset display to result
    resetDisplayToResult();
    //set display length
    setDisplayLength();
})


// Reset the calculator
function resetCalculator() {
    display.textContent = '0';
    result.textContent = '';
}

//Function to update display
function resetDisplay() {
    display.textContent = '';
    result.textContent = ''
}

//Function to reset display to result value
function resetDisplayToResult() {
    display.textContent = result.textContent;
}

//Function to set displayed value length to 10
function setDisplayLength() {
    if (display.textContent.length >= 10) {
        display.textContent = display.textContent.slice(0, 10);
    }
}