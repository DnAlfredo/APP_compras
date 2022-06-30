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
    limpaForm()
}

function limpaForm() {
    document.getElementById('nombre').value = "";
    document.getElementById('cantidad').value = "";
    document.getElementById('selecttienda').value = "tienda";
    document.getElementById('textarea').value = "";
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

/*HE DECIDIDO CANCELAR EL VISOR DE CANTIDADES YA QUE SIN LA BARRA DE NUMEROS QUEDA MAL
function muestraCantidad(idleer, idmostrar) {
    let cantidad = document.getElementById(idleer).value;
    document.getElementById(idmostrar).innerHTML = cantidad;
}
*/
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
let listado

listado = {
    productos: []
}

function creaProducto() {

    let nom_prod = document.getElementById('nombre').value
    let cantidad = document.getElementById('cantidad').value
    let tienda = document.getElementById('selecttienda').value
    let comentarios = document.getElementById('textarea').value
    listado.productos.push(

        {
            nombre: nom_prod,
            cantidad: cantidad,
            tienda: tienda,
            comentarios: comentarios
        }

    )
    console.log(listado)
    //  localStorage.setItem("listado", JSON.stringify(listado))
    listadoProducto()
    limpaForm()
    cierraForm()
}
function listadoProducto() {
    let producto = document.getElementById("producto")
    let nom_prod = document.getElementById('nombre').value
    let tienda = document.getElementById('selecttienda').value
    let cantidad = document.getElementById('cantidad').value
    let unidades
    let col_radios = document.getElementsByName('unidades')
    for (radiobutton of col_radios) {
        if (radiobutton.checked) {
            unidades = radiobutton.value
        }
    }

    let comentarios = document.getElementById('textarea').value
    let show_list

    show_list =
         `<div class="cuerpolista">
             <div class="productolistado">
                 <input type="checkbox" class="divcheck">
                 <span class="textlista"id="textlista">${nom_prod}</span>
                  <div class="botones">
                     <img src="./multimedia/search_FILL0_wght400_GRAD0_opsz48.png" alt="lupa de busqueda"class="botonlista" onclick="muestraLupa()">
                     <img src="./multimedia/delete_forever_FILL0_wght400_GRAD0_opsz48.png"alt="simbolo de borrar" class="botonlista">
                    </div>
                 <div id="desplupa" class="esconder">
                     <span class="cantidadprod">Cantidad: ${cantidad}</span>
                     <span class="comentarioprod">Comentarios: ${comentarios}</span>
                     <span class="comentarioprod">Tienda: ${tienda}</span>
                    </div>
                </div>
         </div>`
    producto.innerHTML += show_list
}

function recuperarArchivos() {
    if (localStorage.getItem("listado")) {
         col_productos = localStorage.getItem("listado")
        col_productos = JSON.parse(col_productos)
    }
}