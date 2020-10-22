/* eslint-disable lines-around-directive */
/* eslint-disable strict */
'use strict';

const gulp = require('gulp');
const del = require('del');
const sassCombine = require('gulp-scss-combine');
const concat = require('gulp-concat');
const sass = require('gulp-sass');

gulp.task('cleansass', (done) => {
  del(['src/Styles/theme.scss']);
  done();
});

gulp.task('cleancss', (done) => {
  del(['src/Styles/theme.css']);
  done();
});

gulp.task('clean', gulp.parallel('cleansass', 'cleancss'));

gulp.task('buildsass', (done) => {
  gulp
    .src(['src/Styles/1colors.scss', 'src/Styles/*.scss'])
    .pipe(concat('theme.scss'))
    .pipe(sassCombine())
    .pipe(gulp.dest('src/Styles'));
  done();
});

gulp.task('buildcss', (done) => {
  gulp
    .src(['src/Styles/1colors.scss', 'src/Styles/*.scss'])
    .pipe(concat('theme.scss'))
    .pipe(sassCombine())
    .pipe(sass({ style: 'expanded' }))
    .pipe(gulp.dest('src/Styles'));
  done();
});

gulp.task('build', gulp.parallel('buildsass', 'buildcss'));

gulp.task('cleanstyles', (done) => {
  del(['src/Components/Styles']);
  done();
});

gulp.task('cleanreadme', (done) => {
  del(['src/Components/README.md']);
  done();
});

gulp.task('after', gulp.parallel('cleanstyles', 'cleanreadme'));
