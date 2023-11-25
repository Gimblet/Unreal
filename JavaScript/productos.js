//! ------------------------------ Cambiar Imagen Segun Click -------------------------------
//! Se encarga de llamar la funcion creada Arriba dependiendo en donde se de click

//todo Optimizar Codigo

// document.addEventListener('click', function (e) {
//   document.getElementById(e.target.id).onclick = function () {
//     cambiarImagenPrincipal(e.target.id);
//   }
// }, false);

document.getElementById("Aux1").onclick = function () {
  cambiarImagenPrincipal("Aux1");
}

document.getElementById("Aux2").onclick = function () {
  cambiarImagenPrincipal("Aux2");
}

if (document.getElementById("Aux3") != null) {
  document.getElementById("Aux3").onclick = function () {
    cambiarImagenPrincipal("Aux3");
  }
}

if (document.getElementById('Aux4') != null) {
  document.getElementById("Aux4").onclick = function () {
    cambiarImagenPrincipal("Aux4");
  }
}

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
    let zapatillas = document.getElementById("Zapatillas");

    if (zapatillas != null) {
      return tempZapatillas(temp);
    }
    else {
      return tempCarteras(temp);
    }
  }

  function tempZapatillas(temp) {
    if (auxn == "Aux1") { return temp = "1"; }
    else if (auxn == "Aux2") { return temp = "2"; }
    else if (auxn == "Aux3") { return temp = "3"; }
    else if (auxn == "Aux4") { return temp = "4"; }
    else { return temp = "1"; }
  }

  function tempCarteras(temp) {
    if (auxn == "Aux1") { return temp = "1"; }
    else if (auxn == "Aux2") { return temp = "2"; }
    else if (auxn == "Aux3") { return temp = "3"; }
    else { return temp = "1"; }
  }

  function obtenerRutaFinal() {
    for (i = 0; i < ArrayAux.length; i++) {
      c++;
      var temp = ArrayAux[i];
      if (posicionNumeroImg() == c) {
        obtenerTemp(temp);
      }
      rutaFinal = rutaFinal + temp;
    }
  }
  obtenerRutaFinal();

  document.getElementById("Prod-Main").setAttribute("src", rutaFinal);
}

//! -------------------------------- Agregar Producto Al carrito ----------------------------------

//! Obtiene La información del Producto (srcImagen, Titulo y Precio) y almacena esos datos en un array Producto, luego retorna ese Array (56 -> 75)

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

var cantidadElementos = 0; //Almacena la cantidad de Productos Agregados Al Carrito
var precioAcumulado = 0.0;

//! Función Padre, se encarga de llamar Funciones mas complejas dandoles como parametro el Array Producto de la función Anterior (81 -> 85)

function agregarAlCarrito() {
  var Producto = obtenerInfoProducto();
  guardarElementos(Producto);
  agregarElementos(Producto);
}

//! Se encarga de Abrir , Cerrar o Limpiar el carrito de Compras

function abrirCarrito() {
  document.getElementById("General").style.display = "block";
  document.getElementById("dim").style.display = "block";
}

function cerrarCarrito() {
  document.getElementById("dim").style.display = "none";
  document.getElementById("General").style.display = "none";
}

function limpiarCarrito() {
  sessionStorage.clear();
  alert("Todos Los Elementos en el carrito fueron Limpiados Correctamente")
  window.location.reload();
}

//? -------------------------------- Session Storage Set (Parte 1) -----------------------------------

//! Se encarga de Almacenar los Elementos cuando el usuario Hace click en agregar al carrito, Guarda tanto la cantidad de Productos que el usuario Agregó, Asi como la información del producto en si

