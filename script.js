var operator = "";

function enable() {
    document.getElementById("plus").disabled = false;
    document.getElementById("minus").disabled = false;
    document.getElementById("divide").disabled = false;
    document.getElementById("multiply").disabled = false;
}

function btn0() {
    document.getElementById("inputText").value += "0";
    enable();
}
function btn1() {
    document.getElementById("inputText").value += "1";
    enable();
}
function btn2() {
    document.getElementById("inputText").value += "2";
    enable();
}
function btn3() {
    document.getElementById("inputText").value += "3";
    enable();
}
function btn4() {
    document.getElementById("inputText").value += "4";
    enable();
}
function btn5() {
    document.getElementById("inputText").value += "5";
    enable();
}
function btn6() {
    document.getElementById("inputText").value += "6";
    enable();
}
function btn7() {
    document.getElementById("inputText").value += "7";
    enable();
}
function btn8() {
    document.getElementById("inputText").value += "8";
    enable();
}
function btn9() {
    document.getElementById("inputText").value += "9";
    enable();
}

function btnClear() {
    document.getElementById("inputText").value = "";
}

function btnPlus() {
    operator = "+";
    document.getElementById("inputText").value += "+";
    document.getElementById("plus").disabled = true;
}
function btnMinus() {
    operator = "-";
    document.getElementById("inputText").value += "-";
    document.getElementById("minus").disabled = true;
}
function btnMultiply() {
    operator = "x";
    document.getElementById("inputText").value += "x";
    document.getElementById("multiply").disabled = true;
}

function btnDivide() {
    operator = "/";
    document.getElementById("inputText").value += "/";
    document.getElementById("divide").disabled = true;
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