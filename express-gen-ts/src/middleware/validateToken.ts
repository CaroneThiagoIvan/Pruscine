import jwt from "jsonwebtoken";
import { Request as IReq, Response as IRes, NextFunction as INext } from "express";


export interface Payload {
    email: string;
    contrasenia: string;
}
export interface CustomRequest extends IReq {
    payload: Payload;
}

export const authenticateToken = (req: IReq, res:IRes, next: INext) => {
    const authHeader = req.headers['authorization'];
    console.log(authHeader);
    const token = authHeader;
    console.log(token);
    console.log(process.env.TOKEN_SECRET);
    if (token == null) return res.sendStatus(401);

    jwt.verify(token, "prusci", (err, user) => {
        if (err) return res.sendStatus(403).json(err);
        if (user) {
            (req as CustomRequest).payload = user as Payload;
            next();
        } else {
            res.sendStatus(500); 
        }
    });
}