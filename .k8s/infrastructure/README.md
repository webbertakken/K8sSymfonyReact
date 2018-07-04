# App Infrastructure
The infrastructure has to be deployed before deploying any `release`-deployments.

## Namespaces
Change the namespaces.yml file to reflect the desired namespace.

Install the namespace
```bash
kubectl apply -f namespaces.yml
```

Switch the context to that namespace within kubectl.
```bash
$ kubectl config set-context $(kubectl config current-context) --namespace=<namespace-name>
# Validate it
$ kubectl config view | grep namespace:
```

## Secrets
The following secrets are required by this application

#### mysql-pass
password=`<mysql root password>`

```bash
kubectl create secret generic mysql-pass --from-literal=password=<SomeSecurePassword> --namespace=itchybitchyspider
```

#### TLS Certificate
```bash
$ kubectl create secret tls spider-wtf-certificate --namespace=itchybitchyspider
```

