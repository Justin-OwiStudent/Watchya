
$(document).ready(function () {

 const url = 'https://api.themoviedb.org/3/movie/popular?api_key=60d58f5803d2a10a9d7bc0427dbc5023&language=en-US&page=1'

  

  $.getJSON(url, function (result) {
    console.log(result);

    for (i = 0; i < 10; i++) {

      $(".header-home").append(
        


      );

      $(".movie").append(

        "<div class='col-12 col-md-6 col-lg-3 card-container'>\
            <div class='card'>\
               <div class='img-top'>\
               <img src='https://image.tmdb.org/t/p/original"+result.results[i].poster_path+"'class='card-img-top img-fluid' alt=''>\
               </div>\
               <div class='card-body'>\
                  <h3>" + result.results[i].title + "</h3>\
                  <div class='btn'><h4> Watch Now</h4>\
                  </div>\
                  <div class='add'>\
                  <img src= ../Watchya/images/add.png>\
                  </div>\
                  <h2> " + result.results[i].vote_average + " </h2>\
               </div>\
            </div>\
         </div>"

      
      ); 
    }

  

  });

  $("burger").on(function(){
    $(".overlay").css("display", "block")
  });


});
