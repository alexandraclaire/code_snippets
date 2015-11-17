// require dependencies 

var gulp = require('gulp'),
	sass = require('gulp-sass');

// sass task

gulp.task('sass', function() {
	gulp.src('src/sass/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('public/css'))
});	

// watch task

gulp.task('watch', function() {
	gulp.watch('src/sass/*.scss', ['sass']);
});

// default task

gulp.task('default', ['sass', 'watch']);