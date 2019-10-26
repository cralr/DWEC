/**
 *Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.
 *@author Rafael MIguel Cruz Álvarez 
*/
{
    let texto;
    let num;
    let init = function(){
        let boton = document.getElementById("boton");
        boton.addEventListener("click", esPar);
    }
    
    let esPar = function(){
        texto = document.getElementById("texto");
        num = document.getElementById("text").value;
        return (num%2 == 0) ?  texto.innerHTML= "El número es par" :   texto.innerHTML = "El número es impar";
    }

    document.addEventListener("DOMContentLoaded", init);
}
