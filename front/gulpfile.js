const gulp = require('gulp');
const removeFiles = require('gulp-remove-files');
const merge = require("merge-stream");

gulp.task('clearJS', function () {
  return gulp.src('../../public/*.js')
    .pipe(removeFiles());
});
gulp.task('clearCss', function () {
  return gulp.src('../../public/*.css')
    .pipe(removeFiles());
});
gulp.task('clearIco', function () {
  return gulp.src('../../public/*.ico')
    .pipe(removeFiles());
});
gulp.task('clearHtml', function () {
  return gulp.src('../views/*.html')
    .pipe(removeFiles());
});
gulp.task('copy-dist', function() {
  return merge([
    gulp.src('./dist/*.js').pipe(gulp.dest('../../public')),
    gulp.src('./dist/*.css').pipe(gulp.dest('../../public')),
    gulp.src('./dist/*.ico').pipe(gulp.dest('../../public')),
    gulp.src('./dist/*.html').pipe(gulp.dest('../views')),
  ]);
});
gulp.task('gulp-build', gulp.series('clearJS', 'clearCss', 'clearIco', 'clearHtml','copy-dist'));
