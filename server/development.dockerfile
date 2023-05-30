FROM node:14-alpine3.10 AS development

WORKDIR /usr/src/app

COPY package*.json ./
COPY prisma ./prisma/

RUN npm install

COPY . .

EXPOSE 2000

CMD ["npm", "run", "start:dev"]