/**
 * Ejercicio 2 Arrays
 * 
 * Indica la utilidad del operador in con los arrays. Demuestra su uso mediante un ejemplo.
 * 
 * La utilidad del in, recorrer los valores del array
 * 
 * @author Rafael Miguel Cruz Álvarez
 */

{
    
    let elementoDiv;
    
    let init = function(){
        elementoDiv = document.getElementById("eje2");
        recorrerArray();
    }

    let recorrerArray = function(){
        let texto = "";
        let x;
        let arrayPersona = ["Rafael","Cruz",];
        for (x in arrayPersona)
            texto += arrayPersona[x] + " ";
        elementoDiv.innerHTML = texto;
    }

    document.addEventListener("DOMContentLoaded",init);
    
}

