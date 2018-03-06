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

  // Use Sass/SCSS files
  .enableSassLoader()

  // Enable notifications
  .enableBuildNotifications()

  // Enable React/JSX
  .enableReactPreset()

  // Enable ES6 proposal stage
  .configureBabel((config) => {
    config.presets.push('stage-1');
  });

module.exports = Encore.getWebpackConfig();
