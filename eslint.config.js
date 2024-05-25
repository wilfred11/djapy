const js = require("@eslint/js");
const globals = require ("globals");

//import js from "@eslint/js";

module.exports = {
    ...js.configs.recommended,
    files: ["src/**/*.js"],
    rules: {
        "no-undef": "warn",
        "semi": "warn"
    },
    languageOptions: {
        globals: {
             "window": true,
             "browser": true,
             "node": true,
             "jasmine": true,
            "console":true,
            "alert":true,
            "$":true,
            "document":true
        }
    },
}