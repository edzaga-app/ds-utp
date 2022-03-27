const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const run = require('gulp-run');
const concat = require('gulp-concat');
const minifyCSS = require('gulp-minify-css');
const version= require('./package.json');

sass.compiler = require('node-sass');

//npm install gulp --save --only=dev
//npm install gulp-sass
gulp.task('try', async() => {
  console.log('Hola todo anda bien ');
});

//npm install gulp-minify-css
gulp.task('style_min', async() => {
  return gulp.src('scss/**/*.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(minifyCSS())
    .pipe(concat('style_main_'+version.version+'.min.css'))
    .pipe(gulp.dest('public/stylesheets/min'))
  
});

//gulp watch
gulp.task('watch', async() => {
  gulp.watch('scss/**/*.scss', gulp.series('style_min'));
});



