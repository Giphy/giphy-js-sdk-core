/*
 * Created by Cosmo Cochrane on 4/20/17.
 * Copyright (c) 2017 Giphy Inc.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
 

var gulp = require("gulp");
var eslint = require("gulp-eslint");
var prettify = require('gulp-jsbeautifier');


gulp.task('prettify', function() {
  gulp.src(['./src/**/*.js'])
    .pipe(prettify({
		  "indent_size": 4,
		  "indent_char": ' ',
		  // other options
		  "js": {
		    // other options
		    "indent_size": 2
		  }
    }))
    .pipe(gulp.dest('./src'));
});

gulp.task('clean_tests', function() {
  gulp.src(['./tests/**.js'])
    .pipe(prettify({
      "indent_size": 4,
      "indent_char": ' ',
      // other options
      "js": {
        // other options
        "indent_size": 2
      }
    }))
    .pipe(gulp.dest('./tests'));
});

gulp.task("lint", function(){
    gulp.src("./src/**/*.js")
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
  })

//build this for npm

gulp.task("default", ["lint", "prettify"]);
