/**
 * Ejercicio 7 Arrays
 * 
 * Crea una función que elimine todos los undefined de un array.
 * 
 * @author Rafael Miguel Cruz Álvarez
 */


{
    let elementoDiv;
    
    let init = function(){
        elementoDiv = document.getElementById("eje7");
        removeUndefined();
    }

    let removeUndefined = function(){
        let texto = "";
        let array = [1,2,undefined,4,undefined];
        texto += "Array con undefined: ";
        for (x in array)
            texto += array[x] + " ";
        texto+="//"
        array = array.filter(e=>e)
        texto +="Array sin undefined: ";
        for (x in array)
            texto += array[x] + " ";
        
        elementoDiv.innerHTML = texto;
    }

    document.addEventListener("DOMContentLoaded",init);
}

