window.onload = function(){

  // if (window.sessionStorage.getItem("nombre")!="" && window.sessionStorage.getItem("nombre")!=null) {
  // alert("Bienvenido "+ window.sessionStorage.getItem("nombre"))
  // document.querySelector('a button.login').innerHTML = window.sessionStorage.getItem("nombre")
  // }

  var queryString = location.search
  var searchParams = new URLSearchParams(queryString);
  var id = searchParams.get("idGenero")
  var key = '2816f7e0d88c5c7abbd4003375fc50fe'
  var url
  var urlGenero = "pelisGenero.html"


    fetch("https://api.themoviedb.org/3/genre/movie/list?api_key="+key+"&language=en-US")

        .then(function(respuesta) {
         return respuesta.json()
       })
        .then(function(informacion) {
         var genero = informacion.genres
         console.log(informacion)
         var ul = document.querySelector("section ul")
         //var arrayDePeliculas = genres[]
         console.log(genero);
         for (var i = 0; i < genero.length ; i++) { //informacion.results.length
           // genero[i]
          var li;

          li = '<li>'
          li += "<a href='"+urlGenero+"?idGenero="+genero[i].id+"'>"
          li += '<h2>' + genero[i].name + '</h2>'
          li += "</a>"
          li += '</li>'
          ul.innerHTML += li

          console.log(li);

         }
        })
        .catch(function(error){
          console.log("There was na error: " + error);
        })


}
