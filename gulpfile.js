'use strict';

var gulp       = require('gulp');
var plugins    = require('gulp-load-plugins')();
var karma      = require('karma-as-promised');
var browserify = require('browserify');
var source     = require('vinyl-source-stream');
var server     = require('superstatic/lib/server');

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
    .pipe(gulp.dest('dist/app'));
});

gulp.task('index', function () {
  return gulp.src('./src/index.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('server', function (done) {
  server({
    port: 8000,
    config: {
      root: 'dist'
    }
  })
  .listen(done);
});
