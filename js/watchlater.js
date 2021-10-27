$(document).ready(function(){
  
  
    // HAMBURGER MENU //
    function myFunction() {
          var x = document.getElementById("myLinks");
          if (x.style.display === "block") {
            x.style.display = "none";
          } else {
            x.style.display = "block";
          }
       };




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

      $(document.body).on('click', '.add' ,function(){
        
        id = $(this).data("data-movie-id");
        console.log(id);

        //setting the image
        
        var image = document.getElementById("data-movie-id");
        localStorage.setItem('data-movie-id', image);

        // getting the image
        var movie = localStorage.getItem('data-movie-id');
        document.getElementsByClassName('movie-cards').innerHTML = movie;

        
      });

      
    
});