import * as chokidar from 'chokidar';
import { basePath, dev } from './lib';

const watcher = chokidar.watch(`${basePath}/**`, {
  ignored: [`${basePath}/dist/**`, `${basePath}/node_modules/**`, `${basePath}/**/tests/*`],
});

watcher.on('ready', () => {
  dev();
});

watcher.on('change', () => {
  dev();
});

watcher.on('error', (error) => {
  console.error(error);
});
