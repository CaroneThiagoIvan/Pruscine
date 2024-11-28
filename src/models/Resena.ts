import moment from 'moment';
import { DataTypes } from 'sequelize';
import { table } from 'console';


// **** Variables **** //

const INVALID_CONSTRUCTOR_PARAM = 'nameOrObj arg must a string or an object ' + 
  'with the appropriate user keys.';


// **** Types **** //

export interface IResena {
  idusuario: number;
  movie: number;
  description: string;
  rating: number;
}


