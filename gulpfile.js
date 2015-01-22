(function () {
    'use strict';

    // Load plugins
    var gulp = require('gulp'),
        uglify = require('gulp-uglify'),
        imagemin = require('gulp-imagemin'),
        rename = require('gulp-rename'),
        concat = require('gulp-concat'),
        notify = require('gulp-notify'),
        cache = require('gulp-cache'),
        del = require('del'),
        htmlreplace = require('gulp-html-replace');

    // Scripts
    gulp.task('scriptsangular', function () {
        return gulp.src([
            'public/vendor/angular-messages/angular-messages.js',
            'public/vendor/angular-resource/angular-resource.js',
            'public/vendor/angular-ui-router/release/angular-ui-router.js',
            'public/vendor/angular-mocks/angular-mocks.js',
            'public/vendor/angular-bootstrap/ui-bootstrap-tpls.js'
        ])
            .pipe(concat('angularextras.js'))
            .pipe(gulp.dest('public/dist'))
            .pipe(rename({suffix: '.min'}))
            .pipe(uglify())
            .pipe(gulp.dest('public/dist'))
            .pipe(notify({message: 'scriptsangular task complete'}));
    });


    gulp.task('scripts', function () {

        return gulp.src(['public/app/**/*.js'])
            .pipe(concat('main.js'))
            //.pipe(jshint('.jshintrcPROD'))
            //.pipe(jshint.reporter('default'))
            //.pipe(ngAnnotate())
            .pipe(gulp.dest('public/dist'))
            .pipe(rename({suffix: '.min'}))
            .pipe(uglify())
            .pipe(gulp.dest('public/dist'))
            .pipe(notify({message: 'Scripts task complete'}));
    });

    // Images
    gulp.task('images', function () {
        return gulp.src('public/Content/images/**/*')
            .pipe(cache(imagemin({optimizationLevel: 3, progressive: true, interlaced: true})))
            .pipe(gulp.dest('public/dist/images'))
            .pipe(notify({message: 'Images task complete'}));
    });

    // Copy stuff
    gulp.task('copyfiles', function () {

        gulp.src('public/assets/**/*')
            .pipe(gulp.dest('public/dist/assets'));

        gulp.src('../../Content/**/*')
            .pipe(gulp.dest('public/dist/Content'));

        gulp.src('../../Content/**/*')
            .pipe(gulp.dest('public/Content'));

        gulp.src('public/app/Data/**/*')
            .pipe(gulp.dest('public/dist/app/Data'));

        gulp.src('public/vendor/angular/angular.js')
            .pipe(gulp.dest('public/dist'));

        gulp.src('public/vendor/angular/angular.min.js')
            .pipe(gulp.dest('public/dist'));

        gulp.src('public/vendor/angular/angular.min.js.map')
            .pipe(gulp.dest('public/dist'));


        // this gets all the app templates and moves to relative directories
        gulp.src('public/app/**/*.html')
            .pipe(gulp.dest('public/dist/app/'));

    });

    gulp.task('indexhtml', function () {
        gulp.src('public/index.html')
            .pipe(rename('indexnomin.html'))
            .pipe(htmlreplace({
                'css': 'styles/site-svcc-relative.css',
                'js': ['angular.js',
                    'angularextras.js',
                    'main.js']
            }))
            .pipe(gulp.dest('public/dist/'));
        //console.log('2x');
    });

    gulp.task('indexhtmlmin', function () {
        gulp.src('public/index.html')
            .pipe(htmlreplace({
                'css': 'styles/site-svcc-relative.min.css',
                'js': [
                    'angular.min.js',
                    'angularextras.min.js',
                    'main.min.js'
                ]
            }))
            .pipe(gulp.dest('public/dist/'));
    });

    gulp.task('indexhtmlmincshtml', function () {
        gulp.src('public/index.html')
            .pipe(htmlreplace({
                'css': 'replacemecss.css',
                'js': [
                    '/content/ng/angular.min.js',
                    '/content/ng/angularextras.min.js',
                    '/content/ng/main.min.js'
                ]
            }))
            .pipe(rename('index.cshtml'))
            .pipe(gulp.dest('public/dist/'));
    });

    // Clean
    gulp.task('clean', function (cb) {
        del([
            'public/Content/Sass/.sass-cache'], cb);
    });

    // Default task
    gulp.task('default', ['clean'], function () {
        gulp.start('scripts',  'scriptsangular', 'images',
            'copyfiles', 'indexhtml', 'indexhtmlmin','indexhtmlmincshtml');
    });

    // Watch
    gulp.task('watch', function () {
       gulp.watch('src/styles/**/*.scss', ['styles']);
       gulp.watch('src/scripts/**/*.js', ['scripts']);
       gulp.watch('src/images/**/*', ['images']);
    });

    // Loading gulp tasks from '/tasks' directory
    require('require-dir')('./tasks');

}());
