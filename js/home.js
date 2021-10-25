
$(document).ready(function () {

  const url = 'https://api.themoviedb.org/3/movie/popular?api_key=60d58f5803d2a10a9d7bc0427dbc5023&language=en-US&page=1'



  $.getJSON(url, function (result) {
    console.log(result);

    for (i = 0; i < 10; i++) {

      $(".header-home").append(



      );

      $(".movie").append(

        "<div class='col-12 col-md-6 col-lg-2 col-xl-2  card-container'>\
            <div class='card'>\
               <div class='img-top'>\
               <img src='https://image.tmdb.org/t/p/original"+ result.results[i].poster_path + "' id='click-this' class='card-img-top img-fluid' alt=''>\
               </div>\
               <div class='card-body'>\
                  <h3>" + result.results[i].title + "</h3>\
                  <a href='pages/individual.html?id=" + result.results[i].id + "'> <div class='btn'>\<h4> Watch Now</h4>\
                  </div>\</a>\
                  <div class='add'>\
                  <img src= ../Watchya/images/added.svg>\
                  </div>\
                  <h2> " + result.results[i].vote_average + " </h2>\
               </div>\
            </div>\
         </div>"


//         "<div id='carouselExampleFade' class='carousel slide carousel-fade' data-bs-ride='carousel' >\
//         <div class='carousel-inner'>\
//           <div class='carousel-item'>\
//             <div class='col-12 col-md-6 col-lg-2 col-xl-2  card-container'>\
//               <div class='card'>\
//                 <div class='img-top'>\
//                   <img src='https://image.tmdb.org/t/p/original'"+ result.results[i].poster_path + "' class='card-img-top img-fluid' alt=''>\
//                 </div>\
//                 <div class='card-body'>\
//                   <h3>" + result.results[i].title + "</h3>\
//                   <div class='btn'><h4> Watch Now </h4>\
//                   </div>\
//                   <div class='add'>\
//                     <img src= ../Watchya/images/add.png>\
//                   </div>\
//                   <h2> " + result.results[i].vote_average + " </h2>\
//                 </div>\
//               </div>\
//             </div>\
//           </div>\
//         </div>\
//         <button class='carousel-control-prev' type='button' data-bs-target='#carouselExampleFade' data-bs-slide='prev'>\
//           <span class='carousel-control-prev-icon' aria-hidden='true'></span>\
//           <span class='visually-hidden'>Previous</span>\
//         </button>\
//         <button class='carousel-control-next' type='button' data-bs-target='#carouselExampleFade' data-bs-slide='next'>\
//           <span class='carousel-control-next-icon' aria-hidden='true'></span>\
//           <span class='visually-hidden'>Next</span>\
//         </button>\
// </div >"

      
      );
    }



  });

  $("burger").on(function () {
    $(".overlay").css("display", "block")
  });


});
