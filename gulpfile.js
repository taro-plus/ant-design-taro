const { dest, parallel, series, src, task, watch } = require('gulp');
const ts = require('gulp-typescript');
const less = require('gulp-less');
const babel = require('gulp-babel');
const del = require('del');
const path = require('path');
const tsconfig = require('./tsconfig.json');

const dscDir = './packages/antd-taro/';
const srcDir = './packages/antd-taro-demo/src/ui/';

task('clean', () => {
  return del(`${dscDir}**`);
});

task('buildES', () => {
  const tsProject = ts({
    ...tsconfig.compilerOptions,
    module: 'ESNext',
  });

  console.log(tsProject);

  return src([`${srcDir}**/*.{ts,tsx}`], {
    ignore: ['**/demos/**/*', '**/tests/**/*'],
  })
    .pipe(tsProject)
    .pipe(
      babel({
        plugins: ['./babel-transform-less-to-css'],
      }),
    )
    .pipe(dest(`${dscDir}es/`));
});

task('buildCJS', () => {
  return src([`${dscDir}es/**/*.js`])
    .pipe(
      babel({
        plugins: ['@babel/plugin-transform-modules-commonjs'],
      }),
    )
    .pipe(dest(`${dscDir}cjs/`));
});

task('buildDeclaration', () => {
  const tsProject = ts({
    ...tsconfig.compilerOptions,
    module: 'ESNext',
    declaration: true,
    emitDeclarationOnly: true,
  });
  return src([`${srcDir}**/*.{ts,tsx}`], {
    ignore: ['**/demos/**/*', '**/tests/**/*'],
  })
    .pipe(tsProject)
    .pipe(dest(`${dscDir}es/`))
    .pipe(dest(`${dscDir}cjs/`));
});

task('buildStyle', () => {
  return src([`${srcDir}/**/*.less}`], {
    base: `${srcDir}`,
  })
    .pipe(
      less({
        paths: [path.join(__dirname, 'src')],
        relativeUrls: true,
      }),
    )
    .pipe(dest(`${dscDir}es/`))
    .pipe(dest(`${dscDir}cjs/`));
});

task('copyMetaFiles', () => {
  return src(['./README.md', './LICENSE']).pipe(dest(dscDir));
});

task('build', series('clean', 'buildES', 'buildCJS', parallel('buildDeclaration', 'buildStyle'), 'copyMetaFiles'));
