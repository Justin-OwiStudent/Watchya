$(function(){

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');

    console.log(id);

     const url = "https://api.themoviedb.org/3/movie/"+ id +"?api_key=60d58f5803d2a10a9d7bc0427dbc5023&language=en-US"
 const imgurl = " https://api.themoviedb.org/3/movie/"+ id +"/images?api_key=60d58f5803d2a10a9d7bc0427dbc5023&language=en-US"

    $.getJSON(url, function(result){

        console.log( result);

         

         film_name =  result.original_title;
         film_desc =  result.overview;
         postrer = result.poster_path;
          rating = result.vote_average;
          Prod = result.genres[0].name;
          ageRating =  result.adult;
          bgimg = result.backdrop_path;
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

        //return (n + '').split('').map((i) => { return Number(i); })
       

     console.log(bgimg)

        $(".title").text(film_name);
        $(".Date").text(date);
    
        $(".Dur").text( studio);
   

        $(".hover").css("background-image", "url(" + bgimg + ")");
        $(".hover").css("background-image", "url( ../images/Venom.jpg )");
       // html.push(`<img src='${"../images/Venom.jpg"[4]}'/>`) 

        

        $(".Rating").text(" Rating: "+ rating);
        $(".Vote-ammount").text(Prod );


      

       
        $(".Movie-picture").css("background-image", "url(" + bgimg + ")");
    

        $(".descriptin").text ( film_desc );

    

    });
    
    $("burger").on(function () {
        $(".overlay").css("display", "block")
      });
 


 
    
   
});
