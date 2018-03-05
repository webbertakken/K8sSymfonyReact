# ItchyBitchySpider
My personal website.

## Usage
Below an easy 6 steps to get the application up and running

1. Clone the repo `git clone git@github.com:webbertakken/ItchyBitchySpider`
2. Route `symfony.local` to `127.0.0.1` in your hosts file. 
3. Navigate to the symfony folder `cd ItchyBitchySpider/symfony`
4. Install dependencies `composer install && yarn && yarn run dev-server`
5. Start the application `docker-compose up`
6. Navigate to the following resources:
    * [symfony.local](http://symfony.local/), to access the application;
    * [symfony.local:81](http://symfony.local:81/), to access analytics;
    * [symfony.local:3306](mysql://symfony.local) using a database administration tool, for database access.

## Contributing
If you're looking to fork, contribute or submit a correction; please read 
[symfony/development.md](symfony/development.md) to go through a few quick steps to get you started!

## Copyright
Copyright (c) Webber, MIT license.
