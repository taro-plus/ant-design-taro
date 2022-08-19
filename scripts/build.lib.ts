import * as childProcess from 'child_process';
import { deleteAsync } from 'del';
import type { TransformOptions } from 'esbuild';
import * as esbuild from 'esbuild';
import * as fg from 'fast-glob';
import * as fs from 'fs';
import * as path from 'path';

export const basePath = path.resolve('./', 'packages', 'ui');

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
  console.log('Compiling TypeScript...');
  childProcess.execSync('tsc --emitDeclarationOnly', {
    cwd: basePath,
  });
  console.log('TypeScript compiled.');
}

export function generateFile(destPath: string, content: string) {
  const destDir = path.dirname(destPath);

  const destFileName = path.basename(destPath).replace(/(ts|tsx)$/, 'js');

  fs.mkdirSync(destDir, { recursive: true });

  fs.writeFileSync(path.join(destDir, destFileName), content, { flag: 'w', encoding: 'utf8' });
}

export function transform() {
  console.log('Transforming TypeScript...');
  const filePaths = fg.sync([...ignorePaths, `${basePath}/**/*.{ts,tsx}`]);

  filePaths.forEach((filePath) => {
    const loader = filePath.endsWith('.ts') ? 'ts' : 'tsx';
    const content = fs.readFileSync(filePath, { encoding: 'utf8' });

    const commonOptions: TransformOptions = {
      loader,
      color: true,
      drop: ['console'],
      charset: 'utf8',
      jsx: 'automatic',
    };

    // esm
    generateFile(
      filePath.replace('/ui/', '/ui/dist/es/'),
      esbuild.transformSync(content, {
        format: 'esm',
        ...commonOptions,
      }).code,
    );

    // cjs
    generateFile(
      filePath.replace('/ui/', '/ui/dist/cjs/'),
      esbuild.transformSync(content, {
        format: 'cjs',
        ...commonOptions,
      }).code,
    );
  });
  console.log('Transformed TypeScript.');
}

export function copyLess() {
  console.log('Copying less...');
  const lessPaths = fg.sync([...ignorePaths, `${basePath}/**/*.less`]);

  lessPaths.forEach((lessPath) => {
    fs.copyFile(lessPath, lessPath.replace('/ui/', '/ui/dist/es/'), () => {});
    fs.copyFile(lessPath, lessPath.replace('/ui/', '/ui/dist/cjs/'), () => {});
  });
  console.log('Copied less.');
}

export function copyMetaFiles() {
  console.log('Copying meta files...');
  fs.copyFile(path.resolve('./', 'README.md'), path.join(basePath, 'dist', 'README.md'), () => {});
  fs.copyFile(path.resolve('./', 'LICENSE'), path.join(basePath, 'dist', 'LICENSE'), () => {});
  console.log('Copied meta files.');
}

export async function build() {
  console.log('Building...');
  await deleteAsync(path.join(basePath, 'dist/**'));

  tsc();

  transform();

  copyLess();

  copyMetaFiles();
  console.log('Built.');
}

export async function dev() {
  console.log('Building...');
  await deleteAsync(path.join(basePath, 'dist/**'));

  tsc();

  transform();

  copyLess();
  console.log('Built.');
}
