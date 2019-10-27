/**
 * 1. Número de enlaces de la página
 * 2. Dirección a la que enlaza el penúltimo enlace
 * 3. Numero de enlaces que enlazan a http://prueba
 * 4. Número de enlaces del tercer párrafo
 * @author Rafael Miguel Cruz Álvarez
 */

{
  let elementoDiv;
  let texto 
  let parrafos;
  let enlaces;

    /**
     * Función inicial
     */
    let init = function(){
      elementoDiv = document.getElementById("eje11");
      parrafos = document.getElementsByTagName("p"); 
      enlaces = document.getElementsByTagName("a");
      mostrarInfo();
    }

    /**
     * Función en la que se obtiene el número de enlaces del texto.
     */
    let numeroEnlaces = function(){
      texto = "Enlaces = "+enlaces.length;
      elementoDiv.innerHTML = texto;
    }
    
    /**
      * Función en la que se obtiene el penúltimo enlace del texto.
     */
    let penultimoEnlace = function(){
      let mensaje = "El penultimo enlace apunta a: "+enlaces[enlaces.length-2].href;
      texto = texto + "<br/>" + mensaje;
      elementoDiv.innerHTML = texto;
    }
  
    /**
     * Función que muestra el número de enlaces de prueba
     */
    let enlacesPrueba = function(){
      let contador = 0;
      for(let i=0; i<enlaces.length; i++) {
        if(enlaces[i].href == "http://prueba" || enlaces[i].href == "http://prueba/") {
        contador++;
        }
      }
      texto = texto + "<br/>" + contador + " enlaces apuntan a http://prueba";
      elementoDiv.innerHTML = texto;
    }

    /**
     * Función que muestra los enlaces del tercer párrafo.
     */  
    let enlacesTercerParrafo = function(){
      enlaces = parrafos[2].getElementsByTagName("a");
      texto = texto + "<br/>" + "Numero de enlaces del tercer párrafo = "+enlaces.length;
      elementoDiv.innerHTML = texto;
    }

    /**
     * Funcion usada para llamar a las funciones anteriores y mostrarlas en init.
     */
    let mostrarInfo = function(){
      numeroEnlaces();
      penultimoEnlace();
      enlacesPrueba();
      enlacesTercerParrafo();
    }

    document.addEventListener("DOMContentLoaded",init);
}

  


  





    

    