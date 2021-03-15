module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ['plugin:react/recommended', 'airbnb'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: ['react'],
    rules: {
        'import/no-extraneous-dependencies': [2, { devDependencies: true }],
        quotes: 0,
        semi: 0,
        'space-before-function-paren': 0,
        curly: 0,
        indent: 0,
        'linebreak-style': [0, 'error', 'windows'],
        'comma-dangle': 0,
        'implicit-arrow-linebreak': 0,
        'no-plusplus': 0,
        'no-console': 0,
        'no-confusing-arrow': 0,
        'function-paren-newline': 0,
        'object-curly-newline': 0,
        'operator-linebreak': 0,
        'max-len': ['error', { code: 600 }],
        'arrow-parens': 'off',
        'object-shorthand': 0,
        'import/extensions': 0,
        'no-param-reassign': 0,
        'no-lonely-if': 0,
        'no-return-assign': 0,
        'no-else-return': 0,
        'prefer-const': 0,
        'no-underscore-dangle': 0,
        'no-v-model-argument': 0,
        'no-underscore-dangle': 0,
        eqeqeq: 0,
        'no-unreachable': 0,
        'react/jsx-indent': 0,
        'react/jsx-indent-props': 0,
        'react/prop-types': 0,
        'react/jsx-filename-extension': 0,
        'react/self-closing-comp': 0,
        'react/destructuring-assignment': 0,
        'no-useless-constructor': 0,
        'react/no-array-index-key': 0,
        'react/jsx-one-expression-per-line': 0,
        'jsx-a11y/no-static-element-interactions': 0,
        'jsx-a11y/click-events-have-key-events': 0
    }
};
