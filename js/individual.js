$(function(){

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');

    console.log(id);

     const url = "https://api.themoviedb.org/3/movie/"+ id +"?api_key=60d58f5803d2a10a9d7bc0427dbc5023&language=en-US"
 //const imgurl = " https://api.themoviedb.org/3/movie/"+ id +"/images?api_key=60d58f5803d2a10a9d7bc0427dbc5023&language=en-US"

    $.getJSON(url, function(result){

        console.log( result);

         

         film_name =  result.original_title;
         film_desc =  result.overview;
         postrer = "https://image.tmdb.org/t/p/original" + result.poster_path ;
          rating = result.vote_average;
          Prod = result.genres[0].name;
          ageRating =  result.adult;
          bgimg = "https://image.tmdb.org/t/p/original" + result.backdrop_path ;
          // bgimg = ' https://image.tmdb.org/t/p/original"+ result.backdrop_path + " ';
          language = result.original_language;
          date =   result.release_date;
         studio = result.production_companies[0].name;
        

         if(language=== "en"){
            $(".Speak").text("English");
        } else {
            $(".Speak").text ( language );
        }
       
        if( ageRating === false){
            $(".Age-rating").text("Pg-13");
        } else {
            $(".Age-rating").text ("16+" );
        }

        
       

     console.log(bgimg)

        $(".title").text(film_name);
        $(".Date").text(date);
    
        $(".Dur").text( studio);
   

        $(".hover").css("background-image", "url(" + bgimg + ")");
       
         $(".Movie-picture").css("background-image", "url(" + postrer + ")");
         //$(".Movie-picture").attr("src",  postrer);

        

        $(".Rating").text(" Rating: "+ rating);
        $(".Vote-ammount").text(Prod );

        $(".descriptin").text ( film_desc );

        $("burger").on(function () {
        $(".overlay").css("display", "block")
      });
      $(".Watch-button").click(function(){
          
        alert("Your movie has been added to the watch later page");
        
    });

    $(".Watch-button").on("click", function(){

       

  
        var Film_name = result.original_title
        var Rating = result.vote_average
        var Poster = result.poster_path
       // var telNum = $().val();
      //  var pass1 = $().val();
       // var pass2 = $().val();
    
        console.log(Film_name);
        console.log(Rating);
        console.log(Poster);
       // console.log(telNum);
      // console.log(pass1);
       // console.log(pass2);
    
        
       sessionStorage.setItem("name", Film_name); 
       sessionStorage.setItem("rating", Rating);
       sessionStorage.setItem("poster", Poster);
         
    
      });
 


 
    
   
});


    });
    
