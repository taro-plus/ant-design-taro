import * as childProcess from 'child_process';
import { deleteAsync } from 'del';
import type { TransformOptions } from 'esbuild';
import * as esbuild from 'esbuild';
import * as fg from 'fast-glob';
import * as fs from 'fs';
import * as path from 'path';

export const basePath = './packages/ui';

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

function copyStyleFiles() {
  const lessPaths = fg.sync([...ignorePaths, `${basePath}/**/*.less`]);
  lessPaths.forEach((lessPath) => {
    fs.copyFile(lessPath, lessPath.replace('/ui/', '/ui/dist/es/'), () => {});
    fs.copyFile(lessPath, lessPath.replace('/ui/', '/ui/dist/cjs/'), () => {});
  });
}

async function copyMetaFiles() {
  await deleteAsync(path.join(basePath, 'README.md'));
  fs.copyFile(path.resolve(__dirname, '../README.md'), path.join(basePath, 'README.md'), () => {});
  await deleteAsync(path.join(basePath, 'LICENSE'));
  fs.copyFile(path.resolve(__dirname, '../LICENSE'), path.join(basePath, 'LICENSE'), () => {});
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
