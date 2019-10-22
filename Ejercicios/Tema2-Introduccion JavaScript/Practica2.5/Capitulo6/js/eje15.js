/**  
 * 1. Al mover el ratón en cualquier punto de la ventana del navegador, se muestre la posición
 *del puntero respecto del navegador y respecto de la página:
 *Para mostrar los mensajes, utilizar la función muestraInformacion() deduciendo su
 *funcionamiento a partir de su código fuente.
 *2. Al pulsar cualquier tecla, el mensaje mostrado debe cambiar para indicar el nuevo evento y
 *su información asociada:
 *3. Añadir la siguiente característica al script: cuando se pulsa un botón del ratón, el color de
 *fondo del cuadro de mensaje debe ser amarillo (#FFFFCC) y cuando se pulsa una tecla, el color de fondo debe ser azul (#CCE6FF). 
 *Al volver a mover el ratón, el color de fondo vuelve a ser blanco. 
 *@author Rafael Miguel Cruz Álvarez
*/

{
    let informacion;

    let inicio = function () {
        informacion = document.getElementById("info"); 
        let elementoBody = document.body;

        elementoBody.onkeypress = muestraTecla;
        elementoBody.onmousemove = cambiaColor;
        elementoBody.onclick = muestraRaton;
    }

    window.onload = inicio;
    let muestraRaton = function (event) {
      
        let coordenadaX = event.clientX;
        let coordenadaY = event.clientY;
        let coordenadaXpantalla = event.pageX;
        let coordenadaYpantalla = event.pageY;

        
        informacion.innerHTML = "<h1>Ratón</h1> Navegador [" + coordenadaX + ", " + coordenadaY + "]<br> Página [" + coordenadaXpantalla + ", " + coordenadaYpantalla + "]";
        informacion.className = "raton";
    }

    let muestraTecla = function (event) {

        let teclaPulsada = event.keyCode;
        let letra = String.fromCharCode(teclaPulsada);
        
        informacion.innerHTML = "<h1>Teclado</h1> Carácter [" + letra + "]<br>Código: [" + teclaPulsada + "]";
        informacion.className = "teclado";

    }

    let cambiaColor = function () {
        informacion.className = "mueveRaton";
    }
}