FROM node:12.4-alpine

WORKDIR /usr/src/redouan_immo_backend

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3300

CMD ["node", "./build/main.js"]