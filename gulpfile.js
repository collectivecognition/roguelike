var config = require('./config.js');

var concat = require('gulp-concat');
var gulp = require('gulp');
var mainBowerFiles = require('gulp-main-bower-files');
var nodemon = require('nodemon');
var watch = require('gulp-watch');

gulp.task('js', function(cb) {
  watch(['bower.json', '../client/**/*.js'], function() {
    gulp.merge(
      gulp.src('../client/**/*.js'),
      gulp.src('bower.json')
        .pipe(mainBowerFiles())
    )
    .pipe(concat('app.js'))
    .pipe(gulp.dest('build/assets'))
  });
});

gulp.task('default', function() {
  nodemon({
    script: 'server/index.js'
  , tasks: ['js']
  });
});