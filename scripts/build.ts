import * as childProcess from 'child_process';
import { deleteAsync } from 'del';
import * as esbuild from 'esbuild';
import * as fg from 'fast-glob';
import * as fs from 'fs';
import * as path from 'path';

const basePath = path.join(path.resolve('./'), 'packages', 'ui');

const filePaths = fg.sync([
  '!**/node_modules/**',
  `!${basePath}/**/*.md`,
  `!${basePath}/**/*.d.ts`,
  `!${basePath}/**/demos/*`,
  `!${basePath}/**/tests/*`,
  `!${basePath}/**/typings.ts`,
  `${basePath}/**/*.{ts,tsx}`,
]);

async function transform(filePath: string) {
  const loader = filePath.endsWith('.ts') ? 'ts' : 'tsx';

  const code = esbuild.transformSync(fs.readFileSync(filePath, 'utf8'), { format: 'esm', loader }).code;

  const targetPath = filePath.replace('/ui/', '/ui/dist/');

  const targetPathArr = targetPath.split('/');

  const targetName = targetPathArr.pop().replace(/(ts|tsx)$/, 'js');

  const targetDir = targetPathArr.join('/');

  fs.mkdirSync(targetDir, { recursive: true });

  fs.writeFileSync(path.join(targetDir, targetName), code, { flag: 'w', encoding: 'utf8' });
}

async function build() {
  await deleteAsync(path.join(basePath, 'dist/**'));

  childProcess.execSync('tsc --emitDeclarationOnly', {
    cwd: basePath,
  });

  filePaths.forEach((filePath) => {
    transform(filePath);
  });
}

build();
