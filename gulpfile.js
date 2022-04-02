const { dest, parallel, series, src, task } = require('gulp');
const ts = require('gulp-typescript');
const less = require('gulp-less');
const babel = require('gulp-babel');
const del = require('del');
const path = require('path');
const tsconfig = require('./tsconfig.json');
const through = require('through2');

const dscDir = './lib';
const srcDir = './taro/pages/package';

task('clean', () => {
  return del([`${dscDir}/**`]);
});

task('buildES', () => {
  const tsProject = ts({
    ...tsconfig.compilerOptions,
    module: 'ESNext',
  });

  return src([`${srcDir}/**/*.{ts,tsx}`], {
    ignore: ['**/demo/**/*', '**/__tests__/**/*'],
  })
    .pipe(tsProject)
    .pipe(
      babel({
        plugins: ['./scripts/babel-transform-less-to-css'],
      }),
    )
    .pipe(dest(`${dscDir}/es/`));
});

task('buildCJS', () => {
  return src([`${dscDir}/es/**/*.js`])
    .pipe(
      babel({
        plugins: ['@babel/plugin-transform-modules-commonjs'],
      }),
    )
    .pipe(dest(`${dscDir}/cjs/`));
});

task('buildDeclaration', () => {
  const tsProject = ts({
    ...tsconfig.compilerOptions,
    module: 'ESNext',
    declaration: true,
    emitDeclarationOnly: true,
  });
  return src([`${srcDir}/**/*.{ts,tsx}`], {
    ignore: ['**/demo/**/*', '**/__tests__/**/*'],
  })
    .pipe(tsProject)
    .pipe(dest(`${dscDir}/es/`))
    .pipe(dest(`${dscDir}/cjs/`));
});

task('buildStyle', () => {
  return src([`${srcDir}/**/*.less`], {
    base: srcDir,
    ignore: ['**/demo/**/*', '**/__tests__/**/*'],
  })
    .pipe(
      less({
        paths: [path.join(__dirname, '/taro/pages/package')],
        relativeUrls: true,
      }),
    )
    .pipe(dest(`${dscDir}/es/`))
    .pipe(dest(`${dscDir}/cjs/`));
});

task('generatePackageJSON', () => {
  return src('./package.json')
    .pipe(
      through.obj((file, enc, cb) => {
        const rawJSON = file.contents.toString();
        const parsed = JSON.parse(rawJSON);
        delete parsed.private;
        delete parsed.scripts;
        delete parsed.devDependencies;
        delete parsed.publishConfig;
        const stringified = JSON.stringify(parsed, null, 2);
        file.contents = Buffer.from(stringified);
        cb(null, file);
      }),
    )
    .pipe(dest(dscDir));
});

task('copyMetaFiles', () => {
  return src(['./README.md', './LICENSE']).pipe(dest(dscDir));
});

task(
  'build',
  series(
    'clean',
    'buildES',
    'buildCJS',
    parallel('buildDeclaration', 'buildStyle'),
    'copyMetaFiles',
    'generatePackageJSON',
  ),
);
