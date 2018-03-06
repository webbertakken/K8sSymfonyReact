# Development
This is the development section. For information on the project, see [README.md](../README.md). 
Below information will guide you through developing and contributing to the project.

## Prerequisites
Development will go like a breeze; follow the recommendations unless you know what you're doing :)

* Install [PhpStorm](https://www.jetbrains.com/phpstorm/) or [WebStorm](https://www.jetbrains.com/webstorm/) installed.

* Have the following software accessible through the CLI
 
    - git
    - php
    - composer
    - node
    - npm
    - yarn
    - docker
    - docker-compose
    
* Install the following plugins

    - Symfony Plugin
    - PHP Annotations
    - PHP Toolbox
    - PHP Inspections (EA Extended)
    - Twig
    - ESLint

__Note:__ The rest of all documentation assumes the prerequisites are met.

## Getting started
### Grab the project
1. Clone the repo `git clone git@github.com:webbertakken/ItchyBitchySpider`.
2. Install back-end packages, running `composer install`.
3. Install front-end packages, running `yarn`.

### Project settings
Go to `Settings` > `Languages and Frameworks`.

* Section `Javascript`
    * Set _Javascript language version_ to `React JSX`.
    * Enable _ESLint_ under _Code Quality Tools_ of this section.
    
* Section `Node.js & NPM`
    * Enable _Coding assistance for NodeJs_.
    
* Section `PHP`
    * Enable the _Symfony plugin_ and set `web directory` to `public`.
    * Enable the _Composer plugin_ and register the Composer executable.

Go to `Settings` > `Tools`.

* Configure _PHP-CS-Fixer_; using `.php_cs.dist` as config file;
    * as an [external program](https://hackernoon.com/how-to-configure-phpstorm-to-use-php-cs-fixer-1844991e521f), or;
    * as [file watcher](https://gist.github.com/mpalourdio/46f792347cf9d46b121c#gistcomment-1786139) that runs on save. 

### Starting the application
1. Start application using `docker-compose up`
2. Start the asset dev-server running `yarn run dev-server`, for live reloading scss and jsx

### Stopping the application
1. End the asset dev-server using ctrl-c
2. Stop the application running `docker-compose down`

## Troubleshooting
### Update software
##### Updating NodeJs
To update NodeJs see 
[StackOverflow: updating NodeJs](https://stackoverflow.com/questions/8191459/how-do-i-update-node-js).

##### Updating composer
To update composer, run the following command:
```
$ composer self-update
```

##### Updating npm 
To update npm, run the following command:
```
$ npm install --global npm
```

##### Updating yarn
To update yarn, run the following command:
```
$ npm upgrade --global yarn
```

### Unlock built assets 
Sometimes it may happen that switching between different asset generation methods, 
blocks the files from being manipulated. Run the following commands:
```
$ docker-compose down
$ rm -rf ./public/build/* 
$ docker-compose up
$ yarn run dev-server
```


