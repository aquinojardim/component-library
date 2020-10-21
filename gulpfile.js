const gulp = require('gulp');
const del = require('del');
const sassCombine = require('gulp-scss-combine');
const concat = require('gulp-concat');
const sass = require('gulp-sass');

gulp.task('cleansrcsass', (done) => {
  del(['src/Styles/theme.scss']);
  done();
});

gulp.task('cleansrccss', (done) => {
  del(['src/Styles/theme.css']);
  done();
});

gulp.task('cleansass', (done) => {
  del(['build/Styles/theme.scss']);
  done();
});

gulp.task('cleancss', (done) => {
  del(['build/Styles/theme.css']);
  done();
});

gulp.task(
  'clean',
  gulp.parallel(
    'cleansrcsass',
    'cleansrccss',
    'cleansass',
    'cleancss',
  ),
);

gulp.task('sassLocal', (done) => {
  gulp
    .src(['src/Styles/1colors.scss', 'src/Styles/*.scss'])
    .pipe(concat('theme.scss'))
    .pipe(sassCombine())
    .pipe(gulp.dest('src/Styles'));
  done();
});

gulp.task('sassBuild', (done) => {
  gulp
    .src(['src/Styles/1colors.scss', 'src/Styles/*.scss'])
    .pipe(concat('theme.scss'))
    .pipe(sassCombine())
    .pipe(gulp.dest('build/Styles'));
  done();
});

gulp.task('cssLocal', (done) => {
  gulp
    .src(['src/Styles/1colors.scss', 'src/Styles/*.scss'])
    .pipe(concat('theme.scss'))
    .pipe(sassCombine())
    .pipe(sass({ style: 'expanded' }))
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
  'build',
  gulp.parallel('sassLocal', 'sassBuild', 'cssLocal', 'cssBuild'),
);
