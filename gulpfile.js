var config = require('./config.js');

var concat = require('gulp-concat');
var gulp = require('gulp');
var mainBowerFiles = require('gulp-main-bower-files');
var merge = require('merge-stream');
var nodemon = require('nodemon');
var watch = require('gulp-watch');

gulp.task('js', function() {
  return merge(
    gulp.src('client/**/*.js'),
    gulp.src('bower.json')
      .pipe(mainBowerFiles())
  )
  .pipe(concat('app.js'))
  .pipe(gulp.dest('build/assets'))
});

gulp.task('files', function() {
  return gulp.src(['client/index.html'])
    .pipe(gulp.dest('build'));
});

gulp.task('default', ['js', 'files'], function() {
  nodemon({
    script: 'server/index.js',
    tasks: ['js', 'files'],
    ext: 'js json html'
  });
});