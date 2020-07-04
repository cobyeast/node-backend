FROM node:14
WORKDIR  /usr/src/app

COPY package*.json ./
RUN yarn add

COPY . .
EXPOSE 9000

CMD ["yarn", "run start"]