import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import refresh from 'eslint-plugin-react-refresh';

/**
 * react eslint 配置
 * @param {{overrides:Record<string,any>,tsconfigPath:string}} overrides
 * @returns
 */
export function react(
  options = {
    overrides: {},
  }
) {
  const { overrides = {} } = options;
  return [
    // react 相关
    {
      settings: {
        react: {
          version: 'detect',
        },
      },
      plugins: {
        react: reactPlugin,
      },
      rules: {
        ...reactPlugin.configs['recommended'].rules,
        ...reactPlugin.configs['jsx-runtime'].rules,
      },
    },
    // react hooks相关
    {
      plugins: {
        'react-hooks': reactHooksPlugin,
      },
      rules: reactHooksPlugin.configs.recommended.rules,
    },
    {
  
      plugins: {
        'react-refresh': refresh,
      },
      rules: {
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
        'react/no-unused-prop-types': 0,
        ...overrides,
      },
    },
  ];
}
