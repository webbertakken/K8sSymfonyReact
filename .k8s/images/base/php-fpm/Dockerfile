FROM alpine:3.6

LABEL maintainer="Webber Takken <webber@takken.io>"

RUN apk add --update \
    php7-fpm \
    php7-apcu \
    php7-ctype \
    php7-curl \
    php7-dom \
    php7-gd \
    php7-iconv \
    php7-imagick \
    php7-json \
    php7-intl \
    php7-mcrypt \
    php7-mbstring \
    php7-opcache \
    php7-openssl \
    php7-pdo \
    php7-pdo_mysql \
    php7-mysqli \
    php7-xml \
    php7-zlib \
    php7-phar \
    php7-tokenizer \
    php7-session \
    make \
    curl

RUN rm -rf /var/cache/apk/* && rm -rf /tmp/*

RUN curl --insecure https://getcomposer.org/composer.phar -o /usr/bin/composer && chmod +x /usr/bin/composer

COPY app.ini /etc/php7/php-fpm.d/
COPY app.ini /etc/php7/cli/conf.d/
COPY app.pool.conf /etc/php7/php-fpm.d/

CMD composer install && php-fpm7 -F

WORKDIR /var/www/app

EXPOSE 9000
