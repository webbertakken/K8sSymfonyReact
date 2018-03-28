/**
 * Webpack configuration.
 *
 * @requires composer-package:symfony/flex
 * @requires composer-recipe:encore
 *
 * @requires module:babel-preset-env
 * @requires module:babel-preset-react
 * @requires module:babel-preset-stage-0
 * @requires module:node-sass
 * @requires module:sass-loader
 * @requires module:webpack-notifier
 *
 * @author WebberTakken <webber@takken.io>.
 */
const Encore = require('@symfony/webpack-encore');

Encore
// The project directory where compiled assets will be stored
  .setOutputPath('public')

  // The public path used by the web server to access the previous directory
  .setPublicPath('/')

  // Empty the output directory between each build, leaving index.php
  .cleanupOutputBeforeBuild(['public'], (options) => {
    options.verbose = true;
    options.root = __dirname;
    options.exclude = ['index.php'];
  })

  // Render all final CSS and JS files with source maps to help debugging
  .enableSourceMaps(!Encore.isProduction())

  // Create hashed file names (e.g. app.abc123.css)
  .enableVersioning()

  // Main scripts and styles definition
  .createSharedEntry('app', './assets/app.jsx')

  // Scene entries
  .addEntry('scenes/maintenance', './assets/scenes/Maintenance')

  // Use Sass/SCSS files (node-sass, sass-loader)
  .enableSassLoader()
  .addLoader({ test: /\.scss$/, loader: 'import-glob-loader' })

  // Enable notifications (webpack-notifier)
  .enableBuildNotifications()

  // Enable browser/JSX/React/ES6-strawman (babel-preset-*)
  .configureBabel((config) => {
    config.presets.push(
      ['env', { targets: { browsers: ['last 2 versions', 'safari >= 7'] } }],
      ['react'],
      ['stage-0'],
    );
  });

module.exports = Encore.getWebpackConfig();
