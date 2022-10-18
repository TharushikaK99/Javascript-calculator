var operator = "";

function btn0() {
    document.getElementById("inputText").value += "0";
}
function btn1() {
    document.getElementById("inputText").value += "1";
}
function btn2() {
    document.getElementById("inputText").value += "2";
}
function btn3() {
    document.getElementById("inputText").value += "3";
}
function btn4() {
    document.getElementById("inputText").value += "4";
}
function btn5() {
    document.getElementById("inputText").value += "5";
}
function btn6() {
    document.getElementById("inputText").value += "6";
}
function btn7() {
    document.getElementById("inputText").value += "7";
}
function btn8() {
    document.getElementById("inputText").value += "8";
}
function btn9() {
    document.getElementById("inputText").value += "9";
}

function btnClear() {
    document.getElementById("inputText").value = "";
}

function btnPlus() {
    operator = "+";
    document.getElementById("inputText").value += "+";
}
function btnMinus() {
    operator = "-";
    document.getElementById("inputText").value += "-";
}
function btnMultiply() {
    operator = "x";
    document.getElementById("inputText").value += "x";
}

function btnDivide() {
    operator = "/";
    document.getElementById("inputText").value += "/";
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