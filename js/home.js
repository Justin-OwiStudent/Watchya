 HEAD
$(document).ready(function(){

//image slider
$(document).ready(function(){
    var x = 0;
// for next slide
    $('.btn-next').click(function(){

    x= (x<=100)?(x+100):0;
  $('figure').css('left', -x+'%');
    });


 // for prev slide
 $('.btn-prev').click(function(){

    x= (x>=100)?(x-100):200;
  $('figure').css('left', -x+'%');
});
});



})


$(document).ready(function () {
    $(document).ready(function(){
		var x = 0;
    // for next slide
		$('.btn-next').click(function(){
    
        x= (x<=100)?(x+100):0;
      $('figure').css('left', -x+'%');
		});


     // for prev slide
     $('.btn-prev').click(function(){
    
        x= (x>=100)?(x-100):200;
      $('figure').css('left', -x+'%');
    });
	});
});
 acb7dc0bd344c78b1285aa5f97f4578bb29aaf46
