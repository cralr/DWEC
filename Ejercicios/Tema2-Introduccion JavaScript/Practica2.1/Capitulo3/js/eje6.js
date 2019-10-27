/**
*DNI
*@author Rafael Miguel Cruz Álvarez
*/
{

    let elementoDiv;

    /** 
     *Función incial en el que se crea un escuchador para cuando se le haga click al botón se ejecute la función validarDNI 
    */
    let init = function() {
        let boton = document.getElementById("boton");
        boton.addEventListener("click", validarDni);
    }

    /**
     * Función validar DNI
    */
    let validarDni = function() {
        elementoDiv = document.getElementById("texto");
        let numero = document.getElementById("text1").value;
        let letra = document.getElementById("text2").value;
        const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N','J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
        letra=letra.toUpperCase();

        if (numero<0 || numero>99999999){
            texto="El número introducido es incorrecto </br>";
        }
        else {
            let letraCalculada = letras[numero % 23];

            if(letraCalculada != letra) {
                texto="La letra o el número no son correctos</br>";
            }else {
                texto="El número de DNI y su letra son correctos</br>";
            }
        }
        elementoDiv.innerHTML = texto;
    }
  document.addEventListener("DOMContentLoaded", init);
}