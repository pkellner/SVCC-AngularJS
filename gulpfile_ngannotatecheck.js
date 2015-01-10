'use strict';

var gulp = require('gulp');
var diff = require('gulp-diff');
var header = require('gulp-header');
var concat = require('gulp-concat');
var del = require('del');
var ngAnnotate = require('gulp-ng-annotate');

gulp.task('default', ['clean']);

gulp.task('clean', ['build'], function(cb) {
    del(['.build'], cb);
});

gulp.task('build', ['concat'], function() {
    return gulp.src('public/app/**/*.js')
        //.pipe(header('//stream test\n'))
        .pipe(ngAnnotate())
        .pipe(diff())
        .pipe(diff.reporter())
        .pipe(gulp.dest('./public/dist'));
});

gulp.task('concat', function() {
    return gulp.src('src/*.txt')
        .pipe(concat('all.txt'))
        .pipe(gulp.dest('.build'));
});