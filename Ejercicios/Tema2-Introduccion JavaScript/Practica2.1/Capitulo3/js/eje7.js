/**
*Factorial de un número
*@author Rafael Miguel Cruz Álvarez
*/

let numero = prompt("Introduzca un número para calcular su factorial.");
let i;
let factorial=1;
for (i = numero;i > 0; i--){
    factorial = factorial *i;
}
console.log(factorial);