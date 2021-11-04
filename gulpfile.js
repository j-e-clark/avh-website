const { watch, src, dest, parallel, task } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');

function cssTask() {
  return src('./src/scss/main.scss', { allowEmpty: true })
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }))
    .on('error', sass.logError)
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('./src/site/_includes/css'));
}

function watchFiles() {
  watch('./**/*.scss', parallel(cssTask));
}

task('build', parallel(cssTask));

exports.default = parallel(cssTask, watchFiles);
