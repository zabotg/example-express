import express, { Request, Response } from "express";

const router = express.Router();

router.get("/status", (_request: Request, response: Response) =>
    response.json({ status: "WORKING!" })
);

export default router;
