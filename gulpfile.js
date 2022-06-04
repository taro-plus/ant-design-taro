const del = require('del');
const path = require('path');
const gulp = require('gulp');
const babel = require('gulp-babel');
const ts = require('gulp-typescript');
const tsconfig = require('./src/tsconfig.json');

const cwd = process.cwd();
const resolveFile = (filePath) => path.join(cwd, 'src', filePath);
const ignore = ['**/demos/**/*', '**/tests/**/*'];

function clean() {
  return del(resolveFile('lib/**'));
}

function buildES() {
  const tsProject = ts({
    ...tsconfig.compilerOptions,
    module: 'ES6',
  });

  return gulp
    .src([resolveFile('**/*.{ts,tsx}')], {
      ignore,
    })
    .pipe(tsProject)
    .pipe(gulp.dest(resolveFile('lib/es/')));
}

function buildCJS() {
  return gulp
    .src([resolveFile('lib/es/**/*.js')])
    .pipe(
      babel({
        plugins: ['@babel/plugin-transform-modules-commonjs'],
      }),
    )
    .pipe(gulp.dest(resolveFile('lib/cjs/')));
}

function buildDeclaration() {
  const tsProject = ts({
    ...tsconfig.compilerOptions,
    module: 'ES6',
    declaration: true,
    emitDeclarationOnly: true,
  });
  return gulp
    .src([resolveFile('**/*.{ts,tsx}')], {
      ignore,
    })
    .pipe(tsProject)
    .pipe(gulp.dest(resolveFile('lib/es/')))
    .pipe(gulp.dest(resolveFile('lib/cjs/')));
}

function buildStyle() {
  return gulp
    .src([resolveFile('**/*.less')], {
      ignore,
    })
    .pipe(gulp.dest(resolveFile('lib/es/')))
    .pipe(gulp.dest(resolveFile('lib/cjs/')));
}

function copyMetaFiles() {
  return gulp.src(['./README.md', './LICENSE']).pipe(gulp.dest(resolveFile('')));
}

exports.default = gulp.series(clean, buildES, buildCJS, gulp.parallel(buildDeclaration, buildStyle), copyMetaFiles);
