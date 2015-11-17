// $(document).ready(function(){
//  $('button').click(function(){
//  	$('.demo').slideToggle(1000);
//  });
// });

// $(document).ready(function(){
//  $('button').click(function(){
//  	$('.demo').animate({left:'250px', height:'550px', width:'550px'});
//  });
// });

// $(document).ready(function(){
//  $('#one').click(function(){
//  	$('#two').slideDown(5000);
//  });
//  $('#stop').click(function(){
//  	$('#two').stop();
// 	});
// });

// $(document).ready(function(){
// 	$('p').prepend('this is coming from main.js')
// });

// $(document).ready(function(){
// 	$('p').remove('.test1, .test2')
// });

// $(document).ready(function(){
//  $('p').click(function(){
//  	$(this).toggleClass('important')
//  });
// });	

// $(document).ready(function(){
// 	$('button').click(function(){
// 		alert('Merry Christmas')
// 	});
// });	

// $(document).ready(function(){
// 	$('p').css({
// 		 'background':'#ced3ff',
// 		 'color':'#A389A9'
// 	});
// });	

$(document).ready(function(){
	$('button').click(function(){
		var txt ='';
		txt += 'outer width:' + $('#one').outerWidth() + '</br>';
		txt += 'outer height:' + $('#one').outerHeight();
		$('#one').html(txt); 
	});
});	


