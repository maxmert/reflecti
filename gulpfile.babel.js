'use strict';

var gulp = require('gulp');
var argv = require('yargs').argv;
var format = require('util').format;
var gutil = require('gulp-util');

var isProduction = require('./builder/common.js').isProduction();
var jsBuilder = require('./builder/js.js');
var jsLinters = require('./builder/lint.js');

gulp.task('jsBuilder', jsBuilder);
gulp.task('jsCs', jsLinters.jsCs);
gulp.task('jsHint', jsLinters.jsHint);
gulp.task('js', jsBuilder);

gulp.task('default', function(options) {
    gutil.log(format('running in %s mode', isProduction ? 'production' : 'development'));
    gulp.tasks.js.fn(options);
});

gulp.task('watch', ['js'], function() {
    gulp.watch('./src/**/*.js', ['jsCs', 'jsHint']);
});
