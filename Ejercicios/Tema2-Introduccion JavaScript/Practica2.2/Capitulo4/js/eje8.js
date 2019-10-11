/**
 *Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.
 *@author Rafael MIguel Cruz Álvarez 
*/

let numero = prompt("Introduzca un número para saber si es par o impar.");

let resultado = esPar(numero);
console.log("El número "+numero+" es "+resultado);

function esPar(num) {
    if(num%2==0){
        return "par";
    }
    else{
        return "impar";
    }
}