module.exports = {
  extends: ["airbnb/rules/react", "airbnb/rules/react-a11y", "airbnb/hooks"],
  env: {
    es6: true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 2017,
  },
  rules: {
    "react/jsx-props-no-spreading": "off",
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
  },
};
