function backspace() {
    var textbox = document.getElementById('displaybox');
    if (textbox.value) {
        textbox.value = textbox.value.slice(0, -1);
    }
}

var decimal = 4;
var x = [];
var mathHistory = 0;

function setDecimal() {
    decimal = document.getElementById('decimalbox').value;
}

function solve() {
    x.unshift(document.getElementById('displaybox').value);
    console.log(x)
    document.getElementById('displaybox').value = parseFloat(eval(document.getElementById('displaybox').value).toFixed(decimal));
    mathHistory = 0;
}

function back() {
    if (x.length > mathHistory) {
        document.getElementById('displaybox').value = x[mathHistory];
        mathHistory += 1;
    }
}