/**
 *Completar las condiciones de los if del siguiente script para que los mensajes de los alert() se muestren siempre de forma correcta:
 *@author Rafael Miguel Cruz Álvarez
*/
{
    let init = function(){
        let texto = document.getElementById("texto");
        let numero1 = 7;
        let numero2 = 8;

        texto.innerHTML += "Los números son: "+numero1+ " y "+numero2+".</br>";
        //Número 1 no es mayor que número 2
        if (numero2 >= numero1){
            texto.innerHTML += ("número1 no es mayor que número2</br>");
        }
        //Número2 es positivo
        if(numero2 >= 0){
            texto.innerHTML += ("número2 es positivo</br>");
        }
        //Número1 es negativo o distinto de 0
        if(numero1 < 0 || numero1 != 0){
            texto.innerHTML += ("número1 es negativo o distinto de 0</br>");
        }
        //Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2
        if(++numero1 < numero2){
            texto.innerHTML += ("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
        }
    }
    
    document.addEventListener("DOMContentLoaded",init);

}