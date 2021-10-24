$(document).ready(function(){
  console.log("ready");

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

      $(".space-2").click(function(){

        console.log("morning")
      //    var json_entry = {'title': titleField.val(),
      //             'image': $(".movie-cards").val(), 
      //              };

      //   var movieObj = JSON.stringify(json_entry);
      //   localStorage.setItem("movieTest", movieObj);

      //   var image = localStorage.getItem("movieTest");
      //   var obj = JSON.parse(image);
      //    document.getElementsByClassName(".movie-cards").innerHTML = obj.image;


      //   var movie = [ 

          
      //   ];

        var title = document.getElementsByClassName(".card-body");

       });


    
});