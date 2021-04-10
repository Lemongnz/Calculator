var numa;
var numb;
var operacion;


let resultado = document.getElementById("resultado");
let siete = document.getElementById("siete");
let ocho = document.getElementById("ocho");
let nueve = document.getElementById("nueve");
let division = document.getElementById("division");
let cinco = document.getElementById("cinco");
let seis = document.getElementById("seis");
let cuatro = document.getElementById("cuatro");
let tres = document.getElementById("tres");
let dos = document.getElementById("dos");
let cero = document.getElementById("cero");
let resta = document.getElementById("resta");
let suma = document.getElementById("suma");
let uno = document.getElementById("uno");
let multiplicacion = document.getElementById("multiplicacion");
let igual = document.getElementById("igual");
let reset = document.getElementById("reset");



uno.onclick = function (e) {
    resultado.textContent = resultado.textContent + "1";
}
dos.onclick = function (e) {
    resultado.textContent = resultado.textContent + "2";
}
tres.onclick = function (e) {
    resultado.textContent = resultado.textContent + "3";
}
cuatro.onclick = function (e) {
    resultado.textContent = resultado.textContent + "4";
}
cinco.onclick = function (e) {
    resultado.textContent = resultado.textContent + "5";
}
seis.onclick = function (e) {
    resultado.textContent = resultado.textContent + "6";
}
siete.onclick = function (e) {
    resultado.textContent = resultado.textContent + "7";
}
ocho.onclick = function (e) {
    resultado.textContent = resultado.textContent + "8";
}
nueve.onclick = function (e) {
    resultado.textContent = resultado.textContent + "9";
}
cero.onclick = function (e) {
    resultado.textContent = resultado.textContent + "0";
}
reset.onclick = function (e) {
    resetear();
}


suma.onclick = function (e) {
    numa = resultado.textContent;
    operacion = "+";
    limpiar();
}
division.onclick = function (e) {
    numa = resultado.textContent;
    operacion = "/";
    limpiar();
}
multiplicacion.onclick = function (e) {
    numa = resultado.textContent;
    operacion = "*";
    limpiar();
}
resta.onclick = function (e) {
    numa = resultado.textContent;
    operacion = "-";
    limpiar();
}
igual.onclick = function (e) {
    numb = resultado.textContent;
    resolver();
}


function limpiar() {
    resultado.textContent = "";
}

function resetear() {
    resultado.textContent = "";
    numa = "0";
    numb = "0";
    operacion = "";
}

function resolver() {
    var res = "0";
    switch (operacion) {
        case "+" : 
            res = numa + numb;
            break;
        
        case "-" : 
            res = numa - numb;
            break;
        
        case "/" : 
            res = numa / numb;
            break;
        
        case "*" : 
            res = numa * numb;
            break;
        
    }
    resetear();
    resultado.textContent = res;
}
