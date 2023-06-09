module.exports = {
  "extends": ["airbnb-base", "plugin:prettier/recommended", "plugin:jest/recommended"],
  "plugins": ["promise", "prettier", "jest"],
  "env": {
    "node": true,
    "jest": true
  },
  "rules": {
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error",
    "prettier/prettier": [
      "error",
      {
        "printWidth": 120,
        "singleQuote": true,
        "trailingComma": "es5"
      }
    ]
  }
}
