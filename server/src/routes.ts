import express, { Request, Response } from "express";
import authenticator from "./authorization";

const router = express.Router();

router.use(authenticator.midleware);

router.get("/status", (_request: Request, response: Response) =>
    response.json({ status: "WORKING!" })
);

export default router;
