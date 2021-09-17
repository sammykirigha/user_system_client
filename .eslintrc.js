module.exports = {
    'env': {
        'es2021': true,
        'node': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:pretier/recommended'
    ],
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 12,
        'sourceType': 'module'
    },
    'plugins': [
        'react'
    ],
    'rules': {
        'semi': ['warn', 'always'],
        'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
        'react/jsx-uses-vars': 'warn',
        'no-undef': 'off',
        'react/react-in-jsx-scope': 'off',
        'react-hooks/rules-of-hooks': 'off',
    },
    'settings': {
        react: {
            version: 'detect'
        }
    },
    'extends': [
        'prettier'
    ]
};
