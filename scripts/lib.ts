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
}

export function copyStyleFiles() {
  const lessPaths = fg.sync([...ignorePaths, `${basePath}/**/*.less`]);

  lessPaths.forEach((lessPath) => {
    fs.copyFile(lessPath, lessPath.replace('/ui/', '/ui/dist/es/'), (e) => {
      console.log(e);
    });

    fs.copyFile(lessPath, lessPath.replace('/ui/', '/ui/dist/cjs/'), (e) => {
      console.log(e);
    });
  });
}

export function copyMetaFiles() {
  fs.copyFile(path.resolve(__dirname, 'README.md'), path.join(basePath, 'dist', 'README.md'), (e) => {
    console.log(e);
  });

  fs.copyFile(path.resolve(__dirname, 'LICENSE'), path.join(basePath, 'dist', 'LICENSE'), (e) => {
    console.log(e);
  });
}

export async function build() {
  await deleteAsync(path.join(basePath, 'dist/**'));

  tsc();

  transform();

  copyStyleFiles();

  copyMetaFiles();
}

export async function dev() {
  await deleteAsync(path.join(basePath, 'dist/**'));

  tsc();

  transform();

  copyStyleFiles();
}
