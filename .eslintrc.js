module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
      sourceType: 'module',
      ecmaVersion: 7,
      ecmaFeatures: {
        jsx: true
      }
    },
    env: {
      browser: true, //预定义的全局变量，这里是浏览器环境
    },
    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    extends: 'standard',
    // required to lint *.vue files
    // add your custom rules here
    rules: {
        
    }
}