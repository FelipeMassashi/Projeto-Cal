function reset(){
    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
}

function cal(n1, n2){
    n1 = Number(document.getElementById("n1").value);
    n2 = Number(document.getElementById("n2").value);
    
    var selector = document.getElementById("selector").value;
    var res;

    switch (selector) {
        case "+":
            if ( !isNaN (n1) && !isNaN (n2) ) {
                res = n1 + n2;
                escreve(n1, n2, res, selector);
            } else {
                error();
            }
            break;
        case "-":
            if ( !isNaN (n1) && !isNaN (n2) ) {
                res = n1 - n2;
                escreve(n1, n2, res, selector);
            } else {
                error();
            }
            break;
        case "*":
            if ( !isNaN (n1) && !isNaN (n2) ) {
                res = n1 * n2;
                escreve(n1, n2, res, selector);
            } else {
                error();
            }
            break;
        case "/":
            if ( !isNaN (n1) && !isNaN (n2) ) {
                res = n1 / n2;
                escreve(n1, n2, res.toFixed(2), selector);
            } else {
                error();
            }
            break;
    }
}

function escreve (n1, n2, res, selector) {
    document.getElementById("resultado").innerHTML = n1 + " " + selector + " " + n2 + " = " + res;
}

function error() {
    document.getElementById("resultado").innerText = "Digite apenas NÚMEROS ";
}



