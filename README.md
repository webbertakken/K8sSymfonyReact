<h3 align="center">K8sSymfonyReact</h3>
<br />
<p align="center">
  <a href="#">
    <img src="./resources/stack.png" width="890" />
  </a>
</p>

<p align="center">
  K8sSymfonyReact is ready-to-go boilerplate for a scalable Symfony application with a React frontend.<br />
  <br />
  <a href="./LICENSE"><img class="badge-img clickable" src="https://img.shields.io/github/license/mashape/apistatus.svg?maxAge=2592000" alt=""></a>
</p>

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
docker-compose -f docker-compose.yml build
yarn copy-dist
docker-compose -f docker-compose.prod.yml build
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

Open sourced under [MIT](./LICENSE) license.
