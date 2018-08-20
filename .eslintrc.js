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
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    // add your custom rules here
    rules: {

    }
}