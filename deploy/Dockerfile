ARG VERSION=16-alpine

FROM node:${VERSION}
WORKDIR /usr/app/path
COPY ./package.json .
COPY ./.sequelizerc .
COPY ./nodemon.json .
COPY ./app.js .
COPY ./server.js .
COPY ./src .
RUN apk add yarn
RUN yarn

EXPOSE 3000
CMD yarn dev
