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