/**
*Crear un script que informe al usuario en que zona de la pantalla ha pulsado el ratón. Las zonas
*definidas son las siguientes: izquierda arriba, izquierda abajo, derecha arriba y derecha abajo. Para
*determinar el tamaño de la ventana del navegador, utilizar la función tamanoVentanaNavegador()
*proporcionada.
*@author Rafael Miguel Cruz Álvarez
*/

{
    let elementoDiv;

    let informacion = function (evento) {
        let coordenadaX = evento.clientX;
        let coordenadaY = evento.clientY;

        let [tamanoX,tamanoY] = tamanoVentanaNavegador();

        let posicionHorizontal =(coordenadaX > tamanoX/2) ? "Derecha" : "Izquierda";
        let posicionVertical = (coordenadaY > tamanoY/2) ? "Abajo" : "Arriba";

        muestraInformacion(['Posición', posicionHorizontal, posicionVertical]);
    }

    let muestraInformacion = function (mensaje) {
        elementoDiv.innerHTML = '<h1>' + mensaje[0] + '</h1>';
        for (let i = 1; i < mensaje.length; i++) {
          elementoDiv.innerHTML += '<p>' + mensaje[i] + '</p>';
        }
    }

    let tamanoVentanaNavegador = function () {
        return [window.innerWidth, window.innerHeight];
    }

    let init = function(){
        elementoDiv = document.getElementById("info");
        
        document.addEventListener("click",informacion);
    }

    document.addEventListener("DOMContentLoaded",init);
}
    
