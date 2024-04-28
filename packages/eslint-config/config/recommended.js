import { formatter } from './formatter.js';
import { ignores } from './ignore.js';
import { javascript } from './javascript.js';
import { react as reactRules } from "./react.js";
import { typescript } from './typescript.js';

export function recommended(options = {}) {
  const { tsconfigPath, tsconfigRootDir, react = true } = options;
  return [
    ...(react ? reactRules() : []),
    ...javascript(),
    ...typescript({
      tsconfigPath,
      tsconfigRootDir,
    }),
    ...formatter(),
    ...ignores(),
  ];
}
