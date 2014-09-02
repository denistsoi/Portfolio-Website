var gulp = require('gulp'),
    sass = require('gulp-sass'),
    clean = require('gulp-clean'),
    connect = require('gulp-connect');

var src = {
  scss: "src/styles/scss/",
  css:  "src/styles/css/"
}

var build = {
  css:  "public/css/"
}

gulp.task('dev', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('clean-css', function() {
  gulp.src(src.css)
    .pipe(clean());
});

gulp.task('sass', ['clean-css'], function() {
  gulp.src(src.scss+"*.scss")
    .pipe(sass())
    .pipe(gulp.dest(src.css))
    .pipe(connect.reload());
});