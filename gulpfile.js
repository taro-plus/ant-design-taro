const del = require('del');
const path = require('path');
const babel = require('gulp-babel');
const ts = require('gulp-typescript');
const tsconfig = require(resolveFile('tsconfig.json'));
const { src, dest, task, watch, series, parallel } = require('gulp');

const ignore = ['**/demos/**/*', '**/tests/**/*'];

function resolveFile(filePath) {
  return path.resolve(__dirname, 'src', filePath);
}

function clean() {
  return del(resolveFile('lib/**'));
}

function buildES() {
  const tsProject = ts({
    ...tsconfig.compilerOptions,
  });

  return src([resolveFile('**/*.{ts,tsx}')], {
    ignore,
  })
    .pipe(tsProject)
    .pipe(dest(resolveFile('lib/es/')));
}

function buildCJS() {
  return src([resolveFile('lib/es/**/*.js')])
    .pipe(
      babel({
        plugins: ['@babel/plugin-transform-modules-commonjs'],
      }),
    )
    .pipe(dest(resolveFile('lib/cjs/')));
}

function buildDeclaration() {
  const tsProject = ts({
    ...tsconfig.compilerOptions,
    module: 'ES6',
    declaration: true,
    emitDeclarationOnly: true,
  });
  return src([resolveFile('**/*.{ts,tsx}')], {
    ignore,
  })
    .pipe(tsProject)
    .pipe(dest(resolveFile('lib/es/')))
    .pipe(dest(resolveFile('lib/cjs/')));
}

function buildStyle() {
  return src([resolveFile('**/*.less')], {
    ignore,
  })
    .pipe(dest(resolveFile('lib/es/')))
    .pipe(dest(resolveFile('lib/cjs/')));
}

function copyMetaFiles() {
  return src(['./README.md', './LICENSE']).pipe(dest(resolveFile('')));
}

function build() {
  return series(clean, buildES, buildCJS, parallel(buildDeclaration, buildStyle))();
}

function dev() {
  return watch(resolveFile('**/*.{ts,tsx,less}'), { ignore, delay: 500 }, build);
}

task('dev', dev);

task('build', (done) => {
  build();

  copyMetaFiles();

  done();
});
