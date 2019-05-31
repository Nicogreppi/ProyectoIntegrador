/*  //10) Creacion de Elementos
var deportesPreferidos = ["Hockey", "Polo", "Rugby"]

var deportes = prompt("Ingrese sus 3 deportes preferidos separados por comas")

var deportesArray = deportes.split(",")

var deportesUL = document.querySelector(".sports-list")

if (esDeportePreferido(deportesArray[0], deportesPreferidos)) {
  deportesUL.innerHTML += "<li style='font-style:italic'>" + deportesArray[0] + "</li>"
} else {
  deportesUL.innerHTML += "<li>" + deportesArray[0] + "</li>"
}

if (esDeportePreferido(deportesArray[1], deportesPreferidos)) {
  deportesUL.innerHTML += "<li style='font-style:italic'>" + deportesArray[1] + "</li>"
} else {
  deportesUL.innerHTML += "<li>" + deportesArray[1] + "</li>"
}

if (esDeportePreferido(deportesArray[2], deportesPreferidos)) {
  deportesUL.innerHTML += "<li style='font-style:italic'>" + deportesArray[2] + "</li>"
} else {
  deportesUL.innerHTML += "<li>" + deportesArray[2] + "</li>"
}

*/
