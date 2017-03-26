var gulp = require('gulp');
var arpkBuild = require('@augle/gulp-arpk-build');
var arpkCheck = require('@augle/gulp-arpk-check');
var fs = require('fs');
var arpkConfig = JSON.parse(fs.readFileSync('./arpk-config.json'));
gulp.task('arpk', ['arpk-check'], function () {
  return gulp.src(arpkConfig.files)
  .pipe(arpkBuild({
	  "manifest": fs.readFileSync(arpkConfig.manifest)
  }))
  .pipe(gulp.dest('dist'))
});

gulp.task('arpk-check', function () {
  return gulp.src(arpkConfig.manifest)
  .pipe(arpkCheck());
});