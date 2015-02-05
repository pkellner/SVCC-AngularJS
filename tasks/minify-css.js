'use strict';

var gulp = require('gulp');
var config = require('./config.json');
var minifycss = require('gulp-minify-css');
var rename = require('gulp-rename');
var minifycssOptions = {
  keepBreaks: true
};

gulp.task('minify-css', function() {
  return gulp.src([config.styles.build + '*.css', '!' + config.styles.build + '*.min.css'])
    .pipe(minifycss(minifycssOptions))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(config.styles.build));
});