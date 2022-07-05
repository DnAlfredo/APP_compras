function muestraForm() {
    let divgost = document.getElementById('modal')
    divgost.style.display = "flex"
    
}

function muestraLupa(idloca) {
    let divgoster = document.getElementById(idloca)
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
    cierraMenu()
}

function cambiaColores() {
    document.getElementById("cssdrag").href = "./appcompra.css"
    cierraMenu()
}

let col_tienda;
col_tienda = {
    tienda: [{
            nombre: "Mercadona"
        },
        {
            nombre: "Lidl"
        },
        {
            nombre: "MasyMas"
        },
        {
            nombre: "Consum"
        },
        {
            nombre:"Aldi"
        },
        {
            nombre:"FamilyCash"
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
    if (nom_prod.trim() == "") {
        limpaForm()
        return false
    }
    if (cantidad <= 0) {
        limpaForm()
        return false
    }

    listado.productos.push(

        {
            nombre: nom_prod,
            cantidad: cantidad,
            tienda: tienda,
            comentarios: comentarios,
            comprado: false

        }

    )
    //console.log(listado)
    localStorage.setItem("listado", JSON.stringify(listado))
    listadoProducto()
    limpaForm()
    cierraForm()

}

function listadoProducto() {
    let producto = document.getElementById("producto")
    let show_list
    let checkado=""
    show_list =
        `<div class="cuerpolista">`

    for (cromo of listado.productos) {
        indice = listado.productos.indexOf(cromo)
        if(cromo.comprado){
         checkado="checked"
        }else{
            checkado=""
        }
        show_list +=
            `<div class="productolistado">
                 <input type="checkbox" class="divcheck"onchange="actualizaCheck(${indice})"id="chk_${cromo.nombre}"${checkado}>
                 <span class="textlista"id="textlista">${cromo.nombre}</span>
                  <div class="botones">
                     <img src="./multimedia/lupa.svg" alt="lupa de busqueda"class="botonlista" onclick="muestraLupa('lupa_${cromo.nombre}')">
                     <img src="./multimedia/delete.svg"alt="simbolo de borrar" class="botonlista"onclick="avisoBorrado('borra_${cromo.nombre}')">
                     
                  </div>
                  <div id="borra_${cromo.nombre}"class="esconder desplupa">
                     <span> Cuidado!! Quieres borrar el producto <span style="color:red;">${cromo.nombre}</span></span>
                     <img src="./multimedia/disabled_visible_FILL0_wght400_GRAD0_opsz48.svg" alt="" class="botonlista"
                     onclick="muestraLupa('borra_${cromo.nombre}')">
                     <img src="./multimedia/delete.svg"alt="simbolo de borrar" class="botonlista" onclick="borrarProducto('${indice}')">
                  </div>
                  <div id='lupa_${cromo.nombre}' class="esconder desplupa">
                     <span class="cantidadprod">Cantidad: ${cromo.cantidad}</span>
                     <span class="comentarioprod">Comentarios: ${cromo.comentarios}</span>
                     <span class="comentarioprod">Tienda: ${cromo.tienda}</span>
                  </div>
                </div>`
    }
    show_list += `</div>`
    producto.innerHTML = show_list
}

function recuperarArchivos() {
    if (localStorage.getItem("listado")) {
        listado = localStorage.getItem("listado")
        listado = JSON.parse(listado)

        listadoProducto()
    }
}
function actualizaCheck(indice) {
    listado.productos[indice].comprado= ! listado.productos[indice].comprado
    localStorage.setItem("listado", JSON.stringify(listado))

}
function avisoBorrado(divdell) {
    let divalert = document.getElementById(divdell)
    divalert.classList.toggle('esconder')
    divalert.classList.toggle('mostrar')


}

function borrarProducto(numdiv) {
    listado.productos.splice(numdiv, 1)
    localStorage.setItem("listado", JSON.stringify(listado))
    listadoProducto()
    // localStorage.removeItem(productdell)
}