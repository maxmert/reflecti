'use strict';

var gulp = require('gulp');
var argv = require('yargs').argv;
var jscs = require('gulp-jscs');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var join = require('path').join;

var isProduction = require('./common.js').isProduction();

var jsCsBuilder = function() {
    if (!isProduction) {
        return gulp.src('src/**/*.js')
            .pipe(jscs(join(__dirname, '..', '.jscsrc')));
    }
};

var jsHintBuilder = function() {
    if (!isProduction) {
        return gulp.src('src/**/*.js')
            .pipe(jshint())
            .pipe(jshint.reporter(stylish));
    }
};

module.exports = {
    jsHint: jsHintBuilder,
    jsCs: jsCsBuilder
};
