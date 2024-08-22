import moment from 'moment';
import { sequelize } from "../database";
import { DataTypes } from 'sequelize';
import { table } from 'console';

// **** Variables **** //

const INVALID_CONSTRUCTOR_PARAM = 'nameOrObj arg must a string or an object ' + 
  'with the appropriate user keys.';


// **** Types **** //

export interface IUser {
  idusuario: number;
  nombre: string;
  email: string;
  direccion: string;
  contrasenia: string;
}

export const Usuario = sequelize.define('Usuario', {
  idusuario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  contrasenia: {
    type: DataTypes.STRING,
    allowNull: false
  },
  direccion: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false,
  tableName: 'Usuario'
});


// **** Functions **** //

/**
 * Create new User.
 */
function newUser(
  idusuario: number,
  nombre: string,
  email: string,
  contrasenia: string,
  direccion: string
): IUser {
  return {
      idusuario: (idusuario ?? 0),
      nombre: (nombre ?? ''),
      email: (email ?? ''),
      contrasenia: (contrasenia ?? ''),
      direccion: (direccion ?? '')
  };
}

export default {
  Usuario,
  newUser

};