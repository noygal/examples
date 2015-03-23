var gulp = require('gulp');
var less = require('gulp-less');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var reactify = require('reactify');


var paths = {
  bin : './public/app.js',
  src : 'public/src/',
  js : './public/src/app.js',
  less : './public/src/main.less',
  spec : 'public/src/**/*.spec.js',
}

gulp.task('reactify', function(cb) {
  var b = browserify();
  b.transform(reactify); // use the reactify transform
  b.add(paths.js);
  return b.bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./public'));
  cb();
});

gulp.task('less', function(cb) {
  gulp.src(paths.less)
    .pipe(less())
    .pipe(gulp.dest('./public'));
  cb();
});

gulp.task('test', function(cb) {
  // gulp.src([paths.spec], {read: false})
  //   .pipe(mocha());
  cb();
});

gulp.task('build', ['reactify', 'less']);

gulp.task('watch', function() {
  gulp.watch(['public/src/**/*.js'], ['reactify', 'test']);
  gulp.watch(['public/src/**/*.less'], ['less']);
});

gulp.task('bt', ['build', 'test']);
gulp.task('default', ['build', 'test', 'watch']);
