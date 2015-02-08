'use strict';

var gulp       = require('gulp');
var plugins    = require('gulp-load-plugins')();
var karma      = require('karma-as-promised');
var browserify = require('browserify');
var watchify   = require('watchify');
var source     = require('vinyl-source-stream');
var server     = require('superstatic/lib/server');
var template   = require('lodash.template');

var paths = {};

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

paths.index = './src/index.html';
gulp.task('index', function () {
  return gulp.src(paths.index)
    .pipe(gulp.dest('dist'));
});

paths.templates = ['src/**/*.html', '!index.html'];
gulp.task('templates', function () {
  return gulp.src(paths.templates)
    .pipe(gulp.dest('dist/app'));
});

paths.styles = 'styles/*.scss';
gulp.task('styles', function () {
  return gulp.src(paths.styles)
    .pipe(plugins.sass({
      includePaths: ['bower_components/bootstrap-sass-official/assets/stylesheets']
    }))
    .pipe(gulp.dest('dist/assets'));
});

gulp.task('watch', ['index', 'templates', 'styles'], function () {
  gulp.watch(paths.index, ['index']);
  gulp.watch(paths.templates, ['templates']);
  gulp.watch(paths.styles, ['styles']);
  
  var b = bundler(true);
  b.on('update', function () {
    bundle(b);
  });
  return bundle(b);
});

gulp.task('server', function (done) {
  server({
    config: {
      root: 'dist'
    }
  })
  .listen(function (err) {
    if (err) return done(err);
    var util = plugins.util;
    util.log(template('Server running at http://${address}:${port}')(this.address()));
    done();
  });
});
