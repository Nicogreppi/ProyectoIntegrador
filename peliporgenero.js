window.onload = function(){

  // if (window.sessionStorage.getItem("nombre")!="" && window.sessionStorage.getItem("nombre")!=null) {
  // alert("Bienvenido "+ window.sessionStorage.getItem("nombre"))
  // document.querySelector('a button.login').innerHTML = window.sessionStorage.getItem("nombre")
  // }


  console.log("cargaaaaaaaaaaaaaa");
  var queryString = location.search
  var searchParams = new URLSearchParams(queryString);
  var id = searchParams.get("idGenero")
  var key = '2816f7e0d88c5c7abbd4003375fc50fe'
  var urlImg = "https://image.tmdb.org/t/p/original"
  var urlDetalle = "detalles(1).html"
  //Pelis
  if(searchParams.has("idGenero")){


    fetch("https://api.themoviedb.org/3/discover/movie?api_key="+key+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres="+id)
        .then(function(respuesta) {
         return respuesta.json()
       })
        .then(function(informacion) {
         var peliculas = informacion.results
         console.log(informacion)

           for (var i = 0; i < 10 ; i++) { //informacion.results.length
             console.log('esto es informacion' + peliculas);
             var title = peliculas[i].title
             var poster =  peliculas[i].poster_path;
             //var id = peliculas[i].id

            var li;
            li = "<li>"
            li += "<a href='"+urlDetalle+"?id="+peliculas[i].id+"'>"
            li += "<h1>"+ title +"</h1>"
            li += '<img src='+ urlImg + poster + '>'
            li += "</a>"
            li += "</li>"

            console.log(li);
            document.querySelector("section ul").innerHTML += li
           }
        })
        .catch(function(error){
              console.log("There was na error: " + error);
        })
  }

}

// var key = '14227022544b0f4bb15b6a738161d32f'
// var urlDetalle = "pagina5.html"
//
// var queryString = location.search
// var urlSearch = new URLSearchParams(window.location.search)
// var id = searchParams.get("idGenero")

//
// fetch("https://api.themoviedb.org/3/discover/movie?api_key="+key+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1")
// .then (function(response) {
//   return response.json();
// })
// .then (function(information){
//   console.log(information);
//   console.log(information.results);
//   var arrayDePeliculas = information.results
//   var urlImg = "https://image.tmdb.org/t/p/original"
//   var poster
//   var title
//   var li
//   //var ul = document.querySelector("section.populares ul")
//   var ul = document.querySelector("section ul")
//   //var ul2 = document.querySelector("section.comingSoon ul")
//
//
//   for (var i = 0; i < 25; i++) {
//       poster = arrayDePeliculas[i].poster_path
//       title = arrayDePeliculas[i].title
//       console.log(arrayDePeliculas[i].title)
//
//      // li = "<li class='mySlides2'>"
//       // li += '<h1>'+ title +'</h1>'
//       // li += '<img src='+ urlImg + poster + '>'
//       // li += '</li>'
//       // ul1.innerHTML += li
//       li = "<li>"
//       li += "<a href='"+urlDetalle+"?id="+arrayDePeliculas[i].id+"'>"
//       li += "<h1>"+ title +"</h1>"
//       li += '<img src='+ urlImg + poster + '>'
//       li += "</a>"
//       li += "</li>"
//       ul.innerHTML += li
//     //console.log(poster);
//    }
//
//   })
//    .catch(function(error){
//       console.log("There was na error: " + error);
//     })
// }
