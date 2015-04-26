var gulp = require('gulp');
var less = require('gulp-less');
var minifyCss = require('gulp-minify-css');
var connect = require('gulp-connect');
var rename = require('gulp-rename');
var gutil = require('gulp-util');
var ghPages = require('gulp-gh-pages');

gulp.task('css', function() {
  return gulp.src('src/layout.less')
    .pipe(less())
    .pipe(rename('layout.css'))
    .pipe(gulp.dest('dist'))
    .pipe(minifyCss())
    .pipe(rename('layout.min.css'))
    .pipe(gulp.dest('dist'))
    .pipe(gulp.dest('example/css/'))
})

gulp.task('watch', ['css', 'connect'], function() {
  gulp.watch('src/layout.less', ['css']);
  gulp.watch('example/**/*', function(event) {
    return gulp.src(event.path)
      .pipe(connect.reload());
  })
})

gulp.task('deploy', function() {
  return gulp.src('./example/**/*')
    .pipe(ghPages());
});

gulp.task('connect', ['css'], function() {
  connect.server({
    root: ['example'],
    port: 8001,
    livereload: {
      port: 8002
    }
  })
});

gulp.task('start', ['connect', 'watch'], function() {
  process.nextTick(function() {
    console.log(gutil.colors.green('╔═════════════════════════════════════════════════════════╗'));
    console.log(gutil.colors.green('║  Layin example started : http://127.0.0.1:8001          ║'));
    console.log(gutil.colors.green('╚═════════════════════════════════════════════════════════╝'));
  });
})

gulp.task('default', ['start']);
