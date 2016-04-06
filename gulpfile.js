const gulp = require('gulp');
//gulp dependencies go here
const babel = require('gulp-babel')
gulp.task('default', function() {
    //Gulp tasks go here
    gulp.src("es6/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("dist"));
    // browser source
    gulp.src("public/es6/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("public/dist"));
});
