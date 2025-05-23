FROM node:20-alpine

RUN apk add --no-cache \
    git \
    openssh-client \
    && npm install -g ts-node

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY wait-for-it.sh /usr/src/app/wait-for-it.sh
RUN chmod +x /usr/src/app/wait-for-it.sh

COPY . .

CMD ["npm", "run", "start:dev"]