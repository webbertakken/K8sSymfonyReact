# Development

## Prerequisites
- An IDE (like [PhpStorm](https://www.jetbrains.com/phpstorm/)).
- Software accessible through commandline 
    - git
    - php
    - composer
    - node
    - npm
    - yarn

Any other requirements are taken care of by packages that are managed by the above tools.

## Setting up PhpStorm
### Plugins
1. Download and install the following plugins
    - Symfony Plugin
    - PHP Annotations
    - PHP Toolbox
2. Enable the Symfony plugin under the plugin-section with `web directory` set to `public` and otherwise default settings.
3. Register the composer executable under the composer plugin-section. 

## Usage
### Getting started
1. Clone the repo `git clone git@github.com:webbertakken/ItchyBitchySpider`.
2. Install back-end packages, running `composer install`.
3. Install front-end packages, running `yarn`.
3. Start the server, using `bin/console server:run`.
4. Start Devving! 

## Troubleshooting
### Update software
Make sure your software is up-to-date;
```
# Updating composer
$ composer self-update

# Updating npm
$ npm install --global npm

# Updating yarn
$ npm upgrade --global yarn
```
See [StackOverflow](https://stackoverflow.com/questions/8191459/how-do-i-update-node-js) for updating NodeJs.

