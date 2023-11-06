//! ///////////////// Header /////////////////////
//! Se encarga que al Hacer Hover en el Header, este cambie (Linea 3 -> Linea 30)
function headerOnHover() {
  fondoEncabezadoABlanco();
  textoEncabezadoANegro();
  imagenesEncabezadoANegro();
}

function fondoEncabezadoABlanco() {
  return (
    document.querySelector("header").style.backgroundColor = "white",
    document.querySelector("header").style.transition = "all 0.35s linear"
  )
}

function textoEncabezadoANegro() {
  let Textos = document.getElementsByClassName("color");
  for (i = 0; i < Textos.length; i++) {
    Textos[i].style.color = "black";
  }
}

function imagenesEncabezadoANegro() {
  document.getElementById("unrealLogo").setAttribute("src", "../Logos/Logo negro.png");
  let iconos = document.getElementsByClassName("icon");
  iconos[0].setAttribute("src", "../Iconos/Negro/Ncarrito-de-compras.png");
  iconos[1].setAttribute("src", "../Iconos/Negro/Nusuario.png");
  iconos[2].setAttribute("src", "../Iconos/Negro/Nbusqueda.png");
  iconos[3].setAttribute("src", "../Iconos/Negro/Nmenu-hamburguesa.png");
}

//!Se encarga que al Hacer OnMouseOut en el Header, este cambie a como estaba originalmente (Linea 33 -> Linea 60)
function headerOnMouseOut() {
  fondoEncabezadoPorDefecto();
  textoEncabezadoPorDefecto();
  imagenesEncabezadoABlanco();
}

function fondoEncabezadoPorDefecto() {
  return (
    document.querySelector("header").style.backgroundColor = "transparent",
    document.querySelector("header").style.transition = "all 0.35s linear"
  )
}

function textoEncabezadoPorDefecto() {
  let Textos = document.getElementsByClassName("color");
  for (i = 0; i < Textos.length; i++) {
    Textos[i].style.color = "white";
  }
}

function imagenesEncabezadoABlanco() {
  document.getElementById("unrealLogo").setAttribute("src", "../Logos/Logo blanco.png");
  let iconos = document.getElementsByClassName("icon");
  iconos[0].setAttribute("src", "../Iconos/carrito-de-compras.png");
  iconos[1].setAttribute("src", "../Iconos/usuario (1).png");
  iconos[2].setAttribute("src", "../Iconos/busqueda.png");
  iconos[3].setAttribute("src", "../Iconos/menu-hamburguesa.png");
}

//! ///////////////// Novedades Para Hombres /////////////////////
//! Se encarga de redimensionar la Seccion Novedades para Hombres (Pantalones)

//! Se Encarga de Renderizar el Height de la iamgen (Pantalones) de acuerdo a el tamaño de la pantalla

function obtenerHeightPantallaPX() {
  return window.innerHeight + "px";
}

function modificarHeightSecciones() {
  document.getElementById("novedadesHombres").style.height = obtenerHeightPantallaPX();
  document.getElementById("seccionSnakers").style.height = obtenerHeightPantallaPX();
}

document.body.setAttribute("onload", "modificarHeightSecciones()");

//? Cambiar nombres de Clase del section para que sea mas legible?