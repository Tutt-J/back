FROM node:20

WORKDIR /app

COPY . .

RUN npm install

EXPOSE ${PORT}

CMD [ "node", "server.js" ]