(function () {
    'use strict';

    /*!
     * gulp
     * $ npm install gulp-ruby-sass gulp-autoprefixer gulp-minify-css gulp-jshint gulp-concat gulp-uglify gulp-imagemin gulp-notify gulp-rename gulp-livereload gulp-cache del --save-dev
     */

    //npm install del gulp gulp-concat gulp-diff gulp-header; mkdir -p src; echo "foo" > src/foo.txt; echo "bar" > src/bar.txt
    // http://stackoverflow.com/questions/26939542/problems-with-gulp-and-gulp-diff

    // Load plugins
    var gulp = require('gulp'),
        sass = require('gulp-ruby-sass'),
        autoprefixer = require('gulp-autoprefixer'),
        minifycss = require('gulp-minify-css'),
        jshint = require('gulp-jshint'),
        uglify = require('gulp-uglify'),
        imagemin = require('gulp-imagemin'),
        rename = require('gulp-rename'),
        concat = require('gulp-concat'),
        notify = require('gulp-notify'),
        cache = require('gulp-cache'),
        del = require('del'),
        //wait = require('gulp-wait'),
        diff = require('gulp-diff'),
    //livereload = require('gulp-livereload'),
        htmlreplace = require('gulp-html-replace'),
    //rsync = require('gulp-rsync'),
        ngAnnotate = require('gulp-ng-annotate'),
        del = require('del');

    // Styles
    gulp.task('styles', function () {
        gulp.src('../../Content/Sass/site-svcc-relative.scss')
            //.pipe(wait(20000))
            .pipe(sass({style: 'expanded'}))
            .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
            .pipe(gulp.dest('public/dist/styles'))
            //.pipe(gulp.dest('Content/styles'))
            .pipe(rename({suffix: '.min'}))
            .pipe(minifycss())
            .pipe(gulp.dest('public/dist/styles'))
            .pipe(notify({message: 'Styles task complete'}));
    });

    gulp.task('stylesdev', function () {
        gulp.src('../../Content/Sass/site-svcc-relative-dev.scss')
            .pipe(sass({style: 'expanded'}))
            .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
            .pipe(gulp.dest('public/Content/styles'))
            .pipe(notify({message: 'Styles task complete'}));
    });

    //gulp.task('deploy', function () {
    //    gulp.src('dist/**')
    //        .pipe(rsync({
    //            root: 'build',
    //            hostname: 'example.com',
    //            destination: '/path/to/site'
    //        }));
    //});

    // Scripts
    gulp.task('scriptsangular', function () {
        return gulp.src([
            'public/vendor/angular-messages/angular-messages.js',
            'public/vendor/angular-route/angular-route.js',
            'public/vendor/angular-resource/angular-resource.js'
        ])
            .pipe(concat('angularextras.js'))
            .pipe(gulp.dest('public/dist'))
            .pipe(rename({suffix: '.min'}))
            .pipe(uglify())
            .pipe(gulp.dest('public/dist'))
            .pipe(notify({message: 'scriptsangular task complete'}));
    });

    //gulp.task('scriptstest', function () {
    //
    //    //gulp.src(['public/app/**/*.js'])
    //    //    .pipe(concat('main1.js'))
    //    //    .pipe(rename({suffix: '.noannotate'}));
    //
    //
    //    gulp.src(['public/app/**/*.js'])
    //        .pipe(concat('main1.js'))
    //    .pipe(gulp.dest(''));
    //
    //    gulp.src(['main1.js'])
    //        .pipe(ngAnnotate())
    //        .pipe(diff())
    //        .pipe(diff.reporter({ fail: false }));
    //});

    gulp.task('scriptsnongannotate', function () {

        return gulp.src(['public/app/**/*.js'])
            .pipe(concat('main.js'))
            .pipe(rename({suffix: '.nongannotate'}))
            .pipe(gulp.dest('public/dist'))
            .pipe(notify({message: 'Scripts no ngAnnotate task complete'}));
    });


    gulp.task('scripts', function () {

        return gulp.src(['public/app/**/*.js'])
            .pipe(concat('main.js'))
            .pipe(jshint('.jshintrc'))
            .pipe(jshint.reporter('default'))
            .pipe(ngAnnotate())
            //.pipe(diff())
            //.pipe(diff.reporter({fail: true}))
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

        gulp.src('public/Data/**/*')
            .pipe(gulp.dest('public/dist/Data'));

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
            .pipe(htmlreplace({
                'css': 'styles/site-svcc-relative.min.css',
                'js': [
                    'angular.min.js',
                    'angularextras.min.js',
                    'main.min.js'
                ]
            }))
            .pipe(gulp.dest('public/dist/'));

        gulp.src('index.html')
            .pipe(htmlreplace({
                'css': 'styles/site-svcc-relative.css',
                'js': ['angular.js',
                    'angularextras.js',
                    'main.js']
            }))
            .pipe(rename('index-nomin.html'))
            .pipe(gulp.dest('public/dist/'));
    });


    // Clean
    gulp.task('clean', function (cb) {
        del([
            'public/Content/Sass/.sass-cache'], cb);
    });

    //// deletedist
    //gulp.task('deletedist', function (cb) {
    //    del([
    //        'scratchfiles',
    //        'public/dist'], cb);
    //});

    // Default task
    gulp.task('default', ['clean'], function () {
        gulp.start('scripts','scriptsnongannotate','styles','scriptsangular', 'images', 'copyfiles', 'indexhtml');
    });



    //// Watch
    //gulp.task('watch', function () {
    //
    //    // Watch .scss files
    //    gulp.watch('src/styles/**/*.scss', ['styles']);
    //
    //    // Watch .js files
    //    gulp.watch('src/scripts/**/*.js', ['scripts']);
    //
    //    // Watch image files
    //    gulp.watch('src/images/**/*', ['images']);
    //
    //    // Create LiveReload server
    //    livereload.listen();
    //
    //    // Watch any files in dist/, reload on change
    //    gulp.watch(['dist/**']).on('change', livereload.changed);
    //
    //});


}());
