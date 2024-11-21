import jwt from "jsonwebtoken";

// Clave secreta definida directamente
const secretKey = "prusci"; // Cambiar por una clave más segura en producción

// Definir la estructura del payload
export interface Payload {
  id: number;
  email: string;
  rol: boolean;
}

// Función para generar un token JWT
export function generateToken(payload: Payload): Promise<string> {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload, // Datos a incluir en el token
      secretKey, // Clave secreta
      { expiresIn: "1d" }, // Expiración del token
      (err, token) => {
        if (err) {
          reject(err); // Manejo de error
        } else if (!token) {
          reject("No se pudo generar el token");
        } else {
          resolve(token); // Devuelve el token generado
        }
      }
    );
  });
}
