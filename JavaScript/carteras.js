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