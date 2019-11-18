
/** 
 * Crea la siguiente página Web (lo más dinámica posible) donde el botón crea cinco nuevas ventanas ubicadas en la esquina tal y como se muestran.
 * Métodos a utilizar:
 * miVentana = window.open('','','width=200,height=200');
 * miVentana.document.open();
 * miVentana.document.write() 
 * Añade el esqueleto básico: html, head, title, body, ul...
 * miVentana.document.close();
 * @author Rafael Miguel Cruz Álvarez  
*/

{

    let ventanas = [];

    let init = function(){
        let boton = document.getElementById("abrir");
        let botonCerrar = document.getElementById("cerrar");
            
        boton.addEventListener("click", muestraVentanaMultiple);
        botonCerrar.addEventListener("click",cerrarventanas);
    }

    let crearVentanas = function(i){
        ventanas.push (window.open("", "ventanas"+i, "height=200,width=200"));
        ventanas[i].document.write("<!DOCTYPE html><head><title>Ventana de prueba</title><p>Ventana "+i+"</p></head></body></html>");
        ventanas[i].document.close();
    }

    let muestraVentanaMultiple = function(){
        for (let i=0;i<5;i++){
            crearVentanas(i);
        }
    }

    let cerrarventanas = function(){
        for (let i=0;i<5;i++)
            ventanas[i].window.close();
    }

    document.addEventListener("DOMContentLoaded",init);
 }