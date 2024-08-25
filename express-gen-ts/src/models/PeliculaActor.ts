import moment from 'moment';
import { sequelize } from "../database";
import { DataTypes } from 'sequelize';
import { table } from 'console';
import { Pelicula } from './Pelicula';
import { Actor } from './Actor';

// **** Variables **** //

const INVALID_CONSTRUCTOR_PARAM = 'nameOrObj arg must a string or an object ' + 
  'with the appropriate user keys.';


// **** Types **** //

export interface IPeliculaActor {
    pelicula_idpelicula: number;
    actor_idactor: number;
}

export const PeliculaActor = sequelize.define('peliculaActor', {
  actor_idactor: {
    type: DataTypes.INTEGER,
    references: {
        model: Actor,
        key: 'idactor'
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
  tableName: 'peliculaActor'
});
