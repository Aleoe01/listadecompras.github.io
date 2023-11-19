//cargar items a la lista

//referencio elementos html para usarlos en js
let cargaProducto = new bootstrap.Modal(
  document.getElementById("cargaProducto"),
  {}
);
let pantallaVacia = document.getElementById("pantallaVacia");
let pantallaListado = document.getElementById("pantallaListado");
let pantallaListadoLista = document.getElementById("pantallaListadoLista");
let pantallaDetalle = document.getElementById("pantallaDetalle");
let listadoStorage = [];

//cuando se apreta el boton de agregar producto se ejecuta toda esta funcion
let guardar = document
  .getElementById("pantallaCargaAdd")
  .addEventListener("click", function () {
    let producto = document.getElementById("cargaProductoNombre").value;
    let categoria = document.getElementById("cargaProductoCategoria").value;
    let descripcion = document.getElementById("cargaProductoDescripcion").value;
    let modelo = `<li class="list-group-item" data-producto="${producto}" data-categoria="${categoria}" data-descripcion="${descripcion}">
    <img src="${categoria}" class="pantallaListado__icono">
    ${producto}
    </li>`;
    pantallaListadoLista.innerHTML += modelo;

    //pantalla vacia deja de estar visible
    pantallaVacia.style.display = "none";
    pantallaListado.style.display = "block";

    //vaciar formularios
    document.getElementById("cargaProductoNombre").value = "";
    document.getElementById("cargaProductoCategoria").value = "";
    document.getElementById("cargaProductoDescripcion").value = "";

    //ocultar pantalla de carga
    cargaProducto.hide();

    // //Guarda item en LocalStorage
    // listadoStorage.push(modelo);
    // localStorage.setItem("listaCompras", listadoStorage);
  });

// if (localStorage.getItem("listaCompras")) {
//   pantallaVacia.style.display = "none";
//   pantallaListado.style.display = "block";
//   pantallaListadoLista.innerHTML += localStorage.getItem("listaCompras");
// }

let verDetalle = document
  .getElementById("pantallaListadoLista")
  .addEventListener("click", function (e) {
    document.getElementById("pantallaDetalleLogo").src =
      e.target.getAttribute("data-categoria");
    document.getElementById("pantallaDetalleTitulo").innerHTML =
      e.target.getAttribute("data-producto");
    document.getElementById("pantallaDetalleDescripcion").innerHTML =
      e.target.getAttribute("data-descripcion");
    pantallaListado.style.display = "none";
    pantallaDetalle.style.display = "block";
  });

let pantallaDetalleCerrar = document
  .getElementById("pantallaDetalleCerrar")
  .addEventListener("click", function () {
    pantallaListado.style.display = "block";
    pantallaDetalle.style.display = "none";
  });
