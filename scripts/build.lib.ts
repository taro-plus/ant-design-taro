import * as childProcess from 'child_process';
import { deleteAsync } from 'del';
import * as esbuild from 'esbuild';
import * as fg from 'fast-glob';
import * as fs from 'fs';
import * as path from 'path';

export const basePath = path.join(path.resolve('./'), 'packages', 'ui');

export const ignorePaths = [
  '!**/node_modules/**',
  `!${basePath}/**/*.d.ts`,
  `!${basePath}/**/*.md`,
  `!${basePath}/**/demos/*`,
  `!${basePath}/**/dist/**`,
  `!${basePath}/**/tests/*`,
  `!${basePath}/**/typings.ts`,
];

export function tsc() {
  childProcess.execSync('tsc --emitDeclarationOnly', {
    cwd: basePath,
  });
}

export function generateFile(destPath: string, content: string) {
  const destDir = path.dirname(destPath);

  const destFileName = path.basename(destPath).replace(/(ts|tsx)$/, 'js');

  fs.mkdirSync(destDir, { recursive: true });

  fs.writeFileSync(path.join(destDir, destFileName), content, { flag: 'w', encoding: 'utf8' });
}

export function transform() {
  const filePaths = fg.sync([...ignorePaths, `${basePath}/**/*.{ts,tsx}`]);

  filePaths.forEach((filePath) => {
    const loader = filePath.endsWith('.ts') ? 'ts' : 'tsx';
    const content = fs.readFileSync(filePath, { encoding: 'utf8' });

    // esm
    generateFile(
      filePath.replace('/ui/', '/ui/dist/es/'),
      esbuild.transformSync(content, {
        format: 'esm',
        loader,
        banner: loader === 'tsx' ? 'import React from "react";' : '',
      }).code,
    );

    // cjs
    generateFile(
      filePath.replace('/ui/', '/ui/dist/cjs/'),
      esbuild.transformSync(content, {
        format: 'cjs',
        loader,
        banner: loader === 'tsx' ? 'var React = require("react");' : '',
      }).code,
    );
  });
}

export function copyLess() {
  const lessPaths = fg.sync([...ignorePaths, `${basePath}/**/*.less`]);

  lessPaths.forEach((lessPath) => {
    fs.copyFile(lessPath, lessPath.replace('/ui/', '/ui/dist/es/'), () => {});
    fs.copyFile(lessPath, lessPath.replace('/ui/', '/ui/dist/cjs/'), () => {});
  });
}

export function copyMetaFiles() {
  fs.copyFile(path.join(path.resolve('./'), 'README.md'), path.join(basePath, 'dist', 'README.md'), () => {});
  fs.copyFile(path.join(path.resolve('./'), 'LICENSE'), path.join(basePath, 'dist', 'LICENSE'), () => {});
}

export async function build() {
  await deleteAsync(path.join(basePath, 'dist/**'));

  tsc();

  transform();

  copyLess();

  copyMetaFiles();
}

export async function dev() {
  await deleteAsync(path.join(basePath, 'dist/**'));

  tsc();

  transform();

  copyLess();
}
