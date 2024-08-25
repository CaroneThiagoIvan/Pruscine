import moment from 'moment';
import { sequelize } from "../database";
import { DataTypes } from 'sequelize';
import { table } from 'console';
import { Pelicula } from './Pelicula';
import { Genero } from './Genero';

// **** Variables **** //

const INVALID_CONSTRUCTOR_PARAM = 'nameOrObj arg must a string or an object ' + 
  'with the appropriate user keys.';


// **** Types **** //

export interface IPeliculaGenero {
    pelicula_idpelicula: number;
    genero_idgenero: number;
}

export const PeliculaGenero = sequelize.define('peliculaGenero', {
  genero_idgenero: {
    type: DataTypes.INTEGER,
    references: {
        model: Genero,
        key: 'idgenero'
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
  tableName: 'peliculaGenero'
});
