
function isEven(number) {
    return (number%2 === 0);
}

function factorial(number) {
    if(number === 0)
        return 1;
 
    for(var i=number-1; i>0; i--) {
        number *= i;
    }
    return number;
}

function kebabToSnake(frase) {
    if(typeof frase !== "string") {
        return "error, intenta escribir con '' ";
    }
    var fraseRenovada = frase.replace(/-/g,"_");
    return fraseRenovada;
}
