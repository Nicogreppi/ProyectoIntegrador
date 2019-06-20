var api_key = "2816f7e0d88c5c7abbd4003375fc50fe"
var urlPopulares = "https://api.themoviedb.org/3/movie/popular?api_key="+api_key+"&language=en-US&page=1"
var urlValoradas = "https://api.themoviedb.org/3/movie/top_rated?api_key="+api_key+"&language=en-US&page=1"


//ESTRENOS (HOME)

fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=2816f7e0d88c5c7abbd4003375fc50fe&language=en-US&page=1")
.then(function(response) {
return response.json()
})
.then(function(data) {
  var imagen = document.querySelectorAll(".proximamente_peliculas")
 var srcImage = "https://image.tmdb.org/t/p/w500";
 for (var i =0; i<10; i++) {
   imagen[i].setAttribute("src", (srcImage + data.results[i].poster_path))
   }



})
.catch(function(error) {
console.log("The error was: " + error);
})

//POPULARES (HOME)
fetch(urlPopulares)
.then(function(response) {
return response.json()
})
.then(function(data) {
  var imagen = document.querySelectorAll(".peliculas_populares_soon")
 var srcImage = "https://image.tmdb.org/t/p/w500";
 for (var i =0; i<10; i++) {
   imagen[i].setAttribute("src", (srcImage + data.results[i].poster_path))
   }



})
.catch(function(error) {
console.log("The error was: " + error);
})

//MEJORES VALORADAS (HOME)

fetch(urlValoradas)
.then(function(response) {
return response.json()
})
.then(function(data) {
  var imagen = document.querySelectorAll(".mejor_valoradas_peliculas")
 var srcImage = "https://image.tmdb.org/t/p/w500";
 for (var i =0; i<10; i++) {
   imagen[i].setAttribute("src", (srcImage + data.results[i].poster_path))
   }



})
.catch(function(error) {
console.log("The error was: " + error);
})
