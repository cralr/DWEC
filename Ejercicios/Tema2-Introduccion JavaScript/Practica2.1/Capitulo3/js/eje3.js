/**
*Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla los doce nombres utilizando la función alert().
*@author Rafael Miguel Cruz Álvarez
*/
{
    let init = function(){
        let texto = document.getElementById("texto");
        let meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
        texto.innerHTML ="Los meses son: </br>"
        for(let mes of meses)
            texto.innerHTML += mes+" ";
    }

    document.addEventListener("DOMContentLoaded",init);
}