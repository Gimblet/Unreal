//! ///////////// Cambiar Imagen Segun Click //////////
function cambiarAPrimeraImagen() {
  var rutaInicial = document.getElementById("Aux1").src;
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
        temp = "3";
      }
      rutaFinal = rutaFinal + temp;
    }
  }
  obtenerRutaFinal();

  document.getElementById("Prod-Main").setAttribute("src", rutaFinal);
}

document.getElementById("Aux1").addEventListener("click", cambiarAPrimeraImagen);