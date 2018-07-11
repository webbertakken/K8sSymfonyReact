# App Infrastructure
[&lt; Home](../../README.md)

The infrastructure has to be deployed before deploying any `release`-objects.

This readme assumes that your CLI's current directory is `.k8s/infrastructure`.

For now, this readme also assumes that you have `nginx-ingress` and
`cert-manager` installed on your cluster. I wrote a little
[how-to](https://github.com/webbertakken/K8sInfrastructure)
on how to do this (it is easy peasy).

## Namespaces
Change the namespaces.yml file to reflect the desired namespace.

Install the namespace

First change the &lt;bracketed values&gt; by your own.

Then deploy the namespace

```bash
kubectl apply -f ./namespaces.yml
```

**Don't forget to switch the context to that namespace within kubectl**
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
kubectl create secret generic mysql-pass --from-literal=password=<SomeSecurePassword>
```

## Ingress
First change the ingress resource to reflect your domain name. (look for the
&lt;bracketed values&gt;)

Then deploy the ingress resource:
```bash
$ kubectl apply -f ./ingress.yml
```

It will create a Certificate resource which in turn will create TLS secret.
Note that creating them yourself may block the ingress controller from doing so.

Check if the certificate was created:
```bash
$ kubectl describe ingress ingress
```
It should show `Successfully created Certificate "<example-com-certificate>"`
as the last event.

Check if the certificate resource created the order, and whether it has been
validated yet:
```bash
$ kubectl describe certificate <example-com-certificate>
```

## Prepare deployments
Go the to `.k8s/release` folder and change the &lt;bracketed values&gt; with
your own.
