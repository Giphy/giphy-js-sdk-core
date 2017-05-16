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

gulp.task("lint", function(){
    gulp.src("./src/**/*.js")
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
  })

//build this for npm

gulp.task("default", ["lint", "prettify"]);
