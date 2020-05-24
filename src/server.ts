import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from "../src/routes/user";
import accountsRoutes from "../src/routes/accounts";

const server = express();
server.use( bodyParser.json());
server.use(bodyParser.urlencoded({
  extended: true
}));

server.use("/user/", userRoutes);
server.use("/account/", accountsRoutes);

export default server;
