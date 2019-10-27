/**
*Factorial de un número
*@author Rafael Miguel Cruz Álvarez
*/

{
    let elementoDiv;
    /**
     * Función inicio en el que se crea un escuchador para el botón.
     */
    let init = function() {
        let boton = document.getElementById("boton");
        boton.addEventListener("click", factorial);
    }

    /**
     * Función factorial 
     */
    let factorial = function(){
        elementoDiv= document.getElementById("texto");
        let numero = document.getElementById("text").value;
        let texto;
        let i;
        let factorial=1;
        for (i = numero;i > 0; i--){
            factorial = factorial *i;
        }
        texto = "El factorial es: "+factorial;

        elementoDiv.innerHTML=texto;
    }
    document.addEventListener("DOMContentLoaded", init);

}
