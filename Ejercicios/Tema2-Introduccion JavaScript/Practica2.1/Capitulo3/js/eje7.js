/**
*Factorial de un número
*@author Rafael Miguel Cruz Álvarez
*/

{
    let init = function() {
        let boton = document.getElementById("boton");
        boton.addEventListener("click", factorial);
    }

    let factorial = function(){
        let texto = document.getElementById("texto");
        let numero = document.getElementById("text").value;
        let i;
        let factorial=1;
        for (i = numero;i > 0; i--){
            factorial = factorial *i;
        }
        return texto.innerHTML = "El factorial es: "+factorial
    }
    document.addEventListener("DOMContentLoaded", init);

}
