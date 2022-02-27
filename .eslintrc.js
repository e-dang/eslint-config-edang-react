module.exports = {
  extends: ["airbnb/rules/react", "airbnb/rules/react-a11y", "airbnb/hooks"],
  env: {
    es6: true,
    browser: true,
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".mjs", ".js", ".json", ".ts", ".d.ts", ".jsx", ".tsx"],
      },
    },
  },
  parserOptions: {
    ecmaVersion: 2017,
  },
  rules: {
    "react/jsx-filename-extension": ["error", {extensions: [".jsx", ".tsx"]}],
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
