function muestraForm() {
    let divgost = document.getElementById('modal')
    divgost.style.display = "flex"
}

function muestraLupa() {
    let divgoster = document.getElementById('desplupa')
    divgoster.classList.toggle('mostrar')
    divgoster.classList.toggle('esconder')
}

function cierraForm() {

    let divgost = document.getElementById('modal')
    divgost.style.display = "none"
}

function cierraLupa() {
    muestraLupa()
}
/*
function muestraCantidad() {
    let cantidad = document.getElementById("cantidad").value;
  document.getElementById("mostrador").innerHTML = cantidad;

}
*/
/*poniendo entre parentesis esos valores estamos indicando al programador que reutilice la funcion que necesitamos dos id para que la 
funcion reaccione,despues en la funcion hemos puesto nuestras id donde tienen que interactuar los alores dados por el programador  */
function muestraCantidad(idleer, idmostrar) {
    let cantidad = document.getElementById(idleer).value;
    document.getElementById(idmostrar).innerHTML = cantidad;
}

function muestraMenu() {
    let divmen = document.getElementById('despmenu')
    divmen.classList.toggle('esconder')
    divmen.classList.toggle('mostrar')
}

function cierraMenu() {
    muestraMenu()
}

function cambiaInterfaz() {
    document.getElementById("cssdrag").href = "./nuevocss.css"
}

function cambiaColores() {
    document.getElementById("cssdrag").href = "./appcompra.css"
}
/*
function validarDatos() {
   
        campo_nombre = document.getElementById("nombre") 
         campo_tratado = campo_nombre.value.trim() 
        if (campo_tratado == "" || campo_tratado == null) {
           
            return false
        } else {
            document.getElementById('nombre').style.backgroundColor = "none" 
        }
        tienda = document.getElementById("tienda")
        if (tienda.selectedIndex < 1) {
            alert('ERROR:Campo tienda no valido.')
        }
        tienda = document.getElementsByName("unidades")
        if (tienda==null) {
            alert('falloen unidades')
           return false  
        }
        cantidad=document.getElementById("cantidad") 
        if(cantidad==0)
        alert('cantidad erronea')

}
function guardaDatos() {
    
}*/