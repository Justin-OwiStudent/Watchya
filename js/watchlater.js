$(document).ready(function(){
  console.log("watch later");
  
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

      $(".add-img").on("click", function(){

        // console.log("working");

        alert("working");

       });


    
});