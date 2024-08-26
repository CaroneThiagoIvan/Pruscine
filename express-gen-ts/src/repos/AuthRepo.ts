import {User, IUser} from '../models/User';
import bcrypt from 'bcrypt';
import {generateToken} from '../util/jwt';

async function login(email: string, password: string): Promise<string>{
    const user = await User.findOne({ 
        where: { email: email }
    });
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