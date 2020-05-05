import express from 'express';
import bodyParser from 'body-parser';

const server = express();
server.use( bodyParser.json());
server.use(bodyParser.urlencoded({
  extended: true
}));

const sumTwoNumbers = (firstNumber: number, secondNumber: number): number => {
  return firstNumber + secondNumber;
}

server.get('/', (_req, resp) => {
  resp.send('Hello ts-node!');
});

server.post('/sum-two-numbers', (req, res) => {
  const {firstNumber, secondNumber} = req.body;
  if(firstNumber && secondNumber) {
    const result = sumTwoNumbers(firstNumber, secondNumber)
    res.status(200).send(`${result}`)
  }
  else {
    res.status(400).send('Wrong body parameters!')
  }
});

export default server;
