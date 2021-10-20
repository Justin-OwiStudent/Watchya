$(function(){

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('result.results[i].id');

    const url ='https://api.themoviedb.org/3/movie/popular?api_key=60d58f5803d2a10a9d7bc0427dbc5023&language=en-US&page=1' + id;

    $.getJSON(url, function(result){

        console.log( result);

        film_name =  result.original_title;
        film_desc =  result.overview;
        postrer = result.poster_path;
         rating = result.vote_average;
         votes = result.vote_count;
         ageRating =  result.adult;
         bgimg = result.backdrop_path;
         language = result.original_language;
         date =   result.release_date;
        duration = result.runtime;
        

       
       

     

        $(".title").text(film_name);
        $(".Time").text(date);
        $(".Speak").text( language );
        $(".Genre").text(duration );
        $(".Age-rating").text( ageRating );

        $(" back-img").css(" background-image",bgimg);

        $(".Rating").text(+" Rating:"+ rating);
        $(".Vote-ammount").text( votes + "Votes");


      

        $(".Movie-picture").attr("src", postrer);

        $(".descriptin").text ( film_desc);
    

    });
});
