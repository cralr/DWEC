/**
 * Mejorar el ejemplo anterior indicando en todo momento al usuario el número de caracteres que aún puede escribir.
 * Además, se debe permitir pulsar las teclas Backspace, Supr. y las flechas horizontales cuando se haya llegado al máximo número de caracteres.
 * 
 * @author Rafael Miguel Cruz Álvarez
 */

{

    let texto;
    let info;

    let inicio = function(){
        text = document.getElementById("texto");
        info = document.getElementById("info");
        let elementoBody = document.body;

        elementoBody.onkeypress = limita;
        elementoBody.onkeyup = actualizaInfo;

    }
    window.onload = inicio;

    let limita = function(event, maximoCaracteres){
        let evento = event; 
        let codigoCaracter = evento.keyCode;

        if(codigoCaracter == 37 || codigoCaracter == 39) {
          return true;
        }
        
        if(codigoCaracter == 8 || codigoCaracter == 46) {
          return true;
        }
        else if(texto.value.length >= maximoCaracteres ) {
          return false;
        }
        else {
          return true;
        }
      }

      let actualizaInfo = function(maximoCaracteres){
        if(texto.value.length >= maximoCaracteres ) {
            info.innerHTML = "Máximo "+maximoCaracteres+" caracteres";
          }
          else {
            info.innerHTML = "Puedes escribir hasta "+(maximoCaracteres-texto.value.length)+" caracteres adicionales";
          }
      }    
}


