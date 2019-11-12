/**
 * Ejercicio 5 Arrays
 * 
 *Crea  una función que devuelva un array con cada uno de los argumentos.
 * 
 * @author Rafael Miguel Cruz Álvarez
 */

{
    
    let elementoDiv;
    let init = function(){
        elementoDiv = document.getElementById("eje5");
        recorrerArray();
    }

    let recorrerArray = function(){
        let texto = "";
        let array = [1,2,3,4];
        
        array.forEach(function(valor,indice,arr){
            texto += "array["+indice+"] = " +valor+" ";
        });
        elementoDiv.innerHTML = texto;
    }

    document.addEventListener("DOMContentLoaded",init);
}