# DineForward Deployment

## Updating deployment environment variables

> **IMPORTANT:** These instructions assume you have the `gcloud` command installed locally and have already authenticated to the `dineforward` project in GCP and have appropriate permissions to access the keyring in KMS.

First, ensure you're in the `adapt` directory within the `dineforward` repo:

```bash
cd adapt
```

Next, set a local shell variable indicating which deployment environment (`stage` or `prod`) you want to update:

```bash
DEPLOY_ENV=stage
```

Then, encrypt your .env file:

```bash
gcloud kms encrypt --ciphertext-file=${DEPLOY_ENV}-env.enc --location=global --keyring=deploy-secrets --key=${DEPLOY_ENV}-key --plaintext-file=/path/to/file.env
```
