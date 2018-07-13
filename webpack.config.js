/**
 * Webpack configuration.
 *
 * @requires composer-package:symfony/flex
 * @requires composer-recipe:encore
 *
 * @requires module:babel-preset-env
 * @requires module:babel-preset-es2015
 * @requires module:babel-preset-react
 * @requires module:babel-preset-stage-0
 * @requires module:babel-plugin-syntax-dynamic-import
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

  // Empty the output directory between each build, leaving static files
  .cleanupOutputBeforeBuild(['public'], (options) => {
    options.verbose = true;
    options.root = __dirname;
    options.exclude = ['.htaccess', 'index.php', 'static'];
  })

  // Render all final CSS and JS files with source maps to help debugging
  .enableSourceMaps(!Encore.isProduction())

  // Create hashed file names (e.g. app.abc123.css)
  .enableVersioning(Encore.isProduction())

  // Main scripts and styles definition
  .createSharedEntry('app', './assets/app.jsx')

  // Scene entries
  .addEntry('scenes/maintenance', './assets/scenes/Maintenance')
  .addEntry('scenes/demo/coreui', './assets/scenes/Demo/CoreUI')

  // Use Sass/SCSS files (node-sass, sass-loader)
  .enableSassLoader()
  .addLoader({ test: /\.scss$/, loader: 'import-glob-loader' })

  // Enable notifications (webpack-notifier)
  .enableBuildNotifications()

  // Plugins
  .configureBabel((config) => {
    config.plugins.push(
      // Enable using dynamic imports, using modular per-import chunks
      ['syntax-dynamic-import'],
    );
  })

  // Presets
  .configureBabel((config) => {
    config.presets.push(
      // Enable transpiling down to browser compatibility
      ['env', { targets: { browsers: ['last 2 versions', 'safari >= 7'] } }],
      // Enable transpiling ES2015 to ES5 for uglifying non-ignored modules
      ['es2015'],
      // Enable JSX/React
      ['react'],
      // Enable ES6-strawman (babel-preset-*)
      ['stage-0'],
    );
  });

const config = Encore.getWebpackConfig();

config.module.rules[0].exclude = /node_modules\/(?!(autotrack|dom-utils))/;

module.exports = config;
