# Development
This is the development section. For information on the project, see [README.md](README.md).
Below information will guide you through developing and contributing to the project.

## Prerequisites
Development will go like a breeze; follow the recommendations unless you know what you're doing :)

* Install [PhpStorm](https://www.jetbrains.com/phpstorm/),
or [WebStorm](https://www.jetbrains.com/webstorm/),
or alternatively [VS Code](https://code.visualstudio.com/), for which you'd have to find similar plugins by yourself.

* Have the following software accessible through the CLI

    - git
    - php
    - composer
    - node
    - npm
    - yarn
    - docker
    - docker-compose
    - &lt;cloud provider&gt;-cli

* Install the following plugins

    - Symfony Plugin
    - PHP Annotations
    - PHP Toolbox
    - PHP Inspections (EA Extended)
    - PHPUnit Enhancement
    - Twig
    - ESLint
    - SassLint
    - EditorConfig
    - Markdown Navigator

* Optional colors and styles that work well with this project

    - Colors from my [PHPStormSettings](https://github.com/webbertakken/PHPStormSettings/tree/master/colors) repository
    - [Material Theme](https://github.com/ChrisRM/material-theme-jetbrains) UI Plugin

__Note:__ The rest of all documentation assumes the prerequisites are met.
__Note:__ When using Docker Toolbox on Windows, make sure to disable experimental features,
because of this [issue](https://github.com/docker/for-win/issues/573#issuecomment-288940904).

## Getting started

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
2. Start the asset dev-server running `yarn dev-server`

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
```bash
$ composer self-update
```

##### Updating npm
To update npm, run the following command:
```bash
$ npm install --global npm
```

##### Updating yarn
To update yarn, run the following command:
```bash
$ npm install --global yarn
```

### Unlock built assets
Sometimes it may happen that switching between different asset generation methods
blocks built files from being manipulated. When this happens, run the following
commands:
```bash
$ docker-compose down
$ rm -rf ./public/application/*
$ docker-compose up
$ yarn run dev-server
```
