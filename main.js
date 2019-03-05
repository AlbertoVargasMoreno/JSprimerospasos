// syntax:
// function square(number) {
//     return number * number;
//   }

function isEven(number) {
    return !number%2;
}

var fact;
function factorial(number) {

    if(number === 0)
        return 1;
 
    for(var i=number-1; i>0; i--) {
        number *= i;
    }
    return number;
}