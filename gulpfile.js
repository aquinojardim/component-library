const gulp = require('gulp');
const del = require('del');
const sassCombine = require('gulp-scss-combine');
const concat = require('gulp-concat');
const sass = require('gulp-sass');

gulp.task('sassBuild', (done) => {
  del(['build/Styles/theme.scss']);
  gulp
    .src(['src/Styles/1colors.scss', 'src/Styles/*.scss'])
    .pipe(concat('theme.scss'))
    .pipe(sassCombine())
    .pipe(gulp.dest('build/Styles'));
  done();
});

gulp.task('sassLocal', (done) => {
  del(['src/Styles/theme.scss']);
  gulp
    .src(['src/Styles/1colors.scss', 'src/Styles/*.scss'])
    .pipe(concat('theme.scss'))
    .pipe(sassCombine())
    .pipe(gulp.dest('src/Styles'));
  done();
});

gulp.task('cssBuild', (done) => {
  del(['build/Styles/theme.css']);
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
