import * as childProcess from 'child_process';
import { deleteAsync } from 'del';
import type { TransformOptions } from 'esbuild';
import * as esbuild from 'esbuild';
import * as fg from 'fast-glob';
import * as fs from 'fs';
import * as path from 'path';

export const basePath = './packages/antd-taro';

const ignorePaths = [
  '!**/node_modules/**',
  `!${basePath}/**/*.d.ts`,
  `!${basePath}/**/demos/**`,
  `!${basePath}/**/dist/**`,
  `!${basePath}/**/tests/**`,
];

function tsc() {
  childProcess.execSync('tsc --emitDeclarationOnly', {
    cwd: basePath,
  });
}

function generateFile(destPath: string, content: string) {
  const destDir = path.dirname(destPath);

  const destFileName = path.basename(destPath).replace(/(ts|tsx)$/, 'js');

  fs.mkdirSync(destDir, { recursive: true });

  fs.writeFileSync(path.join(destDir, destFileName), content, { flag: 'w', encoding: 'utf8' });
}

function transform() {
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
      filePath.replace('/antd-taro/', '/antd-taro/dist/es/'),
      esbuild.transformSync(content, {
        format: 'esm',
        ...commonOptions,
      }).code,
    );

    // cjs
    generateFile(
      filePath.replace('/antd-taro/', '/antd-taro/dist/cjs/'),
      esbuild.transformSync(content, {
        format: 'cjs',
        ...commonOptions,
      }).code,
    );
  });
}

function copyStyleFiles() {
  const lessPaths = fg.sync([...ignorePaths, `${basePath}/**/*.less`]);
  lessPaths.forEach((lessPath) => {
    fs.copyFile(lessPath, lessPath.replace('/antd-taro/', '/antd-taro/dist/es/'), () => {});
    fs.copyFile(lessPath, lessPath.replace('/antd-taro/', '/antd-taro/dist/cjs/'), () => {});
  });
}

async function copyMetaFiles() {
  const destPathREADME = path.join(basePath, 'README.md');
  await deleteAsync(destPathREADME);
  fs.copyFile('README.md', destPathREADME, () => {});

  const destPathLICENSE = path.join(basePath, 'LICENSE');
  await deleteAsync(destPathLICENSE);
  fs.copyFile('LICENSE', destPathLICENSE, () => {});
}

export async function build() {
  await deleteAsync(path.join(basePath, 'dist/**'));
  tsc();
  transform();
  copyStyleFiles();
}

export async function buildWithCopyMetaFiles() {
  await build();
  await copyMetaFiles();
}
