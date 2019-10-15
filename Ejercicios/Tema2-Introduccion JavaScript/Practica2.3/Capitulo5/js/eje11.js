/**
 * 1. Número de enlaces de la página
 * 2. Dirección a la que enlaza el penúltimo enlace
 * 3. Numero de enlaces que enlazan a http://prueba
 * 4. Número de enlaces del tercer párrafo
 * @author Rafael Miguel Cruz Álvarez
 */

 window.onload = function(){

    let info = document.getElementById("eje11");

    let enlaces = document.getElementsByTagName("a");
    info.innerHTML = "Enlaces = "+enlaces.length;

    
    let mensaje = "El penultimo enlace apunta a: "+enlaces[enlaces.length-2].href;
    info.innerHTML = info.innerHTML + "<br/>" + mensaje;
    
    let contador = 0;
    for(let i=0; i<enlaces.length; i++) {
      if(enlaces[i].href == "http://prueba" || enlaces[i].href == "http://prueba/") {
      contador++;
      }
    }
    info.innerHTML = info.innerHTML + "<br/>" + contador + " enlaces apuntan a http://prueba"

    let parrafos = document.getElementsByTagName("p");
    enlaces = parrafos[2].getElementsByTagName("a");
    info.innerHTML = info.innerHTML + "<br/>" + "Numero de enlaces del tercer párrafo = "+enlaces.length;
 }