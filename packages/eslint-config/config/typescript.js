import stylistic from "@stylistic/eslint-plugin";
import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
/**
 * 获取typescript eslint配置
 * @param {{overrides:Record<string,any>,tsconfigPath:string}} overrides
 */
export function typescript(
  options = {
    overrides: {},
    tsconfigPath,
    tsconfigRootDir,
  }
) {
  const typeAwareRules = {
    'dot-notation': 'off',
    'no-implied-eval': 'off',
    'no-throw-literal': 'off',
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/dot-notation': ['error', { allowKeywords: true }],

    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-implied-eval': 'error',
    /**
     * 考虑到请求throw promise，此条不开
     */
    '@typescript-eslint/no-throw-literal': 'off',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/no-unsafe-argument': 'error',
    '@typescript-eslint/restrict-plus-operands': 'error',
    '@typescript-eslint/restrict-template-expressions': 'error',
  };
  const { tsconfigPath, tsconfigRootDir, overrides = {} } = options;
  return [
    {
      name: '@ics:eslint-typescript',
      files: ['**/*.?([cm])[jt]s?(x)'],
      languageOptions: {
        parser: tsParser,
        parserOptions: {
          sourceType: 'module',
          ...(tsconfigPath
            ? {
              project: [tsconfigPath],
              tsconfigRootDir,
            }
            : {}),
        },
      },
      plugins: {
        '@typescript-eslint': ts,
        "@stylistic":stylistic
      },
      rules: {
        /**
         * 禁止重复类成员
         */
        'no-dupe-class-members': 'off',
        /**
         * 禁止无效的this
         */
        'no-invalid-this': 'off',
        'no-loss-of-precision': 'off',
        /**
         * 禁止重复声明
         */
        'no-redeclare': 'off',
        'no-use-before-define': 'off',
        'no-unused-vars': 'off',
        'no-useless-constructor': 'off',

        '@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
        '@typescript-eslint/ban-types': ['error', { types: { Function: false } }],
        '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
        '@typescript-eslint/consistent-type-imports': [
          'error',
          { disallowTypeAnnotations: false, prefer: 'type-imports' },
        ],
        '@typescript-eslint/no-dupe-class-members': 'error',
        '@typescript-eslint/no-dynamic-delete': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-extraneous-class': 'off',
        '@typescript-eslint/no-import-type-side-effects': 'error',
        '@typescript-eslint/no-invalid-this': 'error',
        '@typescript-eslint/no-invalid-void-type': 'off',
        '@typescript-eslint/no-loss-of-precision': 'error',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-redeclare': 'error',
        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            vars: 'all', // 检查所有变量的使用情况
            args: 'none', // 不检查函数参数
            caughtErrors: 'none', // 不检查错误对象
            ignoreRestSiblings: true, // 不检查拓展运算符取出的对象
          },
        ],
        '@typescript-eslint/no-useless-constructor': 'off',
        '@typescript-eslint/prefer-ts-expect-error': 'error',
        '@typescript-eslint/triple-slash-reference': 'off',
        '@typescript-eslint/unified-signatures': 'off',
        ...(tsconfigPath ? typeAwareRules : {}),
        ...overrides,
      },
    },
  ];
}
