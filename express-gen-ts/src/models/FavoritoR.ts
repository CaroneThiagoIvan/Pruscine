import moment from 'moment';
import { sequelize } from "../database";
import { DataTypes } from 'sequelize';
import { table } from 'console';
import { User } from './User';
import { Resena } from './Resena';


// **** Variables **** //

const INVALID_CONSTRUCTOR_PARAM = 'nameOrObj arg must a string or an object ' + 
  'with the appropriate user keys.';


// **** Types **** //

export interface IFavotitoR {
  usuario_idusuario: number;
  resena_usuario_idusuario: number;
  resena_pelicula_idpelicula: number;
}

export const FavoritoP = sequelize.define('favoritoP', {
  usuario_idusuario: {
    type: DataTypes.INTEGER,
    references: {
        model: User,
        key: 'idusuario'
    }
  },
  resena_usuario_idusuario: {
    type: DataTypes.INTEGER,
    references: {
        model: Resena,
        key: 'idpelicula'
    }
  },
    resena_pelicula_idpelicula: {
        type: DataTypes.INTEGER,
        references: {
            model: Resena,
            key: 'idusuario'
        }
    }
}, {
  timestamps: false,
  tableName: 'favoritoP'
});
