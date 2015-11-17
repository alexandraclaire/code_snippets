  $(document).ready(function(){
  	  	
  	$('.c').mouseenter(function(){
  		
  		if($(this).hasClass('cycling')==false){
			  		
			  		$(this).charcycle({'target':'#text'});	
		}
  	});
  });