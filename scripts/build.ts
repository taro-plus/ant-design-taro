import * as childProcess from 'child_process';
import { deleteAsync } from 'del';
import * as esbuild from 'esbuild';
import * as fg from 'fast-glob';
import * as fs from 'fs';
import * as path from 'path';

const basePath = path.join(path.resolve('./'), 'packages', 'ui');

const ignorePaths = [
  '!**/node_modules/**',
  `!${basePath}/**/*.d.ts`,
  `!${basePath}/**/*.md`,
  `!${basePath}/**/demos/*`,
  `!${basePath}/**/dist/**`,
  `!${basePath}/**/tests/*`,
  `!${basePath}/**/typings.ts`,
];

async function transform() {
  const filePaths = fg.sync([...ignorePaths, `${basePath}/**/*.{ts,tsx}`]);

  filePaths.forEach((filePath) => {
    const loader = filePath.endsWith('.ts') ? 'ts' : 'tsx';

    const code = esbuild.transformSync(fs.readFileSync(filePath, 'utf8'), { format: 'esm', loader }).code;

    const targetPath = filePath.replace('/ui/', '/ui/dist/');

    const targetPathArr = targetPath.split('/');

    const targetName = targetPathArr.pop().replace(/(ts|tsx)$/, 'js');

    const targetDir = targetPathArr.join('/');

    fs.mkdirSync(targetDir, { recursive: true });

    fs.writeFileSync(path.join(targetDir, targetName), code, { flag: 'w', encoding: 'utf8' });
  });
}

function tsc() {
  childProcess.execSync('tsc --emitDeclarationOnly', {
    cwd: basePath,
  });
}

function copyLess() {
  const lessPaths = fg.sync([...ignorePaths, `${basePath}/**/*.less`]);

  lessPaths.forEach((lessPath) => {
    fs.copyFileSync(lessPath, lessPath.replace('/ui/', '/ui/dist/'));
  });
}

async function build() {
  await deleteAsync(path.join(basePath, 'dist/**'));

  transform();

  tsc();

  copyLess();
}

build();
