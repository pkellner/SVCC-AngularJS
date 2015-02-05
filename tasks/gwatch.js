'use strict';

var gulp = require('gulp');

gulp.task('gwatch', ['sass', 'browser-sync'], function () {
    gulp.watch('assets/scss/**/*.scss', ['styles']);
    gulp.watch('public/**/*.html', ['bs-reload']);
});