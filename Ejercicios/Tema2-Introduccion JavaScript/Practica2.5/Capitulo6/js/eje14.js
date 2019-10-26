/**
 *A partir de la página web proporcionada, completar el código JavaScript para que:
 *1. Cuando se pinche sobre el primer enlace, se oculte su sección relacionada
 *2. Cuando se vuelva a pinchar sobre el mismo enlace, se muestre otra vez esa sección de
 *contenidos
 *3. Completar el resto de enlaces de la página para que su comportamiento sea idéntico al del
 *primer enlace
 *4. Cuando una sección se oculte, debe cambiar el mensaje del enlace asociado (pista:
 *propiedad innerHTML)
 *@author Rafael Miguel Cruz Álvarez
 */

{
    let parrafo;
    

    let init = function(){
        parrafo = document.getElementById(id);
        let enlace1 = document.getElementById('1');
        let elace2= document.getElementById('2');
        let enlace3= document.getElementById('3');
        enlace1.addEventListener("click",muestraOculta);
        enlace2.addEventListener("click",muestraOculta);
        enlace3.addEventListener("click",muestraOculta);
    }

    

    let muestraOculta = function(){
        if(parrafo.style.display == "" || parrafo.style.display == "block") {
            parrafo.style.display = "none";
            enlace.innerHTML = 'Mostrar Párrafo';
        }
        else {
            parrafo.style.display = "block";
            enlace.innerHTML = 'Ocultar Párrafo';
        }
    }

    document.addEventListener("DOMContentLoaded",init);

}


