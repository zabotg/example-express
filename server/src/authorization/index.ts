import { NextFunction, Request, Response } from "express";
import jwt, { VerifyErrors } from "jsonwebtoken";
import { AuthenticationToken } from "./types";

const jwtSecret = "teste";
const jwtExpirationTime = "1d";
const publicEndpoints = ["/status", "/login"];

const generateToken = (user: any): AuthenticationToken => {
    const token = jwt.sign(user, jwtSecret, { expiresIn: jwtExpirationTime });
    return { token, expiresIn: jwtExpirationTime };
};

const validateToken = (token?: string): any => {
    const bearerToken = token && token.split(" ")[1];
    let userLogged = undefined;

    jwt.verify(
        bearerToken!,
        jwtSecret,
        (err: VerifyErrors | null, user?: any) => {
            if (err) return;
            userLogged = user;
        }
    );

    return userLogged;
};

const midleware = (
    request: Request,
    resopnse: Response,
    next: NextFunction
): void => {
    if (!publicEndpoints.includes(request.url)) {
        const authHeader = request.headers["authorization"];
        const user = validateToken(authHeader);

        if (!user) {
            resopnse.status(403).json({ message: "Unauthorized access" });
            return;
        }
        // @ts-ignore
        request.user = user;
    }
    next();
};

export default {
    midleware,
    validateToken,
    generateToken,
};
