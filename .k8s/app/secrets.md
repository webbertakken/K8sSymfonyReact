# Secrets
The following secrets are required by this application

## mysql-pass
password=`<mysql root password>`

```bash
kubectl create secret generic mysql-pass --from-literal=password=<SomeSecurePassword> --namespace=itchybitchyspider
```
