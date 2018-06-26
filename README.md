# ItchyBitchySpider
My personal website.

## Install
##### Clone the repository
```bash
git clone git@github.com:webbertakken/ItchyBitchySpider
cd ItchyBitchySpider
```

##### Install it's dependencies
```bash
composer install
yarn install
```

## Develop
##### Terminal 1:
```bash
yarn dev-server
```

##### Terminal 2:
```bash
docker-compose build && docker-compose up
```
Then visit [localhost](http://localhost) in your favorite browser.

## Test
##### Build assets
```bash
yarn build
```

##### Code style
```bash
yarn lint
./vendor/bin/php-cs-fixer
```

##### Test
```bash
./vendor/bin/simple-phpunit
```

## Release
##### Building the application
```bash
docker-compose -f docker-compose.yml -f docker-compose.prod.yml build
```

##### Pushing the images
```bash
docker-compose -f docker-compose.prod.yml push
```
_(Requires docker to be configured for the container registry)_

##### Rolling update
```bash
kubectl apply -f ./k8s/release/nginx-deployment.yml
kubectl apply -f ./k8s/release/php-fpm-deployment.yml
kubectl apply -f ./k8s/release/mariadb-depoloyment.yml
kubectl apply -f ./k8s/release/redis-master-depoloyment.yml
kubectl apply -f ./k8s/release/redis-slave-depoloyment.yml
kubectl apply -f ./k8s/release/elk-depoloyment.yml
```
_(Requires a running Kubernetes cluster having `.k8s/infrastructure` set up)_

## Contributing
Looking to fork, contribute or submit a correction? Please read the [development](development.md) readme.

Made with ❤ by Webber.

Open sourced under [MIT](./LIN) license.
