import gulp from 'gulp'
import browserify from 'browserify'
import babelify from 'babelify'
import watchify from 'watchify'
import source from 'vinyl-source-stream'
import bufferifyify from 'vinyl-buffer'
import rename from 'gulp-rename'
import sourcemaps from 'gulp-sourcemaps'
import { argv } from 'yargs'
import livereload from 'gulp-livereload'
import uglify from 'gulp-uglify'
import gulpif from 'gulp-if'
import gutil from 'gulp-util'

const dev = !argv.production ? true : false

gulp.task('bundle', () => {
  let bundler = browserify({
    cache: {},
    packageCache: {},
    entries: ['./src/core/heightify.js'],
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
      .pipe(source('./src/core/heightify.js'))
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
  gulp.watch('./src/core/**/*.js', ['bundle'])
})

gulp.task('compile', ['bundle']);
gulp.task('default', ['compile', 'watch'])
