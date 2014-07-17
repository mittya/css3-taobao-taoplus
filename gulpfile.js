var gulp = require('gulp');
var stylus = require('gulp-stylus');
var coffee = require('gulp-coffee');

gulp.task('stylus', function() {
  gulp.src('./src/stylus/taoplus.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./lib/css'));
});

gulp.task('coffee', function() {
  gulp.src('./src/coffee/taoplus.coffee')
    .pipe(coffee())
    .pipe(gulp.dest('./lib/js'));
});

gulp.task('default', ['stylus', 'coffee']);
