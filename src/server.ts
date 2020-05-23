import insertUser from "../src/controllers/user";
import { UserRequest } from './entities/user';
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

server.post('/insertUser', (req, res) => {
  try {
    const userRequest: UserRequest = req.body;
    const result = insertUser(userRequest);
    res.status(200).send(`${result}`)
  } catch (err) {
    console.error(err);
    res.status(400).send('Wrong body parameters!')
  }
});

export default server;
