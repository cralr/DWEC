/**
 * Ejercicio 1 Arrays
 * 
 * Indica los tres argumentos del método forEach a un array. Demuestra su uso mediante un ejemplo.
 * 
 * currentValue: Requerido. Valor del elemento actual.
 * index: Opcional. El índice del array del elemento actual.
 * arr: Opcional. Objeto que pertenece al elemento actual.
 * 
 * @author Rafael Miguel Cruz Álvarez
 */

{
    
    let elementoDiv;
    
    let init = function(){
        elementoDiv = document.getElementById("eje1");
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
