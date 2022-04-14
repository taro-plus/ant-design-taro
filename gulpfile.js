const { dest, parallel, series, src } = require('gulp');
const ts = require('gulp-typescript');
const less = require('gulp-less');
const babel = require('gulp-babel');
const del = require('del');
const path = require('path');
const tsconfig = require('./tsconfig.json');
const through = require('through2');

const dscDir = './lib';
const srcDir = './src';
const ignoreFiles = ['**/demos/**/*', '**/tests/**/*'];

function clean() {
  return del([`${dscDir}/**`]);
}

function buildES() {
  const tsProject = ts({
    ...tsconfig.compilerOptions,
    module: 'ESNext',
  });

  return src([`${srcDir}/**/*.{ts,tsx}`], {
    ignore: ignoreFiles,
  })
    .pipe(tsProject)
    .pipe(
      babel({
        plugins: ['./scripts/babel-transform-imports.js'],
      }),
    )
    .pipe(dest(`${dscDir}/es/`));
}

function buildCJS() {
  return src([`${dscDir}/es/**/*.js`])
    .pipe(
      babel({
        plugins: ['@babel/plugin-transform-modules-commonjs'],
      }),
    )
    .pipe(dest(`${dscDir}/cjs/`));
}

function buildDeclaration() {
  const tsProject = ts({
    ...tsconfig.compilerOptions,
    module: 'ESNext',
    declaration: true,
    emitDeclarationOnly: true,
  });
  return src([`${srcDir}/**/*.{ts,tsx}`], {
    ignore: ignoreFiles,
  })
    .pipe(tsProject)
    .pipe(dest(`${dscDir}/es/`))
    .pipe(dest(`${dscDir}/cjs/`));
}

function buildStyle() {
  return src([`${srcDir}/**/*.less`], {
    base: srcDir,
    ignore: ignoreFiles,
  })
    .pipe(
      less({
        paths: [path.join(__dirname, '..', '/src')],
      }),
    )
    .pipe(dest(`${dscDir}/es/`))
    .pipe(dest(`${dscDir}/cjs/`));
}

function generatePackageJSON() {
  return src('./package.json')
    .pipe(
      through.obj((file, enc, cb) => {
        const rawJSON = file.contents.toString();
        const parsed = JSON.parse(rawJSON);
        delete parsed.private;
        delete parsed.scripts;
        delete parsed.devDependencies;
        const stringified = JSON.stringify(parsed, null, 2);
        file.contents = Buffer.from(stringified);
        cb(null, file);
      }),
    )
    .pipe(dest(dscDir));
}

function copyMetaFiles() {
  return src(['./README.md', './LICENSE']).pipe(dest(dscDir));
}

exports.default = series(clean, buildES, buildCJS, parallel(buildDeclaration, buildStyle));
