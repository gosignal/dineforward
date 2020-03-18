ARG NODE_VERSION=12.10.0
FROM node:${NODE_VERSION}-stretch-slim

ENV PORT 80
ENV TINI_VERSION v0.18.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
ENTRYPOINT ["/tini", "--"]

ADD . /app
RUN chmod a+x /tini && \
    cd /app && \
    yarn && \
    (cd packages/df-api && yarn build) && \
    yarn cache clean

WORKDIR /app/packages/df-api

CMD ["yarn", "start"]
