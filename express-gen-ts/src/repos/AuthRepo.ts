import bcrypt from 'bcrypt';
import {generateToken} from '../util/jwt';
import User from '@src/models/user.model';


async function login(email: string, password: string): Promise<string>{
    const user = await User.findOne({ 
        where: { email: email }
    });
    if (!user) {
        throw new Error('User not found');
    }
    const equals = await bcrypt.compare(password, user.contrasenia);


    if (equals) {
        return generateToken(user.idusuario);
    } else {
        throw new Error('Invalid credentials');
    }
}

export default {
    login
} as const;  