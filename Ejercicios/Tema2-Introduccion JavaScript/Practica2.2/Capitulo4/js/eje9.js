/**
 *Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
 *@author Rafael MIguel Cruz Álvarez 
*/

{
        let elementoDiv;
        let frase;

        /**
        * Función inicial en la que se crear un escuchador para el botón
        */
        let init = function(){
            let boton = document.getElementById("boton");
            boton.addEventListener("click", mayusOMinus);
        }
        
        /**
         * Función mayusOMinus en la que se recoge la cadena introducida y se devuelve si está escrita en mayus o minus o amabs.
         */
        let mayusOMinus = function(){
            elementoDiv = document.getElementById("texto");
            frase = document.getElementById("text").value;

            if(frase == frase.toUpperCase()) {
                texto = " La frase está en MAYÚSCULAS.";
            }
            else if(frase == frase.toLowerCase()) {
                texto = "La frase está en minúsculas.";
            }
            else {
                texto = "La frase está formada por MAYÚSCULAS y minúsculas.";
            }
            elementoDiv.innerHTML = texto;    
        }
    
        document.addEventListener("DOMContentLoaded", init);
}

