/**
 *Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
 *@author Rafael MIguel Cruz Álvarez 
*/


let frase = prompt("Intoduzca una frase");

function mayusOMinus(frase) {
    let resultado = "La frase";

    if(frase == frase.toUpperCase()) {
        resultado += " está en MAYÚSCULAS.";
    }
    else if(frase == frase.toLowerCase()) {
        resultado += " está en minúsculas.";
    }
    else {
        resultado += " está formada por MAYÚSCULAS y minúsculas";
    }
    return resultado;
    
    }
    let resultadoFinal = mayusOMinus(frase);
    console.log(resultadoFinal);
