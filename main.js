// Micah Fischer 3/27/19

// Function deletes one character from the end of the string.
function backspace() {
    var textbox = document.getElementById('displaybox');
    if (textbox.value) {
        textbox.value = textbox.value.slice(0, -1);
    }
}

// Set the default decimal length to four.
var decimal = 4;
// Empty array for calculator history.
var x = [];
var mathHistory = 0;

// Set the decimal length to the value of the input box.
function setDecimal() {
    decimal = document.getElementById('decimalbox').value;
}

// Evaluate the input and save the formula to the history string.
function solve() {
    x.unshift(document.getElementById('displaybox').value);
    console.log(x)
    document.getElementById('displaybox').value = parseFloat(eval(document.getElementById('displaybox').value).toFixed(decimal));
    mathHistory = 0;
}

// Access the previous equation in the history string.
function back() {
    if (x.length > mathHistory) {
        document.getElementById('displaybox').value = x[mathHistory];
        mathHistory += 1;
    }
}
