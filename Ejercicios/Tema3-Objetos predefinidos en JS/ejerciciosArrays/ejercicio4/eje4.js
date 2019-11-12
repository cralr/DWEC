/**
 * Ejercicio 4 Arrays
 * 
 * Crea  una función que cree un array de la dimensión indicada,  cuyo contenido sean los números naturales comenzando desde 0
 * 
 * @author Rafael Miguel Cruz Álvarez
 */

{
    let elementoDiv;
    let array = [];
    let num=10;
    
    let init = function(){
        elementoDiv = document.getElementById("eje4");
        recorrerArray(num);
    }

    let recorrerArray = function(numero){
        let texto = "";
        for( let x=0; x<numero;x++){
            texto += array.push(x)+" ";
        }
        elementoDiv.innerHTML = texto;
    }

    document.addEventListener("DOMContentLoaded",init);
}