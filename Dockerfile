# syntax=docker/dockerfile:1

ARG NODE_VERSION=24.9.0

FROM node:${NODE_VERSION}-alpine


WORKDIR /usr/src

RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci

ENV NODE_ENV production

COPY . .

EXPOSE 4000

CMD npm start
