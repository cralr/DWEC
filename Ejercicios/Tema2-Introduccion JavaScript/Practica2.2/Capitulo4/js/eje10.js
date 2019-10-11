/**
 *Definir una función que determine si la cadena de texto que se le pasa como parámetro es un
 *palíndromo, es decir, si se lee de la misma forma desde la izquierda y desde la derecha.
 *@author Rafael MIguel Cruz Álvarez 
*/

let frase = prompt("Introduzca una frase para ver si es palíndroma o no.");
let numCaracteres = frase.length;
frase = frase.toLowerCase();
let caracter;
let cadenaEspacios="";
let cadenaInversa="";

for(i=0;i<numCaracteres;i++){
    caracter = frase.charAt(i);

    if(caracter !=" "){
        cadenaEspacios = cadenaEspacios + caracter;
        cadenaInversa = caracter + cadenaInversa;
    }
}

if(cadenaEspacios == cadenaInversa){
    console.log("La frase "+frase+" es un palíndromo.")
}
else{
    console.log("La frase "+frase+" no es un palíndromo.")
}