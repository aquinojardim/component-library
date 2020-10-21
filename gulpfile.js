/* eslint-disable lines-around-directive */
/* eslint-disable strict */
'use strict';

const gulp = require('gulp');
const del = require('del');
const sassCombine = require('gulp-scss-combine');
const concat = require('gulp-concat');
const sass = require('gulp-sass');

gulp.task('cleansrc', (done) => {
  del(['build/Styles/theme.scss']);
  done();
});

gulp.task('cleansass', (done) => {
  del(['src/Styles/theme.scss']);
  done();
});

gulp.task('cleancss', (done) => {
  del(['build/Styles/theme.css']);
  done();
});

gulp.task(
  'clean',
  gulp.parallel('cleansrc', 'cleansass', 'cleancss'),
);

gulp.task('src', (done) => {
  gulp
    .src(['src/Styles/1colors.scss', 'src/Styles/*.scss'])
    .pipe(concat('theme.scss'))
    .pipe(sassCombine())
    .pipe(gulp.dest('src/Styles'));
  done();
});

gulp.task('sass', (done) => {
  gulp
    .src(['src/Styles/1colors.scss', 'src/Styles/*.scss'])
    .pipe(concat('theme.scss'))
    .pipe(sassCombine())
    .pipe(gulp.dest('build/Styles'));
  done();
});

gulp.task('css', (done) => {
  gulp
    .src(['src/Styles/1colors.scss', 'src/Styles/*.scss'])
    .pipe(concat('theme.scss'))
    .pipe(sassCombine())
    .pipe(sass({ style: 'expanded' }))
    .pipe(gulp.dest('build/Styles'));
  done();
});

gulp.task('build', gulp.parallel('src', 'sass', 'css'));
