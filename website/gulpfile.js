const { series, watch, parallel } = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'));
const csso = require('gulp-csso');

// const browserSync = require('browser-sync').create();
function Sass(){
    return gulp.src('./style/scss/**/*.scss')
        .pipe(sass())
        .pipe(csso())
        .pipe(gulp.dest('./style/css'))
}

function WatchTask(){
    watch('./style/scss/**/*.scss',
    series(Sass))
}

exports.default = series(
    parallel(Sass),
    WatchTask
)