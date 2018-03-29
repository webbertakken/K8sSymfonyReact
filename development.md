# Development
This is the development section. For information on the project, see [README.md](README.md). 
Below information will guide you through developing and contributing to the project.

## Prerequisites
Development will go like a breeze; follow the recommendations unless you know what you're doing :)

* Install [PhpStorm](https://www.jetbrains.com/phpstorm/) or [WebStorm](https://www.jetbrains.com/webstorm/).

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
    - SassLint
    - EditorConfig

__Note:__ The rest of all documentation assumes the prerequisites are met.  
__Note:__ When using Docker Toolbox on Windows, make sure to disable experimental features, 
because of this [issue](https://github.com/docker/for-win/issues/573#issuecomment-288940904).

## Getting started
### Grab the project
1. Clone the repo `git clone git@github.com:webbertakken/ItchyBitchySpider`.
2. Install back-end packages, running `composer install`.
3. Install front-end packages, running `yarn`.

### Project settings
Go to `Settings` > `Editor` > `Code Style`.
* Enable the setting _"Enable formatter markers in comments"_.

Go to `Settings` > `Editor` > `Spelling`.
* Register `dictionary.dic` as an additional custom dictionary.
    * __note:__ that [custom dictionaries can't be chosen for words saving](
https://youtrack.jetbrains.com/issue/WI-36432#comment=27-2503889
) yet. The only way to commit new words is to add them to the _project dictionary_
and then copy & paste them into `dictionary.dic`.

Go to `Settings` > `Languages and Frameworks` > `Javascript`
* Set _Javascript language version_ to `React JSX`.
* Enable _ESLint_ under _Code Quality Tools_ of this section.

Go to `Settings` > `Languages and Frameworks` > `Node.js & NPM`
* Enable _Coding assistance for NodeJs_.

Go to `Settings` > `Languages and Frameworks` > `PHP`
* Enable the _Symfony plugin_ and set `web directory` to `public`.
* Enable the _Composer plugin_ and register the Composer executable.

Go to `Settings` > `Tools`.

* Configure _PHP-CS-Fixer_; using `.php_cs.dist` as config file;
    * as an [external program](https://hackernoon.com/how-to-configure-phpstorm-to-use-php-cs-fixer-1844991e521f), or;
    * as [file watcher](https://gist.github.com/mpalourdio/46f792347cf9d46b121c#gistcomment-1786139) that runs on save.

Go to `Settings` > `Other Settings`.

* Enable _Sass Lint_ and register the SassLint executable.

### Starting the application
1. Start application using `docker-compose up`
2. Start the asset dev-server running `yarn run dev-server`, for live reloading scss and jsx

### Stopping the application
1. End the asset dev-server using ctrl-c
2. Stop the application running `docker-compose down`

### Linting
* To check if all javascript files are OK, run ESLint:
```
$ yarn run eslint
```

* To check if all sass files are OK, run sass-lint:
```
$ yarn run sass-lint
```

* To run all linters at once (useful before committing) run the following command:
```
$ yarn run lint
```

## Testing & Deploying
#### Testing
Run PhpUnit
```
$ php bin/phpunit
```
#### Building
After each pushed commit on any branch, an automatic build will be generated to
test the quality of the additions.

#### Deploying
Read [ansible/README.md](ansible/README.md) to find out how to deploy the application.

## Optimising
#### Assets
Since versioning is applied to all asset files; Apache/Nginx can be configured to
send long-lived expires-headers for all asset files to have browsers cache them indefinitely.

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
$ npm install --global yarn
```

### Unlock built assets 
Sometimes it may happen that switching between different asset generation methods, 
blocks the files from being manipulated. Run the following commands:
```
$ docker-compose down
$ rm -rf ./public/application/* 
$ docker-compose up
$ yarn run dev-server
```
