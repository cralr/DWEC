/**
 *A partir del siguiente array que se proporciona: var valores = [true, 5, false, "hola","adios", 2];
 *1. Determinar cual de los dos elementos de texto es mayor
 *2. Utilizando exclusivamente los dos valores booleanos del array, determinar los operadores necesarios para obtener un resultado true y otro resultado false   
 *3.Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos elementos numéricos
 *@author Rafael Miguel Cruz Álvarez
*/
{

    let init = function(){
        let texto = document.getElementById("texto");
        let valores = [true, 5, false, "hola","adios", 2]; 
;

        //Elemento de texto mayor
        if (valores[3]>valores[4]) 
            texto.innerHTML += valores[3]+" es mayor que "+valores[4]+"</br>" ;
        else
            texto.innerHTML += valores[4]+" es mayor que "+valores[3]+"</br>"; 

        //Resultado true
        if (valores[0] || valores[3]) 
            texto.innerHTML += "True</br>";
        else
            texto.innerHTML += "False</br>";

        //Resultado false
        if (valores[0] && valores[2])
            texto.innerHTML += "True</br>";
        else
            texto.innerHTML += "False</br>";

        //Suma
        texto.innerHTML += "El valor de la suma entre "+valores[1]+" y "+valores[5]+" es: "+(valores[1] + valores[5])+"</br>";

        //Resta
        texto.innerHTML += "El valor de la resta entre "+valores[1]+" y "+valores[5]+" es: "+(valores[1] - valores[5])+"</br>";

        //Multiplicación
        texto.innerHTML += "El valor de la multiplicación entre "+valores[1]+" y "+valores[5]+" es: "+valores[1] * valores[5]+"</br>";

        //División
        texto.innerHTML += "El valor de la división entre "+valores[1]+" y "+valores[5]+" es: "+valores[1] / valores[5]+"</br>";

        //Módulo
        texto.innerHTML += "El valor del módulo entre "+valores[1]+" y "+valores[5]+" es: "+valores[1] % valores[5]+"</br>";
    }

    document.addEventListener("DOMContentLoaded",init);
}