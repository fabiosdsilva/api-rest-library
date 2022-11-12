ARG VERSION=16-alpine

FROM node:${VERSION}
WORKDIR /usr/app/path
COPY ../package.json .
COPY ../.sequelizerc .
COPY ../nodemon.json .
COPY ../app.js .
COPY ../server.js .
COPY ../src/* ./src/
RUN apk add yarn
RUN yarn
RUN yarn sequelize-cli db:migrate
RUN yarn sequelize-cli db:seed:all
RUN yarn dev

EXPOSE 3000
