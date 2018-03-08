/**
 * Webpack configuration.
 *
 * @requires composer-package:symfony/flex
 * @requires composer-recipe:encore
 *
 * @requires module:babel-preset-react
 * @requires module:babel-preset-stage-1
 * @requires module:node-sass
 * @requires module:sass-loader
 * @requires module:webpack-notifier
 *
 * @author WebberTakken <webber@takken.io>.
 */
const Encore = require('@symfony/webpack-encore');

Encore
  // The project directory where compiled assets will be stored
  .setOutputPath('public/build/')

  // The public path used by the web server to access the previous directory
  .setPublicPath('/build')

  // Empty the output directory between each build
  .cleanupOutputBeforeBuild()

  // Render all final CSS and JS files with source maps to help debugging
  .enableSourceMaps(!Encore.isProduction())

  // Create hashed file names (e.g. app.abc123.css)
  .enableVersioning(Encore.isProduction())

  // Define the script assets
  .addEntry('js/app', './assets/js/app.jsx')

  // Define style assets
  .addStyleEntry('css/app', './assets/css/app.scss')

  // Use Sass/SCSS files (node-sass, sass-loader)
  .enableSassLoader()

  // Enable notifications (webpack-notifier)
  .enableBuildNotifications()

  // Enable React/JSX (babel-preset-react)
  .enableReactPreset()

  // Enable ES6 proposal stage (babel-preset-stage-1)
  .configureBabel((config) => {
    config.presets.push('stage-1');
  });

module.exports = Encore.getWebpackConfig();
