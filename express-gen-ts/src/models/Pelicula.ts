import moment from 'moment';
import { sequelize } from "../database";
import { DataTypes } from 'sequelize';
import { table } from 'console';
import { Pais } from './Pais';

// **** Variables **** //

const INVALID_CONSTRUCTOR_PARAM = 'nameOrObj arg must a string or an object ' + 
  'with the appropriate user keys.';


// **** Types **** //

export interface IPelicula {
  idpelicula: number;
  nombre: string;
  anioPublicado: Date;
  pais_idpais: number;
}

export const Pelicula = sequelize.define('pelicula', {
  idpelicula: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: true,
    autoIncrement: true
  },
  pais_idpais: {
    type: DataTypes.INTEGER,
    references: {
        model: Pais,
        key: 'idpais'
    }
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  anioPublicado: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  timestamps: false,
  tableName: 'pelicula'
});

