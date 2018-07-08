# App Infrastructure
The infrastructure has to be deployed before deploying any `release`-deployments.

## Namespaces
Change the namespaces.yml file to reflect the desired namespace.

Install the namespace
```bash
kubectl apply -f ./namespaces.yml
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

## Ingress
Install the ingress resource for this application.

```bash
$ kubectl apply -f ./ingress.yml
```

It will create a Certificate resource which in turn will create TLS secret.

Check if the certificate was created:
```bash
$ kubectl describe ingress ingress
```
It should show `Successfully created Certificate "spider-wtf-certificate"` as the last event.

Check if the certificate created the order, and whether it has been validated yet:
```bash
$ kubectl describe certificate spider-wtf-certificate
```


