import Actor from '@src/models/actor.model';
import Director from '@src/models/director.model';
import FavoritoP from '@src/models/favoritoP.model';
import FavoritoR from '@src/models/favoritoR.model';
import Genero from '@src/models/genero.model';
import Lista from '@src/models/lista.model';
import Pelicula from '@src/models/pelicula.model';
import PeliculaActor from '@src/models/peliculaActor.model';
import PeliculaDirector from '@src/models/peliculaDirector.model';
import PeliculaGenero from '@src/models/peliculaGenero.model';
import Resena from '@src/models/resena.model';
import Usuario from '@src/models/user.model';
import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv';

dotenv.config();


const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  dialect: 'mysql',
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT as string),
  logging: console.log,
  models: [Actor, Director, FavoritoP, FavoritoR, Genero, Lista, Pelicula, PeliculaActor, PeliculaDirector, PeliculaGenero, Resena, Usuario], // Include MascotaVacuna model here
});

// Authenticate the connection
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');

    // Sync all models including MascotaVacuna
    return sequelize.sync({ alter: true });
  })
  .then(() => {
    console.log('Database and tables have been created.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

export default sequelize;