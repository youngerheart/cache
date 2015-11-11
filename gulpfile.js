var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var runSequence = require('run-sequence');

var lazyWatch = function(glob, task) {
  return function() {
    var tick;
    gulp.watch(glob, function() {
      if(tick) return;
      tick = setTimeout(function() {
        runSequence(task);
        tick = void 0;
      });
    });
  };
};

gulp.task('watch', lazyWatch(['./index.js'], 'compile'));

gulp.task('compile', function() {
  return gulp.src('index.js')
  .pipe(babel({presets: ['es2015']}))
  .pipe(uglify())
  .pipe(rename('cache.min.js'))
  .pipe(gulp.dest('dist'));
});


gulp.task('dev', function(done) {
  runSequence([
    'compile',
    'watch'
    ],  done);
});

