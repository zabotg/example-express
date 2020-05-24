import express from "express";
import showUser from "../controllers/create-user";

const router = express.Router();

router.post('/create', (req: any, res: any) => {
  const { fullName, birthDate } = req.body;

  const user = showUser({fullName, birthDate});

  if(!user) {
    res.status(400).send('Wrong body parameters!');
  }

  res.status(200).send(JSON.stringify(user));
});

router.get('/getUSer', (_req: any, res: any) => {
  return res.send('About us')
});

export default router;