$(document).ready(function () {

    const url = 'https://api.themoviedb.org/3/movie/550?api_key=60d58f5803d2a10a9d7bc0427dbc5023';
  
    $.getJSON(url, function (result) {
      console.log(result);
  
      for (i = 0; i < result.length; i++) {
  
      
  
      $(".item").append(
  
         "<div class='image'>\
         </div>\
        <h3>" + result[i].title + "</h3>\
        <p>Description</p>\
        <h5>0/10</h5>"
      
      
    
        );
  
  
  
  
  
      }
  
    });
  
  
  });