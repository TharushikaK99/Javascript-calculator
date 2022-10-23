var operator = "";

function enable() {
    document.getElementById("plus").disabled = false;
    document.getElementById("minus").disabled = false;
    document.getElementById("divide").disabled = false;
    document.getElementById("multiply").disabled = false;
}

function disable() {
    document.getElementById("plus").disabled = true;
    document.getElementById("minus").disabled = true;
    document.getElementById("divide").disabled = true;
    document.getElementById("multiply").disabled = true;
}

function btn0() {
    document.getElementById("inputText").value += "0";
    enable();
}

function btn1() {
    if (document.getElementById("inputText").value == 0) {
        document.getElementById("inputText").value = "1";
    } else {
        document.getElementById("inputText").value += "1";
    }
    enable();
}

function btn2() {
    if (document.getElementById("inputText").value == 0) {
        document.getElementById("inputText").value = "2";
    } else {
        document.getElementById("inputText").value += "2";
    }
    enable();
}

function btn3() {
    if (document.getElementById("inputText").value == 0) {
        document.getElementById("inputText").value = "3";
    } else {
        document.getElementById("inputText").value += "3";
    }
    enable();
}

function btn4() {
    if (document.getElementById("inputText").value == 0) {
        document.getElementById("inputText").value = "4";
    } else {
        document.getElementById("inputText").value += "4";
    }
    enable();
}

function btn5() {
    if (document.getElementById("inputText").value == 0) {
        document.getElementById("inputText").value = "5";
    } else {
        document.getElementById("inputText").value += "5";
    }
    enable();
}

function btn6() {
    if (document.getElementById("inputText").value == 0) {
        document.getElementById("inputText").value = "6";
    } else {
        document.getElementById("inputText").value += "6";
    }
    enable();
}

function btn7() {
    if (document.getElementById("inputText").value == 0) {
        document.getElementById("inputText").value = "7";
    } else {
        document.getElementById("inputText").value += "7";
    }
    enable();
}

function btn8() {
    if (document.getElementById("inputText").value == 0) {
        document.getElementById("inputText").value = "8";
    } else {
        document.getElementById("inputText").value += "8";
    }
    enable();
}

function btn9() {
    if (document.getElementById("inputText").value == 0) {
        document.getElementById("inputText").value = "9";
    } else {
        document.getElementById("inputText").value += "9";
    }
    enable();
}

function btnClear() {
    document.getElementById("inputText").value = "0";
}

function btnPlus() {
    operator = "+";
    document.getElementById("inputText").value += "+";
    disable();
}

function btnMinus() {
    operator = "-";
    document.getElementById("inputText").value += "-";
    disable();
}

function btnMultiply() {
    operator = "x";
    document.getElementById("inputText").value += "x";
    disable();
}

function btnDivide() {
    operator = "/";
    document.getElementById("inputText").value += "/";
    disable();
}

function btnEqual() {
    var array = document.getElementById("inputText").value.split(operator);
    var numbers = [];

    for (let i = 0; i < array.length; i++) {
        numbers[i] = parseInt(array[i]);
    }

    var answer = numbers[0];

    switch (operator) {
        case "+":
            for (let i = 1; i < numbers.length; i++) {
                answer += numbers[i];
            }
            break;

        case "-":
            for (let i = 1; i < numbers.length; i++) {
                answer -= numbers[i];
            }
            break;

        case "x":
            for (let i = 1; i < numbers.length; i++) {
                answer *= numbers[i];
            }
            break;

        case "/":
            for (let i = 1; i < numbers.length; i++) {
                answer /= numbers[i];
            }
            break;

        default:
            break;
    }

    document.getElementById("inputText").value = answer;
}