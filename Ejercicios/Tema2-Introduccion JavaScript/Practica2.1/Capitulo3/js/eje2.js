/**
*Modificar el primer script del capítulo anterior para que: 
*1. El mensaje que se muestra al usuario se almacene en una variable llamada mensaje y el funcionamiento del script sea el mismo.   
*2. El mensaje mostrado sea el de la siguiente imagen:
* @author Rafael Miguel Cruz Álvarez
*/

{
    let init = function(){
        let texto = document.getElementById("texto");
        let mensaje = "Hola Mundo! \nQué facil es incluir \'comillas simples\' \n y \"comillas dobles\"";
        texto.innerHTML = mensaje;
    }
    document.addEventListener("DOMContentLoaded",init);
}

