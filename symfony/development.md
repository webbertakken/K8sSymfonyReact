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
    - docker & docker-compose

Any other requirements are taken care of by packages that are managed by the above tools.

## Getting started
### Grab the project
1. Clone the repo `git clone git@github.com:webbertakken/ItchyBitchySpider`.
2. Install back-end packages, running `composer install`.
3. Install front-end packages, running `yarn`.

### General settings
1. Download and install the following plugins
    - Symfony Plugin
    - PHP Annotations
    - PHP Toolbox
    - PHP Inspections (EA Extended)

### Project settigns
1. Enable the Symfony plugin under the plugin-section with `web directory` set to `public` and otherwise default settings.
2. Register the composer executable under the composer plugin-section.
3. Configure PHP-CS-Fixer; using `.php_cs.dist` as config file;
    * as an [external program](https://hackernoon.com/how-to-configure-phpstorm-to-use-php-cs-fixer-1844991e521f), or;
    * as [file watcher](https://gist.github.com/mpalourdio/46f792347cf9d46b121c#gistcomment-1786139) that runs on save. 

### Start Devving!
1. Start application using `docker-compose up`
2. Start the asset dev-server running `yarn run dev-server`, for live reloading scss and jsx

### Stop Devving
1. End the asset dev-server using ctrl-c
2. Stop the application running `docker-compose down`

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

