window.addEventListener("load", function(){

  var urlSearchParams = new URLSearchParams(window.location.search)
  var idPelicula = urlSearchParams.get('idPelicula')
  console.log(idPelicula);

  var API_KEY = "928ad4dee3a02646fa1725b8bcaa2a96"
  var url = "https://api.themoviedb.org/3/movie/"+idPelicula+"?api_key="+API_KEY
  fetch(url)
    .then(function(response){
      return response.json();
    })
    .then(function(objetoLiteralRespuesta) {
      console.log(objetoLiteralRespuesta);

      var ul = document.querySelector('section ul')
      // PARTE FIJA DE LA URL DE LA IMAGEN
      var urlImg = "https://image.tmdb.org/t/p/original"

      var li = ""
      li = "<li>"
      li +=   "<p>"+objetoLiteralRespuesta.title+"</p>"
      li +=   "<img src='"+urlImg + objetoLiteralRespuesta.poster_path+"' style='width:300px;'>"
      li +=   "<p>"+objetoLiteralRespuesta.overview+"</p>"
            li +=   "<p>"+objetoLiteralRespuesta.original_language+"</p>"
            li +=   "<p>"+objetoLiteralRespuesta.release_date+"</p>"
      li += "</li>"

      ul.innerHTML += li

    })
    .catch(function(error) {
      console.log("the error was: " + error);
    })

})
var idPelicula = new URLSearchParams (window.location.search).get("idPelicula")
fetch ("https://api.themoviedb.org/3/movie/" + idPelicula + "?api_key=928ad4dee3a02646fa1725b8bcaa2a96&language=en-US&page=1")
.then(function(response) {
return response.json();
})
.then(function(information) {
  console.log(information);
var detallesPeliculas = information
console.log(detallesPeliculas);
var id = detallesPeliculas.id
document.querySelector("section iframe").src += key
})
.catch(function(error) {
console.log("There was an error: " + error);
})
