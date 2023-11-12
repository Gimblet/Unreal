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

function agregarAlCarrito() {
  var Producto = obtenerInfoProducto();
  agregarElementos(Producto);
}

function agregarElementos(Producto) {
  function agregarTitulo() {
    //Obtiene el Titulo y lo Agrega
    var CTitulo = document.createElement("h4");
    CTitulo.className = 'ElementoCarrito';
    CTitulo.innerHTML = Producto[1];
    document.querySelector("aside").appendChild(CTitulo);
  }
  agregarTitulo();

  function agregarPrecio() {
    //Obtiene el Precio y lo Agrega
    var CPrecio = document.createElement("h4");
    CPrecio.className = 'ElementoCarrito';
    CPrecio.innerHTML = Producto[2];
    document.querySelector("aside").appendChild(CPrecio);
  }
  agregarPrecio();

  function agregarImagen() {
    //Obtiene la imagen y la Agrega
    var CImagen = document.createElement("img");
    CImagen.className = 'ElementoCarritoImg'
    CImagen.src = Producto[0];
    document.querySelector("aside").appendChild(CImagen);
  }
  agregarImagen();
}

document.getElementById("Btn-Agregar").onclick = agregarAlCarrito;