const gulp = require('gulp');
const sassCombine = require('gulp-scss-combine');
const concat = require('gulp-concat');
const sass = require('gulp-sass');

gulp.task('sassBuild', (done) => {
  gulp
    .src(['src/Styles/1colors.scss', 'src/Styles/*.scss'])
    .pipe(concat('theme.scss'))
    .pipe(sassCombine())
    .pipe(gulp.dest('build/Styles'));
  done();
});

gulp.task('sassLocal', (done) => {
  gulp
    .src(['src/Styles/1colors.scss', 'src/Styles/*.scss'])
    .pipe(concat('theme.scss'))
    .pipe(sassCombine())
    .pipe(gulp.dest('src/Styles'));
  done();
});

gulp.task('cssBuild', (done) => {
  gulp
    .src(['src/Styles/1colors.scss', 'src/Styles/*.scss'])
    .pipe(concat('theme.scss'))
    .pipe(sassCombine())
    .pipe(sass({ style: 'expanded' }))
    .pipe(gulp.dest('build/Styles'));
  done();
});

gulp.task(
  'default',
  gulp.parallel('sassBuild', 'sassLocal', 'cssBuild'),
);
