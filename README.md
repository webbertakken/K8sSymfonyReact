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
```bash
yarn
```

## Develop
##### Terminal 1:
Build and run your application, watching container logs:
```bash
docker-compose build && docker-compose up
```

##### Terminal 2:
Build your assets, open the browser with hot-reload, watching for any changes:
```bash
yarn dev-server
```

## Lint
Check code styles using linters:
```bash
yarn lint
```

## Test
Test your application
```bash
yarn test
```

## Build
Build your application for production
```bash
yarn build
```

## Push
```bash
yarn push
```
_Requirements: docker to be configured for the container registry._

_The recommended way to do this is to authenticate the a builder-system to the
container-registry of your cloud project._

## Release
Perform a rolling update to your production environment.
```bash
yarn release
```
_Requires a running Kubernetes cluster having `.k8s/infrastructure` set up._

_Additionally you need to have a context configured for kubectl,
that reflects the cluster and the desired namespace for this build._
