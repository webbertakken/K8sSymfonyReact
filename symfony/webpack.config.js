const Encore = require('@symfony/webpack-encore');

Encore
    // the project directory where compiled assets will be stored
    .setOutputPath('public/build/')

    // the public path used by the web server to access the previous directory
    .setPublicPath('/build')

    // empty the output directory between each build
    .cleanupOutputBeforeBuild()

    // render all final CSS and JS files with source maps to help debugging
    .enableSourceMaps(!Encore.isProduction())

    // create hashed file names (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())

    // define the script assets
    .addEntry('js/app', './assets/js/app.js')

    // define style assets
    .addStyleEntry('css/app', './assets/css/app.scss')

    // use Sass/SCSS files
    .enableSassLoader()

    // enable notifications
    .enableBuildNotifications()

;

module.exports = Encore.getWebpackConfig();
