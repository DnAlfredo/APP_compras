function muestraForm() {
    let divgost=document.getElementById('formprod')
    divgost.style.display="flex"
}
function cierraForm() {

    let divgost=document.getElementById('formprod')
    divgost.style.display="none"
}
/*
function muestraCantidad() {
    let cantidad = document.getElementById("cantidad").value;
  document.getElementById("mostrador").innerHTML = cantidad;

}
*/
/*poniendo entre parentesis esos valores estamos indicando al programador que reutilice la funcion que necesitamos dos id para que la 
funcion reaccione,despues en la funcion hemos puesto nuestras id donde tienen que interactuar los alores dados por el programador  */
function muestraCantidad(idleer,idmostrar){
    let cantidad = document.getElementById(idleer).value;
    document.getElementById(idmostrar).innerHTML = cantidad;
}

