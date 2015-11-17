// require dependencies

var gulp = require('gulp'),
	sass = require('gulp-ruby-sass');

// sass including compass task

gulp.task('sass', function(){
	return sass('src/sass/*.scss', {
		compass: true,
		style: 'compressed'
	})
	.on('error', function(err) { console.log(err.message);})
	.pipe(gulp.dest('public/css'));
});	

gulp.task('watch', function() {
	gulp.watch('src/sass/*.scss', ['sass']);
})

gulp.task('default', ['sass', 'watch']);