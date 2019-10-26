/**
 *Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
 *@author Rafael MIguel Cruz Álvarez 
*/

{
    {
        let texto;
        let frase;
        let init = function(){
            let boton = document.getElementById("boton");
            boton.addEventListener("click", mayusOMinus);
        }
        
        let mayusOMinus = function(){
            texto = document.getElementById("texto");
            frase = document.getElementById("text").value;

            if(frase == frase.toUpperCase()) {
                texto.innerHTML = " La frase está en MAYÚSCULAS.";
            }
            else if(frase == frase.toLowerCase()) {
                texto.innerHTML = "La frase está en minúsculas.";
            }
            else {
                texto.innerHTML = "La frase está formada por MAYÚSCULAS y minúsculas";
            }
            return texto.innerHTML;    
        }
    
        document.addEventListener("DOMContentLoaded", init);
    }
}

