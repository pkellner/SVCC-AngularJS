'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('./config.json');
var browserSync = require('browser-sync');

gulp.task('sass', function () {
  return gulp.src(config.styles.files)
    .pipe($.plumber())
    .pipe($.sass(config.styles.sassOptions))
    .pipe($.autoprefixer(config.styles.AUTOPREFIXER_BROWSERS))
    .pipe(gulp.dest(config.styles.build))
    .pipe(browserSync.reload({
      stream: true
    }))
    .pipe($.notify({
      title: 'SASS task',
      message: 'Completed successfully!'
    }));
});