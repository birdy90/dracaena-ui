module.exports = {
  extends: ["airbnb", "airbnb-typescript"],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "no-plusplus": "off",
    "react/destructuring-assignment": "off",
    "react/require-default-props": "off",
    "react/jsx-props-no-spreading": "off",
    "react/no-array-index-key": "off",
    "react/no-unused-prop-types": "off",
    "max-len": ["error", {
      "code": 120,
      "ignoreTemplateLiterals": true,
      "ignoreUrls": true,
      "ignoreStrings": true
    }],
    "object-curly-newline": "off",
    "jsx-a11y/role-has-required-aria-props": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "jsx-a11y/label-has-for":"off",
  }
};
