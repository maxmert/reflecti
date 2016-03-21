'use strict';

import _ from 'lodash';
import {join} from 'path';
import gulp from 'gulp';
import browserify from 'browserify';
import babelify from 'babelify';
import streamify from 'gulp-streamify';
import gutil from 'gulp-util';
import gulpif from 'gulp-if';
import uglify from 'gulp-uglifyjs';
import del from 'del';
import {argv} from 'yargs';
import notify from 'gulp-notify';
import plumber from 'gulp-plumber';
import source from 'vinyl-source-stream';
import watchify from 'watchify';

var isProduction = require('./common.js').isProduction();

let handleError = (error) => {
    notify.onError('Error: <%= error.message %>')(error);

    if (isProduction) {
        process.exit(1);
    }
};
let files = [join(__dirname, '../src/index.js')];
let presetNames = ['es2015', 'react'];
let nodeModulesPath = join(__dirname, `../node_modules/babel-preset-`);
let presets = _.map(presetNames, (preset) => {
    return `${nodeModulesPath}${preset}`;
});

var jsBuilder = function(callback) {
    var bundler = browserify({
        entries: files,
        debug: !isProduction,
        cache: {},
        packageCache: {},
        fullPaths: !isProduction,
        plugin: [watchify]
    })
    .transform(babelify, {
        presets: presets,
        sourceMaps: !isProduction,
        sourceMapRelative: `./dest`,
        ignore: /node_modules/,
        only: /src/
    });

    var rebundle = function() {
        gutil.log('building js...');

        var start = Date.now();

        del.sync(join(__dirname, './dest/*.js'));

        return bundler.bundle()
            .pipe(plumber())
            .on('error', handleError)
            .pipe(source(join(__dirname, '../index.js')))
            .pipe(gulpif(isProduction, streamify(uglify())))
            .pipe(gulp.dest(join(__dirname, '../dest')))
            .on('end', function() {
                gutil.log('finished building js in ' + (Date.now() - start) + 'ms');
                if (argv._.indexOf('watch') === -1) {
                    process.exit(1);
                }
            });
    };

    if (argv._.indexOf('watch') !== -1) {
        bundler.on('update', rebundle);
    }

    rebundle().on('end', callback);
};

module.exports = jsBuilder;
