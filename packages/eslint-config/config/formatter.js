import stylistic from '@stylistic/eslint-plugin';

export function formatter() {
  return [
    {
      plugins: {
        '@stylistic': stylistic,
        '@stylistic/jsx': stylistic,
      },
      rules: {
        /**
         * react
         */
        /**
         * jsx属性，使用单引号
         */
        '@stylistic/jsx-quotes': ['error', 'prefer-single'],
        /**
         * jsx缩进
         */
        '@stylistic/jsx/jsx-indent': [0, 2],
        /**
         * jsx结束标签位置
         */
        '@stylistic/jsx/jsx-closing-bracket-location': [1, 'tag-aligned'], // jsx '>' 位置对齐tag
        /**
         * jsx，属性等于号不能有间隙
         */
        '@stylistic/jsx/jsx-equals-spacing': [2, 'never'],
        '@stylistic/jsx/jsx-indent-props': [2, 2],
        /**
         * 在 JSX 左括号和右括号内及其周围强制使用空格
         */
        '@stylistic/jsx/jsx-tag-spacing': [
          1,
          {
            closingSlash: 'never',
            beforeSelfClosing: 'always',
            afterOpening: 'never',
            beforeClosing: 'allow',
          },
        ],
        /**
         * javascript
         */
        /**
         * 语句结尾要有分号
         * javascript是允许不写分号的,但是有几种情况不写分号又会有问题,
         * 为了降低心智负担,统一必须写分号，
         * 开启eslint auto fix会自动帮你补上分号的，不必怕麻烦（虽然上面的不写分号的几种情况也会帮你补全，说到底就是风格喜好问题）。
         */
        '@stylistic/semi': ['error', 'always'],
        /**
         * 使用单引号
         */
        '@stylistic/quotes': ['error', 'single'],
        /**
         * 使用两个空格缩进
         */
        '@stylistic/indent': [
          'error',
          2,
          {
            MemberExpression: 1,
            FunctionExpression: { body: 1, parameters: 2 },
            CallExpression: { arguments: 'first' },
          },
        ],
        /**
         * 自动添加箭头函数参数括号
         */
        '@stylistic/arrow-parens': ['error', 'always'],

        /**
         * 强制对象文字、解构赋值和导入/导出说明符的大括号内的间距保持一致
         */
        '@stylistic/object-curly-spacing': ['error', 'always'],
        '@stylistic/array-bracket-spacing': ['error', 'always'],

        '@stylistic/linebreak-style': 0,

        /**
         * 在三元表达式的操作数之间强制换行
         */
        '@stylistic/multiline-ternary': 'off',

        /**
         * 多行对象尾随逗号
         */
        '@stylistic/comma-dangle': ['error', 'always-multiline'],

        /**
         * 函数链式调用
         */
        '@stylistic/newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],


        /**
         * 强制空行不能超过1行，文件结尾/开头不能有空行
         */
        '@stylistic/no-multiple-empty-lines': [
          'error',
          {
            max: 1,
            maxEOF: 0,
            maxBOF: 0,
          },
        ],
      },
    },
  ];
}
