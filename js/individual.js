$(function(){

   // const queryString = window.location.search;
  //  const urlParams = new URLSearchParams(queryString);
   // const id = urlParams.get('id');

    const url = 'https://api.themoviedb.org/3/movie/550?api_key=60d58f5803d2a10a9d7bc0427dbc5023' ;

    $.getJSON(url, function(result){

        console.log(result);

        film_name = original_title;
        launch_name = overview;
        postrer = poster_path;
        genre = genres.name;
        rating = genres.name.id;
        bgimg = backdrop_path;
       studio = production_companies.name;
       date = release_date;
      duration = runtime;

       
       

     

        $(".title").text(film_name[1]);
      

        //$(".patch").attr("src", launch_image[1]);

        if(film_desc[1]=== null){
            $(".descriptin").text("There where no details found for this film");
        } else {
            $(".descriptin").text ( film_desc);
        }

    });
});