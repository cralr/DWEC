/**
 *Completar el código JavaScript proporcionado para que se añadan nuevos elementos a la lista cada
 *vez que se pulsa sobre el botón. Utilizar las funciones DOM para crear nuevos nodos y añadirlos a la
 *lista existente. Al igual que sucede en el ejercicio anterior, la acción de pinchar sobre un botón forma
 *parte de los "Eventos" de JavaScript que se ven en el siguiente capítulo. En este ejercicio, sólo se
 *debe saber que al pinchar sobre el botón, se ejecuta la función llamada anade().
 * @author Rafael Miguel Cruz Álvarez
 */
{
    let elemento;
    let texto;
    let lista;
    let nuevoElemento;

    let init = function(){
        elemento = document.createElement("li");
        texto = document.createTextNode("Elemento de prueba");
        lista = document.getElementById("lista");
        annade();
    }

    let annade = function(){
        elemento.appendChild(texto);
        lista.appendChild(elemento);
        nuevoElemento = "<li>Texto de prueba</li>";
        lista.innerHTML = lista.innerHTML + nuevoElemento;
    }

    document.addEventListener("click",init);

}
