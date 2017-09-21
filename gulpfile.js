var gulp = require('gulp'),
minifyCSS = require('gulp-minify-css'),
minify = require('gulp-minify'),
concat = require('gulp-concat'),
uglify = require('gulp-uglify'),
order = require("gulp-order"),
gutil = require('gulp-util'),
prefix = require('gulp-autoprefixer');


//put your css files here
var css_files = [
  './node_modules/bootstrap/dist/css/bootstrap.min.css',
  './dist/css/main.css'
];

//js files
var js_files = [
  './node_modules/jquery/dist/jquery.min.js',
  './node_modules/popper.js/dist/umd/popper.min.js',
  './node_modules/bootstrap/dist/js/bootstrap.min.js',
  './dist/js/main.js'
];

//compile css
gulp.task('compilecss', function (cb) {
  return gulp.src(css_files)
  .pipe(concat('compiled.min.css'))
  .pipe(minify({ ext:{src:'.css', min:'.min.css'}}))
  .pipe(gulp.dest('./dist/css'))
});

//compile js
gulp.task('compilejs', function (cb) {
  return gulp.src(js_files)
  .pipe(concat('compiled.js'))
  .pipe(minify({ ext:{src:'.js', min:'.min.js'}}))
  .pipe(gulp.dest('./dist/js'))
});

//run all tasks
gulp.task('default', ['compilecss', 'compilejs']);
