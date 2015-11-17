//defines zoom, center of the map ( lat and long) and type of map. 
var mapOptions = {
	center: new google.maps.LatLng(32.70003, -117.2466838),
	zoom: 10,
	mapTypeId: google.maps.MapTypeId.ROADMAP,
}

// shows map in div #map
var map = new google.maps.Map(document.getElementById('map'), mapOptions);

// shows a marker for a particular place
var marker = new google.maps.Marker({
	position: new google.maps.LatLng(32.6825779, -117.1785163),
//makes the marker an icon	
	icon: "assets/img/hdcicon.png",
	//makes it bounce
	//animation:google.maps.Animation.BOUNCE
});
//calling the marker
marker.setMap(map);



// define info window info
var infoWindowOptions = {
	content: "Don't you wish you were here?"
};
// setting the on-click for marker
var infoWindow = new google.maps.InfoWindow(infoWindowOptions);
google.maps.event.addListener(marker, 'click', function(){

	infoWindow.open(map, marker);
});