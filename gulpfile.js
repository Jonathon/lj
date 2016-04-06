const gulp = require('gulp');
//gulp dependencies go here
const babel = require('gulp-babel')
const eslint = require('gulp-eslint');


gulp.task('default', function() {
    //Gulp tasks go here
    //Run ES lint
    gulp.src(["es6/**/*.js", "public/es6/**/*.js"])
	.pipe(eslint())
	.pipe(eslint.format());
	//Node Source
    gulp.src("es6/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("dist"));
    // browser source
    gulp.src("public/es6/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("public/dist"));
});
