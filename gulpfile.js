const gulp = require('gulp');
const less = require('gulp-less');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');

const paths = {
  styles: {
    src: './public/css/app.less',
    dest: './public/css/',
  },
};

function styles() {
  return gulp.src(paths.styles.src)
    .pipe(less())
    .pipe(cleanCSS())
    .pipe(rename({
      basename: 'main',
      suffix: '.min',
    }))
    .pipe(gulp.dest(paths.styles.dest));
}
 
function watch() {
  gulp.watch(paths.styles.src, styles);
}
 
/*
 * You can use CommonJS `exports` module notation to declare tasks
 */
exports.styles = styles;
exports.watch = watch;
 
/*
 * Specify if tasks run in series or parallel using `gulp.series` and `gulp.parallel`
 */
const build = styles;

/*
 * You can still use `gulp.task` to expose tasks
 */
gulp.task('build', build);
 
/*
 * Define default task that can be called by just running `gulp` from cli
 */
gulp.task('default', build);