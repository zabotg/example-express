import express from "express";

const router = express.Router();

router.post('/create', (_req: any, res: any) => {
  return res.send('Teste accounts page')
})

router.get('/getAccount', (_req: any, res: any) => {
  return res.send('Teste page about accounts')
})

export default router;