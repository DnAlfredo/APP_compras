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

function muestraAñadir() {
    let divgoster = document.getElementById('desp_tienda')
    divgoster.classList.toggle('esconder')
    divgoster.classList.toggle('mostrar')
}

function cambiaInterfaz() {
    document.getElementById("cssdrag").href = "./nuevocss.css"
}

function cambiaColores() {
    document.getElementById("cssdrag").href = "./appcompra.css"
}

let col_tienda;
col_tienda = {
    tienda: [{
            nombre: "Amica"
        },
        {
            nombre: "Espar"
        },
        {
            nombre: "Simago"
        },
        {
            nombre: "Continente"
        }
    ]

}

function rellenaSelect() {
    let select = document.getElementById('selecttienda')
    let opciones = " "
    opciones = `<option value="tienda">Tienda</option>`
    for (tienda of col_tienda.tienda) {
        opciones += `<option value=${tienda.nombre}>${tienda.nombre}</option>`
    }
    //una vez hecha la estructura a insertar hay que hacer el inner para decirle que lo inserte
    select.innerHTML = opciones
}

function creaProducto() {
    

let nom_prod = document.getElementById('nombre').value
let cantidad=document.getElementById('cantidad').value
let unidades
let col_radios=document.getElementsByName('unidades')
for (radiobuttons of col_radios) {
    if (radiobuttons.checked) {
        unidades=radiobuttons.value
    }
}
let tienda=document.getElementById('selecttienda').value
let comentarios=document.getElementById('textarea').value
 listado.productos.push(

    {
        nombre:nom_prod,
        cantidad:cantidad,
        unidades:unidades,
        tienda:tienda,
        comentarios:comentarios
    }

 )
localStorage.setItem("listado",JSON.stringify(listado))


}
let listado

listado={
    productos:[]
}