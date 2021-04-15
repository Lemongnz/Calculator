var numa;
var numb;
var operacion;

const resultado = document.getElementById("resultado");
const igual = document.getElementById("igual");
const reset = document.getElementById("reset"); // getElementById trae un HTML OBJECT

// getElementsByClassName trae un array de HTML OBJECT apartir de una o mas clases
const calculatorButtonsNumbers = document.getElementsByClassName("calculator-button-numbers");
const calculatorButtonsOperations = document.getElementsByClassName("calculator-button-operations");

/**
 * https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener
 * 
 * addEventListener: asocia una función en un evento especifico a un HTML OBJECT
 * 1) evento
 * 2) función que pasa el evento
 */
for (let index = 0; index < calculatorButtonsNumbers.length; index++) {
    const calculatorButtonNumber = calculatorButtonsNumbers[index];
    calculatorButtonNumber.addEventListener('click', seleccionarValor);
    calculatorButtonNumber.addEventListener('click', imprimir);
}

for (let index = 0; index < calculatorButtonsOperations.length; index++) {
    const calculatorButtonOperation = calculatorButtonsOperations[index];
    calculatorButtonOperation.addEventListener('click', seleccionarValorOperations);
    calculatorButtonOperation.addEventListener('click', imprimir);
}

igual.addEventListener('click', igualFunction);
reset.addEventListener('click', resetear);

function imprimir(evento) {
    console.log('Apretaste el boton: ' + evento.target.value);
}

function seleccionarValor(evento) {
    resultado.textContent = resultado.textContent + evento.target.value;
}

function seleccionarValorOperations(evento) {
    numa = resultado.textContent;
    operacion = evento.target.value;
    limpiar();
}

function igualFunction(evento) {
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
    var res = 0;

    switch (operacion) {
        case "+" : 
            res = parseInt(numa) + parseInt(numb);
            break;
        
        case "-" : 
            res = parseInt(numa) - parseInt(numb);
            break;
        
        case "/" : 
            res = parseInt(numa) / parseInt(numb);
            break;
        
        case "*" : 
            res = parseInt(numa) * parseInt(numb);
            break;
        
    }

    resetear();
    resultado.textContent = res;
}

// 1) que pueda sumar de a N números, reemplazar numa y numb por un array.   === 1 + 2 + 3 + 4 ... N
// 2) que pueda sumar y restar de a N números, agregar al array las operaciones. isNaN( ... )  === 1 + 6 - 2 ... N 
// [ 1, 2, '+', 4] = 16;
// [ 12, '+', 4] = 16;