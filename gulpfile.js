var gulp = require('gulp'),
    sass = require('gulp-sass'),
    clean = require('gulp-clean'),
    watch = require('gulp-watch'),
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

gulp.task('default', ['build']);

gulp.task('build', ['clean-css', 'sass', 'watch']);

gulp.task('watch', function(){
  watch(src.scss+"*.scss", ['sass']);
});

gulp.task('clean-css', function() {
  gulp.src(src.css)
    .pipe(clean());
});

gulp.task('sass', function() {
  gulp.src(src.scss+"*.scss")
    .pipe(sass())
    .pipe(gulp.dest(src.css))
    .pipe(connect.reload());
});