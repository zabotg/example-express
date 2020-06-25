import express from 'express';
import bodyParser from 'body-parser';

const server = express();
server.use( bodyParser.json());
server.use(bodyParser.urlencoded({
  extended: true
}));


server.get('/', (_req, resp) => {
  resp.send('Hello ts-node!');
});

export default server;
