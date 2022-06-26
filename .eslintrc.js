module.exports = {
    "env": {
        "commonjs": true,
        "es2021": true,
        "node": true,
    },
    "extends": [
        "@remix-run/eslint-config",
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
        },
        "ecmaVersion": 2022,
    },
    "plugins": [
        "react",
        "@typescript-eslint",
    ],
    "rules": {
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-unused-vars": ["off"],
        "array-bracket-spacing": [ "error", "always", { "singleValue": false, "objectsInArrays": false, "arraysInArrays": false }],
        "brace-style": [ "error", "1tbs", { "allowSingleLine": true }],
        "comma-dangle": [ "error", "always-multiline" ],
        "comma-spacing": [ "error", { "after": true }],
        "curly": [ "error", "multi" ],
        "dot-location": [ "error", "property" ],
        "indent": [ "error", 4 ],
        "keyword-spacing": [ "error", { "before": true, "after": true }],
        "max-nested-callbacks": [ "error", { "max": 4 }],
        "max-statements-per-line": [ "error", { "max": 3 }],
        "no-irregular-whitespace": ["error"],
        "no-multi-spaces": "error",
        "no-multiple-empty-lines": [ "error", { "max": 2, "maxEOF": 1, "maxBOF": 0 }],
        "no-new-wrappers": "error",
        "no-return-await": "error",
        "no-shadow": ["warn"],
        "no-throw-literal": "warn",
        "no-trailing-spaces": ["error"],
        "no-unused-vars": "off",
        "no-useless-concat": "error",
        "no-var": "error",
        "object-curly-spacing": [ "warn", "always", { "arraysInObjects": false, "objectsInObjects": false }],
        "prefer-const": "warn",
        "prefer-promise-reject-errors": "warn",
        "quotes": [ "error", "double" ],
        "require-await": "error",
        "semi": [ "error", "always" ],
        "space-before-blocks": "error",
        "space-before-function-paren": [ "error", {
            "anonymous": "never",
            "named": "never",
            "asyncArrow": "always",
        }],
        "space-in-parens": "error",
        "space-infix-ops": "error",
        "space-unary-ops": "error",
        "linebreak-style": [ "error", "windows" ],
        "yoda": "error",
    },
};