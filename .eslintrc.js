module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs', 
    'eslint:recommended'
],
  rules: {
    "no-console": 0,
    "require-await": 0,
    "object-shorthand": 0,
    "unicorn/prefer-includes": 0,
    "curly": 0,
    "space-before-function-paren": 0,
    "vue/no-v-html": 0,
    "vue/singleline-html-element-content-newline": 0
  }
}
