const gulp = require('gulp');
const removeFiles = require('gulp-remove-files');
const merge = require("merge-stream");

gulp.task('clearJS', function () {
  return gulp.src('../api/public/*.js')
    .pipe(removeFiles());
});
gulp.task('clearCss', function () {
  return gulp.src('../api/public/*.css')
    .pipe(removeFiles());
});
gulp.task('clearIco', function () {
  return gulp.src('../api/public/*.ico')
    .pipe(removeFiles());
});
gulp.task('clearHtml', function () {
  return gulp.src('../api/resources/views/*.html')
    .pipe(removeFiles());
});
gulp.task('copy-dist', function() {
  return merge([
    gulp.src('./dist/*.js').pipe(gulp.dest('../api/public')),
    gulp.src('./dist/*.css').pipe(gulp.dest('../api/public')),
    gulp.src('./dist/*.ico').pipe(gulp.dest('../api/public')),
    gulp.src('./dist/*.html').pipe(gulp.dest('../api/resources/views')),
  ]);
});
gulp.task('gulp-build', gulp.series('clearJS', 'clearCss', 'clearIco', 'clearHtml','copy-dist'));
