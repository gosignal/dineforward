# Dine Forward

> An open collective of badass folks who want to help the restaurant industry during these trying COVID-19 times.  Check it out at [dineforward.org](https://dineforward.org).

- A free platform to give directly to restaurants / bars / local businesses.
- Tipping encouraged
- We pass 100% of the \$ to restaurants, stripe does take a fee, but nothing more.
- Soft-Launching with at least 40 restaurants 3/19/20.

Contact team@dineforward.org

Maintainers:

- wkasel <@wkasel>
- Gregory Nicolas <@gregorynicholas>
- Trevor O'farrell <@trevor-ofarrell>

Key Contributors:

- Mark Terrel <@mterrel>
- Manish Vachharajani <@mvachhar>


# Technology

Dine Forward is a [Next.js](https://nextjs.org) application that uses an [Express](https://expressjs.com)-based back-end via [Keystone](https://keystonejs.com).  It can be run locally via a development server, as well as deployed into various environments that support [Docker](https://docker.com) containers.

## Cloud Deployment

[Dine Forward](https://dineforward.org) is deployed on Google's [CloudRun](https://cloud.google.com/run) platform using [Adapt.js](https://adaptjs.org).

To deploy a simple staging environment, make sure the Google Cloud SDK is installed, the `gcloud` command is in your path, and that you have enabled billing and Cloud Run on GCP.  Then simply run:

```shell
export DOTENV=<path to your .env file with secrets (see packages/df-api/.env.example)>
cd adapt
adapt run --deployID stage gcloud-stage
```

Update your environment by, from the `adapt` directory, using:

```shell
adapt update stage
```

Run a locally hosted docker version of the application by, again from the adapt directory, using:

```shell
adapt run --deployID my-dev-deploy local-dev
```

Find out more about Adapt at [adaptjs.org](https://adaptjs.org).

## Development

You an start a development server by doing
```shell
yarn
yarn dev
```

Make sure you have a `.env` file with the appropriate secrets for the various services DineForward uses.  See `packages/df-api/.env.example` for a sample file.  Point your `DOTENV` environment variable at this file.
