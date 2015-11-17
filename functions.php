<?php
// Adding extra css 
function theme_styles() {
	// Adding a bootstrap css
	wp_enqueue_style( 'bootstrap_css', get_template_directory_uri() . '/css/bootstrap.min.css' );
	// Adding a google font
	wp_enqueue_style( 'googlefont_css', 'http://fonts.googleapis.com/css?family=Raleway:400,800,200%7cOpen+Sans' );
	// Adding a main css
	wp_enqueue_style( 'main_css', get_template_directory_uri() . '/style.css' );
}
// Makes the above work
add_action( 'wp_enqueue_scripts', 'theme_styles' );
// Adding extra js 
function theme_js() {
	global $wp_scripts;
// Adding respond.js & html5.shiv
	wp_register_script( 'html5_shiv', 'https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js', '', '', false );
	wp_register_script( 'respond_js', 'https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js', '', '', false );
// Only runs if Browser is ltr then IE9
	$wp_scripts->add_data( 'html5_shiv', 'conditional', 'lt IE 9' );
	$wp_scripts->add_data( 'respond_js', 'conditional', 'lt IE 9' );
// Adding bootstrap.js & main.js
	wp_enqueue_script( 'bootstrap_js', get_template_directory_uri() . '/js/bootstrap.min.js', array('jquery'), '', true );
	wp_enqueue_script( 'main_js', get_template_directory_uri() . '/js/main.js', array('jquery', 'bootstrap_js'), '', true );
}
// Makes the above work
add_action( 'wp_enqueue_scripts', 'theme_js' );
//Removes the user login bar at the top 
add_filter( 'show_admin_bar', '__return_false' );
?>