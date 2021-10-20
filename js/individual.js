$(function(){

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');

    const url ='https://api.themoviedb.org/3/movie/popular?api_key=60d58f5803d2a10a9d7bc0427dbc5023&language=en-US&page=1' + id;

    $.getJSON(url, function(result){

        console.log(result);

        film_name = result.result.original_title;
        film_name =  result.result.overview;
        postrer = result.poster_path;
        genre =  result.result.genres.name;
        rating =  result.result.genres.name.id;
        bgimg =  result.result.backdrop_path;
       studio =  result.result.production_companies.name;
       date =  result.result.release_date;
      duration =  result.result.runtime;

       
       

     

        $(".title").text(film_name);
        $(".text-genre").text(date  + genre  );
        $(".studio").text( studio );
        $(".genre").text(duration );
        $(".Age-rating").text( rating );

        $(".success_fail").css(" background-image","bgimg");


      

        $(".Movie-picture").attr("src", postrer);

        if(film_desc[1]=== null){
            $(".descriptin").text("There where no details found for this film");
        } else {
            $(".descriptin").text ( film_desc);
        }

    });
});
