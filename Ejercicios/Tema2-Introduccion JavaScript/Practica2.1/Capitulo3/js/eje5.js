/**
 *Completar las condiciones de los if del siguiente script para que los mensajes de los alert() se muestren siempre de forma correcta:
 *@author Rafael Miguel Cruz Álvarez
*/

let numero1 = 7;
let numero2 = 8;

//Número 1 no es mayor que número 2
if (numero2 >= numero1){
    console.log("número1 no es mayor que número2");
}
//Número2 es positivo
if(numero2 >= 0){
    console.log("número2 es positivo");
}
//Número1 es negativo o distinto de 0
if(numero1 < 0 || numero1 != 0){
    console.log("número1 es negativo o distinto de 0");
}
//Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2
if(++numero1 < numero2){
    console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}