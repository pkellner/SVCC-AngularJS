'use strict';

var gulp        = require('gulp');
var plugins     = require('gulp-load-plugins')();
var karma       = require('karma-as-promised');
var browserify  = require('browserify');
var watchify    = require('watchify');
var source      = require('vinyl-source-stream');
var buffer      = require('vinyl-buffer');
var argv        = require('yargs').argv;
var chalk       = require('chalk');
var format      = require('util').format;
var superstatic = require('superstatic');
var app         = argv.app;

if (!app) {
  app = 'angu';
  plugins.util.log('no app defined with --app, defaulting to', chalk.magenta('angu'));
}

var production = argv.production;

var paths = {};

gulp.task('unit', function () {
  return karma.server.start({
    frameworks: ['browserify', 'mocha'],
    files: [
      './base/test/index.js'
    ],
    exclude: [
    ],
    preprocessors: {
      './base/test/index.js': 'browserify'
    },
    browserify: {
      debug: true
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

function bundler (watch, mocks) {
  var b = (watch ? watchify : identity)(browserify(watch && watchify.args))
  b.add(format('./%s', app)).add('babel/polyfill');
  if (mocks) b.add(format('./%s/mock', app));
  return b;
}

function bundle (bundler) {
  return bundler
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('dist/app'));
}

gulp.task('bundle', function () {
  var bundled = bundle(bundler())
  if (!production) return bundled;
  return bundled
    .pipe(buffer())
    .pipe(plugins.uglify())
    .pipe(plugins.rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('dist/app'));
});

paths.index = format('./%s/index.html', app);
gulp.task('index', function () {
  return gulp.src(paths.index)
    .pipe(gulp.dest('dist'));
});

paths.templates = format('./%s/src/**/*.html', app);
gulp.task('templates', function () {
  return gulp.src(paths.templates)
    .pipe(gulp.dest('dist/app'));
});

paths.styles = format('./%s/styles/*.scss', app);
gulp.task('styles', function () {
  return gulp.src(paths.styles)
    .pipe(plugins.sass({
      includePaths: ['bower_components/bootstrap-sass-official/assets/stylesheets']
    }))
    .pipe(plugins.autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('dist/styles'))
    .pipe(plugins.minifyCss())
    .pipe(plugins.rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('dist/styles'));
});

paths.images = format('./%s/images/**/*', app);
gulp.task('images', function () {
  return gulp.src(paths.images)
    .pipe(gulp.dest('dist/images'));
});

paths.fonts = format('./%s/fonts/**/*', app);
gulp.task('fonts', function () {
  return gulp.src(paths.fonts)
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('build', ['index', 'templates', 'styles', 'images', 'fonts', 'bundle']);

gulp.task('watch', ['index', 'templates', 'styles', 'images', 'fonts'], function () {
  gulp.watch(paths.index, ['index']);
  gulp.watch(paths.templates, ['templates']);
  gulp.watch(paths.styles, ['styles']);
  gulp.watch(paths.images, ['images']);
  gulp.watch(paths.fonts, ['fonts']);

  var b = bundler(true, true);
  b.on('update', function () {
    bundle(b);
  });
  return bundle(b);
});

gulp.task('server', function (done) {
  superstatic.server({
    port: 3000,
    config: {
      root: './dist',
      routes: {
        "**": "index.html"
      }
    }
  })
  .listen(done);
});

gulp.task('serve', ['watch', 'server']);
