const gulp = require('gulp')
const browserify = require('browserify')
const babelify = require('babelify')
const watchify = require('watchify')
const source = require('vinyl-source-stream')
const bufferifyify = require('vinyl-buffer')
const rename = require('gulp-rename')
const sourcemaps = require('gulp-sourcemaps')
const argv = require('yargs').argv
const livereload = require('gulp-livereload')
const uglify = require('gulp-uglify')
const gulpif = require('gulp-if')
const gutil = require('gulp-util')

const dev = !argv.production ? true : false

gulp.task('bundle', () => {
  const bundler = browserify({
    cache: {},
    packageCache: {},
    entries: ['./src/heightify.js'],
    debug: dev
  })

  bundler.transform(babelify, {presets: ['es2015']})

  if (dev) bundler = watchify(bundler)

  bundler.on('update', bundle)

  function bundle() {
    return bundler
      .bundle()
      .on('error', (err) => {
        gutil.log(
          gutil.colors.red('Browserify compile error: '),
          err.toString()
        )
      })
      .pipe(source('./src/index.js'))
      .pipe(bufferifyify())
      .pipe(gulpif(!dev, uglify()))
      .pipe(rename('heightify.build.js'))
      .pipe(gulp.dest('./lib/'))
      .pipe(gulpif(dev, livereload()))
  }

  bundle()
})

gulp.task('watch', () => {
  livereload.listen()
  gulp.watch('./src/**/*.js', ['bundle'])
})

gulp.task('compile', ['bundle']);
gulp.task('default', ['compile', 'watch'])
