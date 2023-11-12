//! ///////////////// Cambiar Imagen Segun Click /////////////
function cambiarImagenPrincipal(auxn) {
  var rutaInicial = document.getElementById(auxn).src;
  var ArrayAux = new Array(rutaInicial.length);
  var rutaFinal = '';
  var c = 0;

  function crearArregloAuxiliar() {
    for (i = 0; i < ArrayAux.length; i++) {
      ArrayAux[i] = rutaInicial[i];
    }
  }
  crearArregloAuxiliar();

  function posicionNumeroImg() {
    var pos = ArrayAux.length;
    return pos - 4;
  }

  function obtenerTemp(temp) {
    if (auxn == "Aux1") { return temp = "1"; }
    else if (auxn == "Aux2") { return temp = "2"; }
    else if (auxn == "Aux3") { return temp = "3"; }
    else { return temp = "1"; }
  }

  function obtenerRutaFinal() {
    for (i = 0; i < ArrayAux.length; i++) {
      c++;
      var temp = ArrayAux[i];
      if (posicionNumeroImg() == c) { obtenerTemp(temp); }
      rutaFinal = rutaFinal + temp;
    }
  }
  obtenerRutaFinal();

  document.getElementById("Prod-Main").setAttribute("src", rutaFinal);
}

//! Se encarga de llamar la funcion creada Arriba dependiendo en donde se de click

document.getElementById("Aux1").onclick = function () {
  cambiarImagenPrincipal("Aux1");
}

document.getElementById("Aux2").onclick = function () {
  cambiarImagenPrincipal("Aux2");
}

document.getElementById("Aux3").onclick = function () {
  cambiarImagenPrincipal("Aux3");
}

//! /////////////////// Agregar Producto Al carrito /////////////////

function obtenerInfoProducto() {
  var imagenProducto = document.getElementById("Prod-Main").src;
  var direccionImagen = '';
  var tituloProducto = document.getElementById("Producto-Titulo").textContent;
  var precioProducto = document.getElementById("Producto-Precio").textContent;

  function obtenerDireccionImagen() {
    for (i = 0; i < imagenProducto.length; i++) {
      var temp = imagenProducto[i];
      direccionImagen = direccionImagen + temp;
    }
  }
  obtenerDireccionImagen();

  var Producto = new Array(direccionImagen, tituloProducto, precioProducto);

  return Producto;
}

//! Funcion Incompleta

var cantidadElementos = 0;

function agregarAlCarrito() {
  var Producto = obtenerInfoProducto();
  agregarElementos(Producto);
  cantidadElementos++;
}

function agregarElementos(Producto) {
  function agregarContenedor() {
    //Crea el contenedor del Elemento
    var CContenedor = document.createElement("div");
    CContenedor.className = "ElementoCarrito" + cantidadElementos + " ElementoCarrito";
    document.querySelector(".contentMenu").appendChild(CContenedor);
  }
  agregarContenedor();

  //Obtiene la imagen y la Agrega
  function agregarImagen() {
    var CImagen = document.createElement("img");
    CImagen.className = 'Elemento-Img'
    CImagen.src = Producto[0];
    document.querySelector(".ElementoCarrito" + cantidadElementos).appendChild(CImagen);
  }
  agregarImagen();

  function agregarContenedorInterno() {
    //Crea el contenedor del Titulo y Precio
    var CContenedor = document.createElement("div");
    CContenedor.className = "ElementoTexto" + cantidadElementos + " ElementoTexto";
    document.querySelector(".ElementoCarrito" + cantidadElementos).appendChild(CContenedor);
  }
  agregarContenedorInterno();

  //Obtiene el Titulo y lo Agrega
  function agregarTitulo() {
    var CTitulo = document.createElement("h4");
    CTitulo.className = 'Elemento-Titulo';
    CTitulo.innerHTML = Producto[1];
    document.querySelector(".ElementoTexto" + cantidadElementos).appendChild(CTitulo);
  }
  agregarTitulo();

  //Obtiene el Precio y lo Agrega
  function agregarPrecio() {
    var CPrecio = document.createElement("h4");
    CPrecio.className = 'Elemento-Precio';
    CPrecio.innerHTML = Producto[2];
    document.querySelector(".ElementoTexto" + cantidadElementos).appendChild(CPrecio);
  }
  agregarPrecio();
  abrir();

}

function abrir() {
  document.getElementById("General").style.display = "block";
}

function cerrar() {
  document.getElementById("General").style.display = "none";
}

document.getElementById("Btn-Agregar").onclick = agregarAlCarrito;