function guardarElementos(Producto) {
  function guardarCantidad() {
    cantidadElementos++;
    sessionStorage.setItem("cantidadElementos", cantidadElementos); // El Nombre Clave para acceder es Prueba
  }
  guardarCantidad();

  function guardarProductos() {
    var productoAlmacenado = "ProductoAlmacenado" + cantidadElementos;
    sessionStorage.setItem(productoAlmacenado, JSON.stringify(Producto)); // El Nombre Clave para acceder Es Producto Almacenado + La cantidad de Elementos creados
  }
  guardarProductos();

  function guardarPrecio() {
    precioAcumulado += Number(Producto[2]);
    sessionStorage.setItem("PrecioAcumulado", precioAcumulado);
  }
  guardarPrecio();
}

//? ---------------------------------------------------------------------------------------------------

//! Se encarga de Agregar Elementos Tomando los datos del Array Producto que tiene como Parametro (125 -> 172)

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
    CPrecio.innerHTML = 'S/ ' + Producto[2];
    document.querySelector(".ElementoTexto" + cantidadElementos).appendChild(CPrecio);
  }
  agregarPrecio();

  document.getElementById("precioTotal").innerHTML = "S/ " + ObtenerPrecioAcumulado();

  abrirCarrito();
}

document.getElementById("Btn-Agregar").onclick = agregarAlCarrito;

//? -------------------------------------------- Session Storage Get (Parte 2) --------------------------------------

//! Se encarga de Obtener los valores previamente Almacenados

function ObtenerCantidad() {
  cantidadElementos = Number(sessionStorage.getItem("cantidadElementos"));
}

function ObtenerPrecioAcumulado() {
  return precioAcumulado = Number(Number(sessionStorage.getItem("PrecioAcumulado")).toFixed(2));
}

//! Obtiene los valores almacenados y los restaura uno a uno (184 -> 236)

function ObtenerProductos() {
  for (var i = 1; i <= cantidadElementos; i++) {
    var elementoCarrito = JSON.parse(sessionStorage.getItem("ProductoAlmacenado" + i));
    agregarElementosExistentes(elementoCarrito, i);
  }
}

function agregarElementosExistentes(elementoCarrito, numeroElemento) {
  function agregarContenedor() {
    //Crea el contenedor del Elemento
    var CContenedor = document.createElement("div");
    CContenedor.className = "ElementoCarrito" + numeroElemento + " ElementoCarrito";
    document.querySelector(".contentMenu").appendChild(CContenedor);
  }
  agregarContenedor();

  //Obtiene la imagen y la Agrega
  function agregarImagen() {
    var CImagen = document.createElement("img");
    CImagen.className = 'Elemento-Img'
    CImagen.src = elementoCarrito[0];
    document.querySelector(".ElementoCarrito" + numeroElemento).appendChild(CImagen);
  }
  agregarImagen();

  function agregarContenedorInterno() {
    //Crea el contenedor del Titulo y Precio
    var CContenedor = document.createElement("div");
    CContenedor.className = "ElementoTexto" + numeroElemento + " ElementoTexto";
    document.querySelector(".ElementoCarrito" + numeroElemento).appendChild(CContenedor);
  }
  agregarContenedorInterno();

  //Obtiene el Titulo y lo Agrega
  function agregarTitulo() {
    var CTitulo = document.createElement("h4");
    CTitulo.className = 'Elemento-Titulo';
    CTitulo.innerHTML = elementoCarrito[1];
    document.querySelector(".ElementoTexto" + numeroElemento).appendChild(CTitulo);
  }
  agregarTitulo();

  //Obtiene el Precio y lo Agrega
  function agregarPrecio() {
    var CPrecio = document.createElement("h4");
    CPrecio.className = 'Elemento-Precio';
    CPrecio.innerHTML = 'S/' + elementoCarrito[2];
    document.querySelector(".ElementoTexto" + numeroElemento).appendChild(CPrecio);
  }
  agregarPrecio();

  document.getElementById("precioTotal").innerHTML = "S/ " + ObtenerPrecioAcumulado();
}

//? --------------------------------------------------------------------------------------------------------

//! Llama funciones que necesitan ejecutarse antes que todo

document.body.setAttribute("onload", "ObtenerCantidad(), ObtenerProductos()", "ObtenerPrecioAcumulado()");