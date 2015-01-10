(function () {
    'use strict';



    //npm install del gulp gulp-concat gulp-diff gulp-header; mkdir -p src; echo "foo" > src/foo.txt; echo "bar" > src/bar.txt
    // http://stackoverflow.com/questions/26939542/problems-with-gulp-and-gulp-diff

    //npm install  gulp gulp-debug gulp-plumber gulp-html-replace gulp-notify gulp-ruby-sass gulp-autoprefixer gulp-minify-css gulp-jshint gulp-uglify gulp-imagemin gulp-rename gulp-concat gulp-cache del gulp-diff gulp-header


    // Load plugins
    var gulp = require('gulp'),
        debug = require('gulp-debug'),
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
        plumber = require('gulp-plumber'),
        htmlreplace = require('gulp-html-replace');


    //sass = require('gulp-ruby-sass'),
    //    gulpsass = require('gulp-sass'),
    //    compass = require('gulp-compass'),
    //ngAnnotate = require('gulp-ng-annotate');
    //del = require('del');
    //wait = require('gulp-wait'),
    //diff = require('gulp-diff'),
    //livereload = require('gulp-livereload'),
    //rsync = require('gulp-rsync'),

    //// Styles
    //gulp.task('styles', function () {
    //    gulp.src('../../Content/Sass/site-svcc-relative.scss')
    //        //.pipe(wait(20000))
    //        .pipe(sass({style: 'expanded'}))
    //        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    //        .pipe(gulp.dest('public/dist/styles'))
    //        //.pipe(gulp.dest('Content/styles'))
    //        .pipe(rename({suffix: '.min'}))
    //        .pipe(minifycss())
    //        .pipe(gulp.dest('public/dist/styles'))
    //        .pipe(notify({message: 'Styles task complete'}));
    //});

    //gulp.task('stylesdev', function () {
    //    gulp.src('../../Content/Sass/_site-svcc.scss')
    //        //.pipe(debug({verbose: true}))
    //        .pipe(sass({
    //            style: 'expanded',
    //            trace: true,
    //            debugInfo: true,
    //            compass: true
    //        }))
    //        .pipe(debug({verbose: true}))
    //        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    //        .pipe(gulp.dest('public/Content/styles'))
    //        .pipe(notify({message: 'Styles task complete'}));
    //});

    //// notworking dec 2014
    //gulp.task('adminCss', function () {
    //    gulp.src('./Content/Sass/_site-svcc.scss')
    //        .pipe(debug({verbose: true}))
    //        .pipe(compass({
    //            loadPath: 'Content/Sass',
    //            sass: 'Content/Sass',
    //            css: 'public/Content/Styles'
    //        }))
    //        .pipe(gulp.dest('./public/Content/Styles'))
    //});
    //
    //gulp.task('gulpsass', function () {
    //    gulp.src('./Content/Sass/_site-svcc.scss')
    //        .pipe(gulpsass({
    //            includePaths: ['./Content/Sass/'],
    //            errLogToConsole: true
    //        }))
    //        .pipe(gulp.dest('./public/Content/Styles'));
    //});

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
            'public/vendor/angular-resource/angular-resource.js',
            'public/vendor/angular-ui-router/release/angular-ui-router.js',
            'public/vendor/angular-mocks/angular-mocks.js',
            'public/vendor/angular-bootstrap/ui-bootstrap-tpls.js',

        ])
            .pipe(concat('angularextras.js'))
            .pipe(gulp.dest('public/dist'))
            .pipe(rename({suffix: '.min'}))
            .pipe(uglify())
            .pipe(gulp.dest('public/dist'))
            .pipe(notify({message: 'scriptsangular task complete'}));
    });

    gulp.task('lint', function() {
        gulp.src('public/app/**/*.js')
            .pipe(jshint('.jshintrcPROD'))
            .pipe(jshint.reporter('default'))
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
        //console.log('1');
    });

    gulp.task('indexhtmlmincshtml', function () {
        gulp.src('public/index.html')
            .pipe(htmlreplace({
                'css': '@Model.cssFileName',
                'js': [
                    '/content/ng/angular.min.js',
                    '/content/ng/angularextras.min.js',
                    '/content/ng/main.min.js'
                ]
            }))
            .pipe(gulp.dest('public/dist/'));
        //console.log('1');
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
        gulp.start('scripts',  'scriptsangular', 'images',
            'copyfiles', 'indexhtml', 'indexhtmlmin');
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
