/**
 *Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.
 *@author Rafael MIguel Cruz Álvarez 
*/
{
    
    let num;
    let elementoDiv;
    /**
     * Función inicial en la que se crear un escuchador para el botón
     */
    let init = function(){
        let boton = document.getElementById("boton");
        boton.addEventListener("click", esPar);
    }
    
    /**
     * Función para saber si un número introducido es para o impar.
     */
    let esPar = function(){
        elementoDiv = document.getElementById("texto");
        num = document.getElementById("text").value;
        let texto;
        texto = (num%2 == 0) ?  texto= "El número es par." :   texto = "El número es impar.";
        elementoDiv.innerHTML = texto;
    }

    document.addEventListener("DOMContentLoaded", init);
}
