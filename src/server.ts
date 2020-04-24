import express from 'express';
const server = express();

server.get('/', (_request, response) => {
  response.send('Hello ts-node!');
});

export default server;
