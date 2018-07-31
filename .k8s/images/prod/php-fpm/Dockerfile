FROM base-php

LABEL maintainer="Webber Takken <webber@takken.io>"

ENV APP_ENV prod
ENV APP_SECRET 97replaced-in-kubernetes-config8d
ENV APP_MAINTENANCE true

COPY app.pool.conf /etc/php7/php-fpm.d/

COPY ./dist /var/www/app

WORKDIR /var/www/app

RUN composer install --no-dev --optimize-autoloader

CMD ["php-fpm", "-F"]

EXPOSE 9000
