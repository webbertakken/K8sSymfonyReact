FROM php:7.2-fpm-alpine

LABEL maintainer="Webber Takken <webber@takken.io>"

RUN php --version

RUN apk add --no-cache $PHPIZE_DEPS
RUN rm -rf /var/cache/apk/* && rm -rf /tmp/*
RUN pecl --version

RUN curl --insecure https://getcomposer.org/composer.phar -o /usr/bin/composer && chmod +x /usr/bin/composer
RUN composer --version

RUN pecl install redis-3.1.6 && docker-php-ext-enable redis
RUN php -i |grep 'Redis Version'

CMD composer install && php-fpm

WORKDIR /var/www/app

EXPOSE 9000
