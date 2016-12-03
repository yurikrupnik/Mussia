module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "sourceType": "module"
    },
    "rules": {
        "no-unused-vars": 0 // do not show React or components as errors
        // "react/jsx-no-undef": 0,
        // "react/jsx-equals-spacing": [1, "always"],
        // "react/prop-types": [1, {"ignore": ["children"]} ],
        // "arrow-parens": [2, "as-needed"],
        // "camelcase": 2,
        // "linebreak-style": [
        //     "errors",
        //     "unix"
        // ],
        // "quotes": [
        //     "errors",
        //     "single"
        // ],
        // "semi": [
        //     "errors",
        //     "always"
        // ]
    },
    // "extends": ["standard", "standard-react"],
    "plugins": [
        // "react",
    ]
};