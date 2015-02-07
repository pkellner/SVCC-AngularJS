'use strict';

var gulp       = require('gulp');
var plugins    = require('gulp-load-plugins')();
var karma      = require('karma-as-promised');
var browserify = require('browserify');
var source     = require('vinyl-source-stream');

gulp.task('unit', function () {
  return karma.server.start({
    frameworks: ['browserify', 'mocha'],
    files: [
      './test/unit/index.js'
    ],
    exclude: [
    ],
    preprocessors: {
      './test/unit/index.js': 'browserify'
    },
    browserify: {
      transform: ['browserify-istanbul']
    },
    reporters: ['progress', 'coverage'],
    port: 9876,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false
  });
});

gulp.task('bundle', function () {
  var pkg = require('./package.json');
  return browserify()
    .add(pkg.main)
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('public/dist'));
});
