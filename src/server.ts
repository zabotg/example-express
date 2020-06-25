import express from 'express';
import bodyParser from 'body-parser';
import jwt from "jsonwebtoken";

const server = express();

server.use( bodyParser.json());
server.use(bodyParser.urlencoded({
  extended: true
}));


// Verify authentication
const verifyAuth = (request: any, response: any, next: any): any => {
  const bearerHeader = request.headers['authorization'];
  
  if(typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    request.token = bearerToken;
    next();
  } else {
    response.sendStatus(403);
  }
}

server.get('/', (_request, response) => {
  response.json({
    message: 'Wellcome to the API'
  });
});

server.post('/api/post', verifyAuth, (request: any, response: any) => {
  jwt.verify(request.token, 'secretkey', (err: any, authData: any) => {
    if(err) {
      response.sendStatus(403);
    } else {
    response.json({
      message: "Post created...",
      authData
    });
  }
  });
});

server.post('/auth', (_request, response) => {
  //Mock user
  const user = {
    id: 1,
    username: "Some user",
    email: "someuser@gmail.com"
  }

  jwt.sign({user}, 'secretkey', { expiresIn: '30s'}, (_err: any,  token: any) => {
    response.json({
      token
    });
  });
});

// server.use("/user/", userRoutes);
// server.use("/account/", accountsRoutes);

export default server;