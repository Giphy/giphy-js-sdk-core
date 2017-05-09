var gulp = require("gulp");
var eslint = require("gulp-eslint");
var prettify = require('gulp-jsbeautifier');

function lint(){
  return gulp
    .src("./**/*.js")
    .pipe(eslint())
    .pipe(eslint.format());
}

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

gulp.task("lint", lint);

gulp.task("watch", ["default"], function() {
  gulp.watch("./src/**/*.js", ["lint"]);
});

//build this for npm


gulp.task("default", ["lint", "prettify"]);
