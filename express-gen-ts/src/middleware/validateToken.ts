import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

// Clave secreta definida directamente
const secretKey = "prusci"; 

export interface Payload {
  id: number;
  email: string;
  rol: boolean;
}

export interface CustomRequest extends Request {
  payload?: Payload;
}

// Middleware para autenticar el token
export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers["authorization"]; 

  if (!authHeader) {
    return res.status(401).json({ message: "Token no proporcionado" });
  }

  
  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Token no válido" });
  }

 
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Token inválido o expirado", error: err });
    }

    if (decoded) {
      (req as CustomRequest).payload = decoded as Payload; 
      next();
    } else {
      res.status(500).json({ message: "Error interno en la verificación del token" });
    }
  });
};
