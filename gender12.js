window.addEventListener("load", function(){
  var urlSearchParams = new URLSearchParams(window.location.search)
 var pelisPorGenero = urlSearchParams.get('pelisPorGenero')
 console.log(pelisPorGenero);

  fetch("https://api.themoviedb.org/3/discover/movie?api_key=928ad4dee3a02646fa1725b8bcaa2a96&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1")
  .then(function(response){
    return response.json();
  })
  .then(function(objetoLiteralRespuesta){
  console.log(objetoLiteralRespuesta);

  var arrayDePeliculas = objetoLiteralRespuesta.results

  var ul = document.querySelector("section ul")

  var li = ""

  var urlImg = "https://image.tmdb.org/t/p/original"
       // RECORRO EL ARRAY DE PELIS
       for (var i = 0; i < arrayDePeliculas.length; i++) {
           li = "<li>"
           li +="<a href='detalle.html?idPelicula="+arrayDePeliculas[i].id+"'>"
           li +=   "<p>"+arrayDePeliculas[i].title+"</p>"
           li +=   "<img src='"+urlImg + arrayDePeliculas[i].poster_path+"' style='width:300px;'>"
           li +="</a>"
           li += "</li>"

           ul.innerHTML += li
       }
     })
     .catch(function(error) {
       console.log("the error was: " + error);
     })
   })
