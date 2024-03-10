module.exports = {
    env: {
        browser: true,
        node: true
    },
    extends: [
        //vue3 문법검사
        //'plugin:vue/vue3-essential', //Lv1
        'plugin:vue/vue3-strongly-recommended', //Lv2
        //'plugin:vue/vue3-recommended', //Lv3 (가장 엄격한 검사)

        //js 문법검사
        'eslint:recommended'
    ],
    parserOptions : {
        parser: '@babel/eslint-parser'
    },
    
    rules: {
        "vue/html-closing-bracket-newline": ["error", {
            "singleline": "never",
            "multiline": "never"
        }],
        "vue/html-self-closing": ["error", {
            "html": {
                "void": "always",
                "normal": "always",
                "component": "always"
            },
            "svg": "always",
            "math": "always"
        }]
    }
}