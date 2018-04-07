/**
 * ESLint configuration for JSX/React/ES6-proposed features.
 *
 * @requires module:babel-eslint
 * @requires module:eslint-config-airbnb
 * @requires module:eslint-plugin-babel
 * @requires module:eslint-plugin-import
 * @requires module:eslint-plugin-jsx-a11y
 * @requires module:eslint-plugin-react
 *
 * @author WebberTakken <webber@takken.io>
 */
module.exports = {
  "root": true,
  "parser": "babel-eslint",
  "extends": "airbnb",
  "rules": {
    // fix for https://github.com/airbnb/javascript/issues/1584
    "function-paren-newline": ["error", "consistent"],
    // fix for callback functions ability to modify properties
    "no-param-reassign": ["error", { "props": false }],
  },
  "plugins": [
    "babel",
    "react",
  ],
  "env": {
    "node": true,
    "es6": true,
    "browser": true,
    "jasmine": true,
    "mocha": true,
    "jquery": true,
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
      "modules": true,
      "experimentalObjectRestSpread": true,
    },
  },
};
