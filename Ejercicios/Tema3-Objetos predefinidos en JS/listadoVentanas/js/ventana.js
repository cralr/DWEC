/**
 * 
 * Crea la siguiente página Web (lo más dinámica posible) donde el botón crea una nueva ventana ubicada en la esquina superior izquierda de la pantalla (top = 0, left = 0) y con los tamaños indicados.
 * Métodos a utilizar:
 * window.open()
 * document.write() 
 * Añade el esqueleto básico: html, head, title, body, ul...
 *
 * @author Rafael Miguel Cruz Álvarez 
 */

 {
    let init = function(){
        let boton = document.getElementById("boton");
            boton.addEventListener("click", muestraVentana);
    }

    let muestraVentana = function(){
        let miVentana = window.open("", "miVentana", "height=200,width=300");
        miVentana.document.write("<!DOCTYPE html><head><title>Ventana de prueba</title></head><body><p>Se han utilizado las propiedades:<ul><li>height=200</li><li>width=300</li></ul></p></body></html>");
    }
    window.document.addEventListener("DOMContentLoaded",init);
 }