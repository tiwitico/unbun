var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require('gulp-notify');
var browserSync = require('browser-sync');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');

gulp.task('serve-backend', function(){
	browserSync.init({
		proxy : "http://egor.app/dashboard"
	});

	gulp.watch("resources/assets/scss/*", ['style-backend']);
	gulp.watch("resources/assets/views/**/**").on('change', browserSync.reload);
});

gulp.task('serve-frontend', function(){
	browserSync.init({
		proxy : "http://egor.app/"
	});

	gulp.watch("resources/assets/scss/*", ['style-frontend']);
	gulp.watch("resources/assets/views/**/**").on('change', browserSync.reload);
});


gulp.task('style-frontend', function(){
	return gulp.src("resources/assets/scss/style-frontend.scss")
			.pipe(plumber())
			.pipe(sass())
			.pipe(plumber.stop())
			.pipe(gulp.dest("public/assets/css"))
			.pipe(browserSync.stream())
			.pipe(notify("sass complete"));
});

gulp.task('style-backend', function(){
	return gulp.src("resources/assets/scss/style-backend.scss")
			.pipe(plumber())
			.pipe(sass())
			.pipe(plumber.stop())
			.pipe(gulp.dest("public/assets/css"))
			.pipe(browserSync.stream())
			.pipe(notify("sass complete"));
});