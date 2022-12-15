import * as chokidar from 'chokidar';
import { basePath, build } from './lib';

const watcher = chokidar.watch(`${basePath}/**`, {
  ignored: [`${basePath}/dist/**`, `${basePath}/node_modules/**`, `${basePath}/**/tests/*`],
});

watcher.on('ready', () => {
  build().catch((error) => {
    console.error(error);
  });
});

watcher.on('change', () => {
  build().catch((error) => {
    console.error(error);
  });
});

watcher.on('error', (error) => {
  console.error(error);
});
