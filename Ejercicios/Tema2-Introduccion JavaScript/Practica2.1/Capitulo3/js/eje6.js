/**
*DNI
*@author Rafael Miguel Cruz Álvarez
*/

let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N','J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
       
let numero = prompt("Introduzca su número del dni.");

if((numero < 0) || (numero > 99999999)){
 console.log("Número de dni inválido");
}
else{
    var letraDni = letras[numero%23];
    console.log("Su dni es: "+numero+letraDni); 
}