// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');

module.exports = defineConfig([
    expoConfig,
    eslintPluginPrettierRecommended,
    {
        ignores: ['dist/*'],
        extends: [
            'eslint:recommended',
            'plugin:@typescript-eslint/recommended',
            'prettier',
        ],
        rules: {
            'no-unreachable': 'warn',
            'no-unused-vars': 'warn',
            '@typescript-eslint/no-unused-vars': 'warn',
            'prettier/prettier': [
                'warn',
                {
                    tabWidth: 4,
                    singleQuote: true,
                    semi: true,
                    endOfLine: 'auto',
                    bracketSameLine: false,
                },
                {
                    usePrettierrc: true,
                    // CHỈ fix lỗi có thể fix được
                    fileInfoOptions: {
                        withNodeModules: false,
                    },
                },
            ],
        },
    },
]);
