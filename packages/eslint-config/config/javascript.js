import globals from 'globals';
/**
 * javascript 相关的eslint配置
 * @author wen
 * @param {{overrides:Record<string,any>}} overrides 覆盖重写的规则
 * @returns
 */
export function javascript(
  options = {
    overrides: {},
  }
) {
  const { overrides } = options;
  return [
    {
      name: 'ics:eslint-javascript',
      languageOptions: {
        ecmaVersion: 2022,
        globals: {
          ...globals.es2021,
          ...globals.browser,
          ...globals.node,
          API: 'readonly',
          document: 'readonly',
          navigator: 'readonly',
          window: 'readonly',
        },
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
          ecmaVersion: 2022,
          sourceType: 'module',
        },
        sourceType: 'module',
      },
      linterOptions: {
        reportUnusedDisableDirectives: true,
      },
      rules: {
        /**
         * 禁止使用var声明变量
         */
        'no-var': 'error',
        /**
         * 禁止使用with语句，你把持不住的
         */
        'no-with': 'error',
        /**
         * 禁止意外多行表达式，如果没有启用语句末尾分号，一定要开启此条
         */
        'no-unexpected-multiline': 'error',
        /**
         * 禁止不会修改的循环条件，防止无限循环
         */
        'no-unmodified-loop-condition': 'error',
        /**
         * 禁止不可达循环，你要是真要这么写，大概率是思路有问题
         */
        'no-unreachable-loop': 'error',
        /**
         * 禁止不可达语句，不要写一些没必要的，记得要大道至简
         */
        'no-unreachable': 'error',
        /**
         * map、filter、some、every等数组方法需有返回值
         */
        'array-callback-return': 'error',
        /**
         * var 没有块级作用域
         */
        'block-scoped-var': 'error',
        /**
         * 禁止重复声明
         */
        'no-redeclare': 'error',
        /**
         * 有父类必须调用super、没有则不得调用
         */
        'constructor-super': 'error',
        /**
         * switch必须包含default语句
         */
        'default-case-last': 'error',
        /**
         * 必须使用===判断相等，字符串、数组、布尔值除外
         */
        eqeqeq: ['error', 'smart'],
        /**
         * 禁止alert、调试没必要用alert
         */
        'no-alert': 'error',
        /**
         * 只能使用[]字面量创建数组
         */
        'no-array-constructor': 'error',
        /**
         * 构造函数必须以大写开头
         * 很难想象有人构造函数都小写开头的
         */
        'new-cap': 'error',
        /**
         * 禁止覆盖class定义
         */
        'no-class-assign': 'error',
        /**
         * 禁止与-0比较
         */
        'no-compare-neg-zero': 'error',
        /**
         * 禁止在条件表达式写赋值语句
         * if(user.name='batman'){}
         */
        'no-cond-assign': 'error',
        /**
         * debugger 给一个警告，调试完记得去除
         */
        'no-debugger': 'warn',
        /**
         * console.log一般用于调试，忘记清no-ex-assignno-ex-assign除的话可能会造成内存泄漏
         * 除开必要的warn和error，应该禁用
         */
        'no-console': ['error', { allow: ['warn', 'error'] }],
        /**
         * 禁止删除变量
         * 注：删除对象是属性是可以的
         */
        'no-delete-var': 'error',
        /**
         * 禁止类似以下的空解构代码
         * const {} = foo
         * const [] = arr
         */
        'no-empty-pattern': 'error',
        /**
         * 禁止在catch中重新赋值错误
         * 你想干嘛？
         */
        'no-ex-assign': 'error',
        /**
         * 禁止函数重复同名参数
         * 这居然不是自带的?
         */
        'no-dupe-args': 'error',
        /**
         * 禁止重复类成员
         */
        'no-dupe-class-members': 'error',
        /**
         * 禁止拓展原生类型
         * Object.prototype.name = 'wen'
         * 有时候出了问题你都不知道是哪里有问题
         */
        'no-extend-native': 'error',
        /**
         * 禁止不必要的布尔值转换
         * const flag = '123'
         * if(Boolean(flag)){}
         */
        'no-extra-boolean-cast': 'error',
        /**
         * 注意switch case的边界情况
         */
        'no-fallthrough': 'error',
        /**
         * 禁止给函数声明重新赋值
         */
        'no-func-assign': 'error',
        /**
         * 禁止修改原生全局变量
         */
        'no-global-assign': 'error',
        /**
         * 禁止导出变量重新赋值
         * import { name } from "./person.js"
         * // 这里修改是无效的，但是还是要eslint给你报个错
         * name = 'tim'
         */
        'no-import-assign': 'error',
        /**
         * 禁止在this为undefined的上下文中使用this
         */
        'no-invalid-this': 'error',
        /**
         * 禁止不规则的空格，为了好看也为了es5的解析器不出错
         */
        'no-irregular-whitespace': 'error',
        /**
         * 禁止修改原型链上的__iterator__
         */
        'no-iterator': 'error',
        /**
         * 禁用label，这个语法现在很少人用了吧，容易写出不易理解的代码
         */
        'no-labels': 'error',
        /**
         * 禁止不必要的代码块
         */
        'no-lone-blocks': 'error',
        /**
         * 禁止new String\Number\Boolean
         */
        'no-new-wrappers': 'error',
        /**
         * 禁止访问对象的__proto__
         */
        'no-proto': 'error',
        
       
        /**
         * 禁止直接在对象上调用原型链的某些方法
         * const person = { name:"tim" }
         * 以下错误
         * person.hasOwnProperty('name')
         * 以下正确
         * Object.prototype.hasOwnProperty.call(person,"name")
         */
        'no-prototype-builtins': 'error',
       
        /**
         * 禁止没必要的分配
         * [a,b] = [a,b]
         */
        'no-self-assign': 'error',
        /**
         * 禁止没必要的比较
         */
        'no-self-compare': 'error',

        /**
         * 禁止使用逗号表达式,容易写出有副作用的代码
         * let b = 0
         * const a = (b=2,3);
         * console.log(a,b);// 3,2
         */
        'no-sequences': 'error',
        /**
         * 禁止使用保留字作为名称
         * 比较蛋疼的是undefined不是保留字，所以就有用 void 0 替代undefined的做法
         * const undefined = 'wuhu'
         */
        'no-shadow-restricted-names': 'error',
        /**
         * 禁止稀疏数组，类似[1,,3]
         */
        'no-sparse-arrays': 'error',
        /**
         * 禁止类在调用必要的super之前，访问this
         */
        'no-this-before-super': 'error',
        /**
         * 禁止将字符串作为异常抛出
         */
        'no-throw-literal': 'error',
        // /**
        //  * 禁止使用未声明的变量
        //  */
        // 'no-undef': 'error',
        /**
         * 禁止未使用的表达式
         */
        'no-unused-expressions': 'error',
        /**
         * 禁止将变量初始化为undefined，因为默认就是undefined，多此一举了
         */
        'no-undef-init': 'error',
        /**
         * 禁止在finally中出现控制流语句
         */
        'no-unsafe-finally': 'error',
        /**
         * 禁止未使用的变量
         */
        'no-unused-vars': [
          'error',
          {
            vars: 'all', // 检查所有变量的使用情况
            args: 'none', // 不检查函数参数
            caughtErrors: 'none', // 不检查错误对象
            ignoreRestSiblings: true, // 不检查拓展运算符取出的对象
          },
        ],
        /**
         * 禁止在变量定义前使用变量，
         * 现在基本上都用let来定义，有暂时性死区，这个意义不大了
         */
        'no-use-before-define': 'error',
        /**
         * 禁止对call、apply进行不必要的调用
         */
        'no-useless-call': 'error',
        /**
         * 禁止没必要的对象计算键
         * const person = {
         *  ["address"]:"FoShan" // 这里address就没必要了，又不是不能直接写
         * }
         */
        'no-useless-computed-key': 'error',
        /**
         * 禁止没必要的构造函数，比如空的构造函数
         */
        'no-useless-constructor': 'error',
        /**
         * 禁止多余的返回语句
         */
        'no-useless-return': 'error',
        /**
         * 首选箭头函数作为回调首选
         */
        'prefer-arrow-callback': [
          'error',
          {
            allowNamedFunctions: false,
            allowUnboundThis: true,
          },
        ],
        /**
         * 首选使用const定义常量
         */
        'prefer-const': [
          'error',
          {
            destructuring: 'all',
            ignoreReadBeforeAssign: true,
          },
        ],
        /**
         * 首选rest剩余函数（而不是arguments）
         */
        'prefer-rest-params': 'error',
        /**
         * 首选模板字符串而不是拼接字符
         */
        'prefer-template': 'error',
        /**
         * 导入排序
         */
        'sort-imports': [
          'error',
          {
            allowSeparatedGroups: false,
            ignoreCase: false,
            ignoreDeclarationSort: true,
            ignoreMemberSort: false,
            memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
          },
        ],
        /**
         * 强制与typeof有效值比较
         */
        'valid-typeof': 'error',
        /**
         * var变量必须声明在作用域顶部
         */
        'vars-on-top': 'error',
        yoda: ['error', 'never'],
        ...overrides,
      },
    },
  ];
}
