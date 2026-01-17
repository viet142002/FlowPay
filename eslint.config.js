// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');

module.exports = defineConfig([
    expoConfig,
    eslintPluginPrettierRecommended,
    {
        ignores: ['dist/*'],
        rules: {
            'prettier/prettier': [
                'error',
                {
                    tabWidth: 4,
                    printWidth: 100,
                    singleQuote: true,
                    semi: true,
                    endOfLine: 'auto',
                    bracketSameLine: false,
                },
            ],
        },
    },
]);
