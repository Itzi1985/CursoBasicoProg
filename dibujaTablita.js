var fila = document.getElementById("contFilas");
var colum = document.getElementById("contColumnas");
var boton = document.getElementById("creaBoton");
boton.addEventListener("click", generaTabla);

function creaTabla() {
    var body = document.getElementsByTagName("body")[0];

    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");
    var c = parseInt(fila.value);
    var f = parseInt(colum.value);
    var contador1 = 0;
    var contador2 = 0;

    for (var i = 0; i < c; i++) {
        var filaAux = document.createElement("tr");

        contador1 = i + 1;

        for (var j = 0; j < f; j++) {

            
            contador2 = j+1;
            var celda = document.createElement("td");
            var textoCelda = document.createTextNode("celda  " + contador1 + ", columna " + contador2);
            celda.appendChild(textoCelda);
            filaAux.appendChild(celda);
 
        }

        tblBody.appendChild(filaAux);
    }

    tabla.appendChild(tblBody);
    body.appendChild(tabla);
    tabla.setAttribute("border", "3");
}

function generaTabla() {
    creaTabla();
}