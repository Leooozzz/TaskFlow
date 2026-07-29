FROM node:22-alpine

WORKDIR /app

RUN apk add --no-cache \
    netcat-openbsd \
    mysql-client

COPY package*.json ./

RUN npm install

COPY . .

RUN chmod +x entrypoint.sh

EXPOSE 3000

ENTRYPOINT ["sh", "./entrypoint.sh"]