/**
 *A partir del siguiente array que se proporciona: var valores = [true, 5, false, "hola","adios", 2];
 *1. Determinar cual de los dos elementos de texto es mayor
 *2. Utilizando exclusivamente los dos valores booleanos del array, determinar los operadores necesarios para obtener un resultado true y otro resultado false   
 *3.Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos elementos numéricos
 *@author Rafael Miguel Cruz Álvarez
*/

let valores = [true, 5, false, "hola","adios", 2]; 
    
//Elemento de texto mayor
console.lo(valores[3]>valores[4]);
//Resultado true
console.log(valores[0] || valores[3]);
//Resultado false
console.log(valores[0] && valores[2]);
//Suma
console.log(valores[1] + valores[5]);
//Resta
console.log(valores[1] - valores[5]);
//Multiplicación
console.log(valores[1] * valores[5]);
//División
console.log(valores[1] / valores[5]);
//Módulo
console.log(valores[1] % valores[5]);