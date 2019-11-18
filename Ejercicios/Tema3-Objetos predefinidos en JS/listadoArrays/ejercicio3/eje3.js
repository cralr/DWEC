/**
 * Ejercicio 3 Arrays
 * 
 * Indica la función que comprueba si un objeto es o no un Array. Demuestra su uso mediante un ejemplo.
 * 
 * La función es isArray().
 * 
 * @author Rafael Miguel Cruz Álvarez
 */

{
    let elementoDiv;
    
    let init = function(){
        elementoDiv = document.getElementById("eje3");
        recorrerArray();
    }

    let recorrerArray = function(){
        let texto = "";
        let arrayNumeros = [2, 4, 6, 8, 10];
        let arrayObjeto = {Nombre: "Rafa", Apellido:"Cruz"};
        
        if (Array.isArray(arrayNumeros)){
            texto += arrayNumeros + " es un array ";
        }
        else{
            texto += arrayNumeros +" no es un objeto ";
        }
        if (Array.isArray(arrayObjeto)){
            texto += arrayObjeto + " es un objeto ";
        }
        else{
            texto += arrayObjeto+ " no es un array ";
        }
        elementoDiv.innerHTML = texto;
    }

    document.addEventListener("DOMContentLoaded",init);
}
