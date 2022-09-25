FROM node

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8080

ENV DB_URI=uri

CMD ["node", "server.js"]