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
  document.getElementById("unrealLogo").setAttribute("src", "Logos/Logo negro.png");
  let iconos = document.getElementsByClassName("icon");
  iconos[0].setAttribute("src", "Iconos/Negro/Ncarrito-de-compras.png");
  iconos[1].setAttribute("src", "Iconos/Negro/Nusuario.png");
  iconos[2].setAttribute("src", "Iconos/Negro/Nbusqueda.png");
  iconos[3].setAttribute("src", "Iconos/Negro/Nmenu-hamburguesa.png");
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
  document.getElementById("unrealLogo").setAttribute("src", "Logos/Logo blanco.png");
  let iconos = document.getElementsByClassName("icon");
  iconos[0].setAttribute("src", "Iconos/carrito-de-compras.png");
  iconos[1].setAttribute("src", "Iconos/usuario (1).png");
  iconos[2].setAttribute("src", "Iconos/busqueda.png");
  iconos[3].setAttribute("src", "Iconos/menu-hamburguesa.png");
}

//! Se encarga de Hacer que el Header Se muestre o Oculte segun el usuario hace scroll
function cambiarColoresHeaderOnScroll() {
  let header = document.body.querySelector("header").scrollTop;
  let documento = document.documentElement.scrollTop;
  if (header > 150 || documento > 150) {
    headerOnHover();
  }
  else if (header < 20 || documento < 20) {
    headerOnMouseOut();
  }
}

window.onscroll = function () { cambiarColoresHeaderOnScroll() };

//! ///////////////// SECCIONES /////////////////////
//! Se Encarga de Renderizar el Height de las secciones de acuerdo a el tamaño de la pantalla

function obtenerHeightPantallaPX() {
  return window.innerHeight + "px";
}

function modificarHeightSecciones() {
  document.getElementById("novedadesHombres").style.height = obtenerHeightPantallaPX();
  document.getElementById("seccionSnakers").style.height = obtenerHeightPantallaPX();
  document.getElementById("novedadesMujeres").style.height = obtenerHeightPantallaPX();
}

document.body.setAttribute("onload", "modificarHeightSecciones()");

//? Cambiar nombres de Clase del section para que sea mas legible?

// Se hace un efecto cada vez que el mouse pasa por una imagen

function acercarImagen(x)
{
    x.style.transform="scale(1.05)";  
    x.style.transition="all 1s"
}

function normalImagen(x)
{
    x.style.transform="scale(1)";
    x.style.transition="all 1s"
}

for(var n=0; n<document.getElementsByClassName("efecto").length; n++)
{
    document.getElementsByClassName("efecto")[n].setAttribute("onmouseover", "acercarImagen(this)");
    document.getElementsByClassName("efecto")[n].setAttribute("onmouseout", "normalImagen(this)");

}