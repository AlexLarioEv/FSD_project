import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import i18next from 'eslint-plugin-i18next';
import reactHooks from "eslint-plugin-react-hooks";

export default [
    {languageOptions: { globals: globals.browser }},
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    i18next.configs['flat/recommended'],
    {
        plugins: {
            "react": pluginReact,
            "react-hooks": reactHooks,
        },
        files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
        "settings": {
            "react": {
                "version": "detect",
            }
        },
        rules: {
            'react/jsx-indent': [2, 4],
            'react/jsx-indent-props': [2, 4],
            'indent': [2, 4],
            'react/jsx-filename-extension': [2, { 
                extensions: ['.js', '.jsx','.ts', '.tsx'] 
            }],
            'react/require-default-props': 'off',
            'react/react-in-jsx-scope': 'off',
            'no-shadow': 'warn',
            'no-unused-vars': 'off',
            'max-len': ['error', {'code': 120,'ignoreComments': true}],
            '@typescript-eslint/no-unused-vars': [
                "error",
                { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
            ],
            '@typescript-eslint/no-unused-expressions': ["error", { "allowShortCircuit": true }],
            ...reactHooks.configs.recommended.rules,
            "react-hooks/exhaustive-deps": "error",
        },
        ignores: [
            "node_modules/*",    
            "build/*",       
        ],
    },
    {
        files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
        rules: {
            "max-len": "off"
        }
    }
];