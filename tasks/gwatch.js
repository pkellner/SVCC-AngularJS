'use strict';

var gulp = require('gulp');

gulp.task('gwatch', ['sass', 'browser-sync'], function () {
    gulp.watch('assets/scss/**/*.scss', ['sass']);
    gulp.watch('public/**/*.html', ['bs-reload']);
});