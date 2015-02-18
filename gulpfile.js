var gulp = require('gulp'),
  gutil = require('gulp-util'),
  webserver = require('gulp-webserver');

gulp.task('js', function() {
  gulp.src('builds/dev/js/**/*')
});

gulp.task('html', function() {
  gulp.src('builds/dev/*.html')
});

gulp.task('css', function() {
  gulp.src('builds/dev/styles/*.css')
});

gulp.task('watch', function() {
  gulp.watch('builds/dev/js/**/*', ['js']);
  gulp.watch('builds/dev/styles/*.css', ['css']);
  gulp.watch(['builds/dev/*.html',
    'builds/dev/views/*.html'], ['html']);
});

gulp.task('webserver', function() {
  gulp.src('builds/dev/')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

gulp.task('default', ['watch', 'html', 'js', 'css', 'webserver']);
// gulp.task('default',['webserver']);