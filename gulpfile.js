'use strict';

var gulp       = require('gulp');
var plugins    = require('gulp-load-plugins')();
var karma      = require('karma-as-promised');
var browserify = require('browserify');
var watchify   = require('watchify');
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

function identity (input) {
  return input;
}

function bundler (watch) {
  var pkg = require('./package.json');
  return (watch ? watchify : identity)(browserify(watch && watchify.args))
    .add(pkg.main);
}

function bundle (bundler) {
  return bundler
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('dist/app'));
}

gulp.task('bundle', function () {
  return bundle(bundler());
});

gulp.task('index', function () {
  return gulp.src('./src/index.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('templates', function () {
  return gulp.src(['src/**/*.html', '!index.html'])
    .pipe(gulp.dest('dist/app'));
});

gulp.task('styles', function () {
  return gulp.src('styles/*.scss')
    .pipe(plugins.sass({
      includePaths: ['bower_components/bootstrap-sass-official/assets/stylesheets']
    }))
    .pipe(gulp.dest('dist/assets'));
});

gulp.task('watch', function () {
  var b = bundler(true);
  b.on('update', function () {
    bundle(b);
  });
  return bundle(b);
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
