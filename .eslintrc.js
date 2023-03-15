module.exports = {
    "env": {
        "browser": true,
        "amd": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended"
    ],
    "overrides": [
        {
            // enable the rule specifically for TypeScript files
            "files": ["*.ts", "*.mts", "*.cts", "*.tsx"],
            "rules": {
              "semi": "off",
              "@typescript-eslint/semi": "warn",
              "@typescript-eslint/explicit-function-return-type": "error"
            }
          }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
    },
    
};
