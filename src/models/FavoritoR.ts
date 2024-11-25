import moment from 'moment';

import { DataTypes } from 'sequelize';
import { table } from 'console';
import { IUser } from './User';
import { IResena } from './Resena';


// **** Variables **** //

const INVALID_CONSTRUCTOR_PARAM = 'nameOrObj arg must a string or an object ' + 
  'with the appropriate user keys.';


// **** Types **** //

export interface IFavotitoR {
  usuario_idusuario: number;
  resena_usuario_idusuario: number;
  resena_pelicula_idpelicula: number;
}

