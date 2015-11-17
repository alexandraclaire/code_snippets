var $overlay = $('<div id="overlay"></div>');
var $image = $('<img>');
var $caption = $('<p></p>');
	//add image to overlay
$overlay.append($image);
	//add caption
$overlay.append($caption);
	//add overlay
$('body').append($overlay);

$('#gallery a').click(function(event){
	event.preventDefault();
	var imageLocation = $(this).attr('href');
	//update overlay with the image linked in the link
	$image.attr('src', imageLocation);
	//show overlay
	$overlay.show();
	//get child alt attribute & set caption
	var captionText = $(this).children('img').attr('alt');
	$caption.text(captionText);

	$overlay.click(function(){
		$overlay.hide();
	});
});