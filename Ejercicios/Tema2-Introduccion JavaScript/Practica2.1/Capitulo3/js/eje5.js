/**
 *Completar las condiciones de los if del siguiente script para que los mensajes de los alert() se muestren siempre de forma correcta:
 *@author Rafael Miguel Cruz Álvarez
*/
{
    let elementoDiv;
    /**
     * Función inicial.
     */

    let init = function(){
        elementoDiv = document.getElementById("texto");
        mostrarResultados();
    }

    /**
     * Función en la que inicializamos dos valores y hay que hacer las comprobaciones.
     */
    let mostrarResultados = function(){
        let texto;
        let numero1 = 7;
        let numero2 = 8;

        texto = "Los números son: "+numero1+ " y "+numero2+".</br>";
        //Número 1 no es mayor que número 2
        if (numero2 >= numero1){
            texto += ("número1 no es mayor que número2</br>");
        }
        //Número2 es positivo
        if(numero2 >= 0){
            texto += ("número2 es positivo</br>");
        }
        //Número1 es negativo o distinto de 0
        if(numero1 < 0 || numero1 != 0){
            texto += ("número1 es negativo o distinto de 0</br>");
        }
        //Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2
        if(++numero1 < numero2){
            texto += ("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
        }

        elementoDiv.innerHTML = texto;

    }
    
    document.addEventListener("DOMContentLoaded",init);

}