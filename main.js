let operation = []; //declaramos el primer array, aca se van a guardar los numeros cuando sean clickeados
const igual = document.getElementById("igual");  //guardamos en una variable los numeros
const reset = document.getElementById("reset")
const calculatorButtonsNumbers = document.getElementsByClassName("calculator-button-numbers");  //guardamos en una variable los numeros
const calculatorButtonsOperations = document.getElementsByClassName("calculator-button-operations"); //guardamos en una variable las operaciones
let operationFinal = []; //declaramos un array, se va a guardar la operacion lista para finalizar.
const valorAnterior = [];


// escucha el evento 'click' y lo guarda en la variable (numeros)
for (let index = 0; index < calculatorButtonsNumbers.length; index++) {
    const calculatorButtonNumber = calculatorButtonsNumbers[index];
    calculatorButtonNumber.addEventListener('click', mostrarOperacion);
    calculatorButtonNumber.addEventListener('click', agregar);

}
//escucha el evento 'click' y lo guareda en la variable (operadores)
for (let index = 0; index < calculatorButtonsOperations.length; index++) {
    const calculatorButtonOperation = calculatorButtonsOperations[index];
    calculatorButtonOperation.addEventListener('click', mostrarOperacion);
    calculatorButtonOperation.addEventListener('click', agregar);
}

function agregar(evento) {
    let caracter = evento.target.value;
    operation.push(caracter);
}

function mostrarOperacion(evento) {
    number.textContent = number.textContent + evento.target.value;
}

function resetear() {
    number.textContent = "";
    resultado.textContent = "";
    operation = [];
    resultadoFinal = '';
    operationFinal = '';
}
reset.addEventListener('click', resetear)

function resolver() {
    resolverPrimeraParte();
    resolverSegundaParte();
    operationFinal = [];
    resultado.textContent = resultadoFinal;
}

igual.addEventListener('click', resolver);

function resolverPrimeraParte() {
    let valorAnterior = '';
    operation.forEach((valor, indice) => {
        if (!isNaN(valor)) { 
            valorAnterior = valorAnterior + valor;
            if (indice == operation.length - 1) { 
                operationFinal.push(valorAnterior); 
            }
        } else { 
            operationFinal.push(valorAnterior); 
            valorAnterior = '';
            operationFinal.push(valor);        
        }
    });
    return operationFinal;
}

let resultadoFinal = undefined;
// obtener el resultado
function resolverSegundaParte() {
    // operationsFinal = ['95', '+', '5', '-', '10'];   
    let indiceAnterior = undefined;
    let operacionPrevia = '';

    operationFinal.forEach((valor, indice) => { 
        if (indiceAnterior !== indice) { 
            if (isNaN(valor)) {
                indiceAnterior = indice + 1; 
                let valorSiguiente = operationFinal[indiceAnterior];

                if (resultadoFinal === undefined) { 
                    resultadoFinal = calcular(operacionPrevia, valor, valorSiguiente); 
                    console.log('H', resultadoFinal);
                } else {
                    console.log('J', resultadoFinal, valor, valorSiguiente)
                    resultadoFinal  = calcular(resultadoFinal, valor, valorSiguiente);
                }
            } else {
                operacionPrevia = valor;
            }
        }
    });

    console.log('el resultado final es:', resultadoFinal); 
        // no lo estoy guardando en ningun lugar
    return resultadoFinal;
}

function calcular(num1, operador, num2) {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    let res = 0;
    

    switch (operador) {
        case '+':
            res = num1 + num2;
            break;
        case '-':
            res = num1 - num2;
            break;
        case '*':
            res = num1 * num2;
            break;
        case '/':
            res = num1 / num2;
            break;
    
        default:
            break;
    }
    return res;
}


