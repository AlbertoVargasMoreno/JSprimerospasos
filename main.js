// syntax:
// function square(number) {
//     return number * number;
//   }

function isEven(number) {
    return !number%2;
}

var fact;
function factorial(number) {
    fact = number;
    if(number === 0) {
        fact = 1;
        return fact;
    }
    while(number>1) {
        number--;
        fact *= number;
    }
    return fact;
}