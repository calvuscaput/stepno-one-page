var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cssnano = require('gulp-cssnano'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

gulp.task('style', function() {
    return gulp.src('src/sass/**/*.sass')
    .pipe(sass())
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(cssnano())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('csslibs', function(){
    return gulp.src('src/csslibs/**/*.css')
    .pipe(concat('libs.min.css'))
    .pipe(cssnano())
    .pipe(gulp.dest('dist/css/'))
})

gulp.task('jslibs', function() {
	return gulp.src('src/jslibs/*.js')
		.pipe(concat('libs.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
});

gulp.task('watch', function() {
    gulp.watch('src/sass/**/*.sass', gulp.series('style'));
    gulp.watch('src/csslibs/**/*.css', gulp.series('csslibs'));
    gulp.watch('src/jslibs/*.js', gulp.series('jslibs'));
});