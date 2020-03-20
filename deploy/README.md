# Deploying

## Before you get started

First, you'll need an environment file in
[`.env`](https://github.com/motdotla/dotenv#readme) format that
contains all the required variables for deployment.

## Build and deploy image to a new staging deployment

```console
./deploy/api-deploy.js my-staging ~/staging.env
```

## Build and deploy to production

```console
./deploy/api-deploy.js prod ~/prod.env
```
