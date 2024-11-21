import HttpStatusCodes from '@src/common/HttpStatusCodes';
import { IReq, IRes } from './types/express/misc';
import AuthService from '@src/services/AuthService';
import User from '@src/models/user.model';

async function userLogin(IReq : IReq, IRes : IRes) {
    const  usuario = IReq.body;
    console.log(usuario);
    try {
        const token = await AuthService.login(usuario);
        console.log({token});
        return IRes.status(HttpStatusCodes.OK).send({ token });
    }
    catch (error) {
        return IRes.status(HttpStatusCodes.UNAUTHORIZED).end();
    }
}


async function adminLogin(IReq: IReq, IRes: IRes) {
    const { email, password } = IReq.body;
    
    try {
        // Verificar que el admin existe en la base de datos
        const user = await User.findOne({ where: { email } });
        
        if (!user) {
            return IRes.status(HttpStatusCodes.NOT_FOUND).json({ message: "Usuario no encontrado" });
        }

        // Verificar la contraseña del admin (usando bcrypt)
        const validPassword = await user.validPassword(password);
        if (!validPassword) {
            return IRes.status(HttpStatusCodes.UNAUTHORIZED).json({ message: "Contraseña incorrecta" });
        }

        // Verificar si el usuario tiene rol de admin
        if (!user.rol) {
            return IRes.status(HttpStatusCodes.FORBIDDEN).json({ message: "Acceso denegado, no eres administrador" });
        }

        // Generar el token para el admin
        const token = await AuthService.generateToken(user);  // Aquí llamamos a la función que genera el token

        return IRes.status(HttpStatusCodes.OK).json({ token });

    } catch (error) {
        return IRes.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Error del servidor" });
    }
}



export default {
    userLogin
} as const;