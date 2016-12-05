var gulp = require('gulp');
var imagemini = require('gulp-imagemin');
var cssmini = require('gulp-minify-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var del = require('del');


var paths = {
    images: 'image/**/*',
    js: 'js/*.js',
    style: 'style/*.css'
};


gulp.task('clean',function(){
    return del('build')
});

gulp.task('image',['clean'],function(){
    return gulp.src(paths.images)
    .pipe(imagemini())
    .pipe(gulp.dest('build/img'));
});



gulp.task('default', ['image']);