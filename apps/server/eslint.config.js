import { recommended } from '@repo/eslint-config';
import { resolve } from 'path';

export default recommended({
  tsconfigPath: resolve(process.cwd(), './tsconfig.json'),
  tsconfigRootDir: process.cwd(),
});
