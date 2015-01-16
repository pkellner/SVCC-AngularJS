'use strict';

var gulp = require('gulp');

gulp.task('gwatch', ['browser-sync'], function () {
    gulp.watch('assets/scss/**/*.scss', ['sass']);
});