"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/* 1 - Enunciado

Transforme todos los eventos a continuación a eventos con on-event
Verifique que en la consola no figura ningún error en alguno de ellos
Verifique que en la consola sigan apereciendo los mensajes de log

*/

/*const boton = document.querySelector("button");

boton.onclick = () => {
    console.log("Respuesta evento click");
    boton.className = "btnClick";
}

boton.onmouseover = () => {
    console.log("Respuesta evento mouseover");
    boton.className = "btnOver";
}

boton.onmouseout = () => {
    console.log("Respuesta evento mouseout");
    boton.className = "btnOut";
}  */


/* 2 - Enunciado

Cree un evento que capture cuando cambia la caja de seleccion
Utilice el ejemplo de clase de modo "white y black" para guiarse
en como capturar este evento y además como capturar el valor
actual seleccionado en la caja de seleccion.

*/
/*const select = document.querySelector('select');
// Usamos "body" para seleccionar el padre
// de todos los elementos
const body = document.querySelector('body');

console.log("Evento de onclick con on-event");

function update(bgColor, textColor) {
    body.style.backgroundColor = bgColor;
    body.style.color = textColor;
}
 
select.onchange = () => {
    select.value === 'green' ? update('green','blue') : update('green','blues');
}
  */
/* 3 - Enunciado

Cree un evento que capture cuando haya finalizado de ingresas
su nombre en el elemento "input". Deberá con un alert informar
el nombre ingresado al finalizar su ingreso.
PISTA: Debe utilizar el mismo tipo de evento que en el ejercicio
anterior.

*/
const nombreInput = document.getElementById("nombreInput");
// Usamos "body" para seleccionar el padre
// de todos los elementos
nombreInput.addEventListener("input", () => {
    // Código para manejar el evento de ingreso de nombre
  });
  nombreInput.addEventListener("input", () => {
    const nombreIngresado = nombreInput.value;
    alert(`Nombre ingresado: ${nombreIngresado}`);
  });
 
