'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('./config.json');
var browserSync = require('browser-sync');
var filter = require('gulp-filter');

gulp.task('sass', function () {
  return gulp.src(config.styles.files)
    .pipe($.plumber())
    .pipe($.sass(config.styles.sassOptions))
    .pipe($.autoprefixer(config.styles.AUTOPREFIXER_BROWSERS))
    .pipe(gulp.dest(config.styles.build))
    .pipe(filter('**/*.css'))
    .pipe(browserSync.reload({stream: true}));
});