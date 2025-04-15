FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

COPY .sequelizerc ./

RUN npm install

COPY . .