$(document).ready(function(){
  
// getting the image
    // var movie = localStorage.getItem('data-movie-id');
    // var div = $("#movie-cards");
    
    // console.log(movie);

    

    // if(data-id === 580489 ){
      
    //   var img = document.createElement('img');

    //   img.src = 'https://movieweb.com/movie/venom-2/';
    //   document.getElementById("movie-cards").appendChild(img);
    //   }





    //     //       watchlist.js >

    //     // 1. Get the movie id from local storage

    //     // 2. perform the API call to the above link using the movie id that you stored

    //     // 3. append (just like you did in the home page)





    // // HAMBURGER MENU //
    // function myFunction() {
    //       var x = document.getElementById("myLinks");
    //       if (x.style.display === "block") {
    //         x.style.display = "none";
    //       } else {
    //         x.style.display = "block";
    //       }
    //    };
    




      // On click event 
      // setting and then getting the val()

      // HOVER FOR ADDING BUTTON

      $(".add").hover(function(){

        $(this).mouseenter( function(){
          $(this).attr("src", "../Watchya/images/plus.png");
      })
        $(this).mouseleave( function(){
          $(this).attr("src", "../Watchya/images/add.png");
      })
      });




      // ADDING TO WATCH LATER //

      $(".remove-movies").click(function(){

        $("#movie-cards").remove();

      })

        
      
      

      
    
});