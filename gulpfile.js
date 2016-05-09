var gulp = require('gulp');
var watch = require('gulp-watch');
var stylus = require('gulp-stylus');
var coffee = require('gulp-coffee');
var connect = require('gulp-connect');
var livereload = require('gulp-livereload');
var autoprefixer = require('autoprefixer-stylus');


gulp.task('connect', function() {
  connect.server({
    root: '',
    port: 8000,
    livereload: true
  });
});


gulp.task('stylus', function() {
  gulp.src('src/stylus/taoplus.styl')
    .pipe(stylus({ use: [autoprefixer()] }))
    .pipe(gulp.dest('dist/css'))
    .pipe(connect.reload());
});


gulp.task('coffee', function() {
  gulp.src('src/coffee/taoplus.coffee')
    .pipe(coffee())
    .pipe(gulp.dest('dist/js'))
    .pipe(connect.reload());
});


gulp.task('html', function () {
  gulp.src('index.html')
    .pipe(connect.reload());
});


gulp.task('watch', function() {
  gulp.watch('index.html', ['html']);
  gulp.watch('src/stylus/taoplus.styl', ['stylus']);
  gulp.watch('src/coffee/taoplus.coffee', ['coffee']);
});


gulp.task('copy', function() {
  gulp.src('src/fonts/*')
    .pipe(gulp.dest('dist/fonts/'));
});


gulp.task('default', ['stylus', 'coffee', 'connect', 'watch' ,'copy']);
