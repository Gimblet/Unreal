//!Header

function headerOnHover() {
  changeHeaderBackgroundColor();
  changeHeaderTextColorToBlack();
}

function changeHeaderBackgroundColor() {
  return (
    document.querySelector("header").style.backgroundColor = "white",
    document.querySelector("header").style.transition = "all 0.35s linear"
  )
}

function changeHeaderTextColorToBlack() {
  let Textos = document.getElementsByClassName("color");
  for (i = 0; i < Textos.length; i++) {
    Textos[i].style.color = "black";
  }
}

function changeHeaderTextColorToWhite() {
  let Textos = document.getElementsByClassName("color");
  for (i = 0; i < Textos.length; i++) {
    Textos[i].style.color = "white";
  }
}

function headerOnMouseOut() {
  document.querySelector("header").style.backgroundColor = "transparent";
  changeHeaderTextColorToWhite();
}

//Falta Cambiar las imagenes del Header on Hover y en MouseOut