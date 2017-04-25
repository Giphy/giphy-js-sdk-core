var gulp = require("gulp");
var eslint = require("gulp-eslint");

function lint() {
  return gulp
    .src("./**/*.js")
    .pipe(eslint())
    .pipe(eslint.format());
}

gulp.task("lint", lint);

gulp.task("watch", ["default"], function () {
  gulp.watch("./bin/**/*.js", ["lint"]);
});

gulp.task("default", ["lint"]);