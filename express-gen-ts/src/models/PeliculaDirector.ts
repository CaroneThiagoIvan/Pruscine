import moment from 'moment';
import { sequelize } from "../database";
import { DataTypes } from 'sequelize';
import { table } from 'console';
import { Pelicula } from './Pelicula';
import { Director } from './Director';

// **** Variables **** //

const INVALID_CONSTRUCTOR_PARAM = 'nameOrObj arg must a string or an object ' + 
  'with the appropriate user keys.';


// **** Types **** //

export interface IPeliculaDirector {
    pelicula_idpelicula: number;
    director_iddirector: number;
}

export const PeliculaDirector = sequelize.define('peliculaDirector', {
  director_iddirector: {
    type: DataTypes.INTEGER,
    references: {
        model: Director,
        key: 'iddirector'
    }
  },
  pelicula_idpelicula: {
    type: DataTypes.INTEGER,
    references: {
        model: Pelicula,
        key: 'idpelicula'
    }
  }
}, {
  timestamps: false,
  tableName: 'peliculaDirector'
});
