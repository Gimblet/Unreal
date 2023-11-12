//! ///////////////// Cambiar Imagen Segun Click /////////////
function cambiarImagenPrincipal(auxn) {
  var rutaInicial = document.getElementById(auxn).src;
  var Aux1 = new Array(rutaInicial.length);
  var rutaFinal = '';
  var c = 0;

  function crearArregloAuxiliar() {
    for (i = 0; i < Aux1.length; i++) {
      Aux1[i] = rutaInicial[i];
    }
  }
  crearArregloAuxiliar();

  function posicionNumeroImg() {
    var pos = Aux1.length;
    return pos - 4;
  }

  function obtenerRutaFinal() {
    for (i = 0; i < Aux1.length; i++) {
      c++;
      var temp = Aux1[i];
      if (posicionNumeroImg() == c) {
        if (auxn == "Aux1") {
          temp = "1";
        }
        else if (auxn == "Aux2") {
          temp = "2";
        }
        else if (auxn == "Aux3") {
          temp = "3";
        }
        else {
          temp = "1";
        }
      }
      rutaFinal = rutaFinal + temp;
    }
  }
  obtenerRutaFinal();

  document.getElementById("Prod-Main").setAttribute("src", rutaFinal);
}