/**
 *A partir del siguiente array que se proporciona: var valores = [true, 5, false, "hola","adios", 2];
 *1. Determinar cual de los dos elementos de texto es mayor
 *2. Utilizando exclusivamente los dos valores booleanos del array, determinar los operadores necesarios para obtener un resultado true y otro resultado false   
 *3.Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos elementos numéricos
 *@author Rafael Miguel Cruz Álvarez
*/
{
    
    let elementoDiv;

    /**
     * Función inicial
     */

    let init = function(){
        elementoDiv = document.getElementById("texto");
        let valores = [true, 5, false, "hola","adios", 2]; 
        let texto;

        //Elemento de texto mayor
        if (valores[3]>valores[4]) 
            texto= valores[3]+" es mayor que "+valores[4]+"</br>" ;
        else
            texto+= valores[4]+" es mayor que "+valores[3]+"</br>"; 

        //Resultado true
        if (valores[0] || valores[3]) 
            texto+= "True</br>";
        else
            texto+= "False</br>";

        //Resultado false
        if (valores[0] && valores[2])
            texto+= "True</br>";
        else
            texto+= "False</br>";

        //Suma
        texto+= "El valor de la suma entre "+valores[1]+" y "+valores[5]+" es: "+(valores[1] + valores[5])+"</br>";

        //Resta
        texto+= "El valor de la resta entre "+valores[1]+" y "+valores[5]+" es: "+(valores[1] - valores[5])+"</br>";

        //Multiplicación
        texto+= "El valor de la multiplicación entre "+valores[1]+" y "+valores[5]+" es: "+valores[1] * valores[5]+"</br>";

        //División
        texto+= "El valor de la división entre "+valores[1]+" y "+valores[5]+" es: "+valores[1] / valores[5]+"</br>";

        //Módulo
        texto+= "El valor del módulo entre "+valores[1]+" y "+valores[5]+" es: "+valores[1] % valores[5]+"</br>";

        elementoDiv.innerHTML = texto;
    }

    document.addEventListener("DOMContentLoaded",init);
}