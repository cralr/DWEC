/**
 * 1. Número de enlaces de la página
 * 2. Dirección a la que enlaza el penúltimo enlace
 * 3. Numero de enlaces que enlazan a http://prueba
 * 4. Número de enlaces del tercer párrafo
 * @author Rafael Miguel Cruz Álvarez
 */

 window.onload = function(){

    var info = document.getElementById("eje11");

  // Numero de enlaces de la pagina
  var enlaces = document.getElementsByTagName("a");
  info.innerHTML = "Numero de enlaces = "+enlaces.length;


 }