/**
*Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla los doce nombres utilizando la función alert().
*@author Rafael Miguel Cruz Álvarez
*/
{

    
    let elementoDiv;
    /**
     * Función inicial que se usara para lanzar la función de mostrarMeses.
     */
    let init = function(){
        elementoDiv = document.getElementById("texto");
        mostrarMeses();
    }

    /**
     * Función que recorre un array de meses y los mostrará
     */
    let mostrarMeses = function(){
        let texto;
        let meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
        texto ="Los meses son: </br>"
        for(let mes of meses)
            texto += mes+" ";
        elementoDiv.innerHTML = texto;
    }

    document.addEventListener("DOMContentLoaded",init);
}