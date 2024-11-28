import * as jwt from 'jsonwebtoken'
import { IPelicula } from '@src/models/Pelicula';
import Pelicula from '@src/models/pelicula.model';
import PeliculaGenero from '@src/models/peliculaGenero.model';
import PeliculaDirector from '@src/models/peliculaDirector.model';
import PeliculaActor from '@src/models/peliculaActor.model';

// **** Functions **** //

/**
 * Get one user.
 */
async function getOne(idpelicula: number): Promise<IPelicula | null> {
  try {

    const pelicula = await Pelicula.findOne({
      where: {
        idpelicula: idpelicula
      }
    });


    return pelicula ? pelicula.toJSON() as IPelicula : null;

  } catch (error) {
    console.error("Error retrieving pelicula:", error);
    return null;
  }
}


async function persists(idpelicula: number): Promise<boolean> {
  try {
    const pelicula = await Pelicula.findByPk(idpelicula);
    return !!pelicula;
  } catch (error) {
    console.error("Error checking pelicula existence:", error);
    return false; 
  }
}


async function getAll(): Promise<IPelicula[]> {
  try {
    
    const peliculas = await Pelicula.findAll();
    return peliculas.map((pelicula: { toJSON: () => IPelicula; }) => pelicula.toJSON() as IPelicula);

  } catch (error) {
    console.error("Error retrieving peliculas:", error);
    return []; 
  }
}

async function add(pelicula: IPelicula): Promise<string | void> {
  try {

    const nuevaPelicula = await Pelicula.create({
      nombre: pelicula.nombre,
      anioPublicado: pelicula.anioPublicado,
      pais: pelicula.pais
    });

    console.log("skibidi peli")
    console.log(pelicula)
    
    for (let i = 0; i < pelicula.generos.length; i++) {
      const element = pelicula.generos[i];
      await PeliculaGenero.create({
        peliculaIdpelicula: nuevaPelicula.idpelicula,
        generoIdgenero: element
      });
    }

    for (let i = 0; i < pelicula.actores.length; i++) {
      const element = pelicula.generos[i];
      await PeliculaActor.create({
        peliculaIdpelicula: nuevaPelicula.idpelicula,
        actorIdactor: element
      });
    }

    for (let i = 0; i < pelicula.directores.length; i++) {
      const element = pelicula.directores[i];
      await PeliculaDirector.create({
        peliculaIdpelicula: nuevaPelicula.idpelicula,
        directorIddirector: element
      });
    }
    

    return 'Pelicula creada con éxito';
  } catch (error) {
    console.error('Error adding pelicula:', error);
    throw error; 
  }
}




async function update(pelicula: IPelicula): Promise<void> {
  try {
let peliculaupdate = {
    nombre: pelicula.nombre,
    anioPublicado: pelicula.anioPublicado,
    pais: pelicula.pais
}
    await Pelicula.update(peliculaupdate, {
      where: {
        idpelicula: pelicula.idpelicula
      },
    });

  } catch (error) {
    console.error("Error updating pelicula:", error);
  }
}



async function delete_(idpelicula: number): Promise<void> {
  try {
    
    await Pelicula.destroy({
      where: {
        idpelicula: idpelicula
      }
    });

  } catch (error) {
    console.error("Error deleting pelicula:", error);
   
  }
}


// **** Export default **** //

export default {
  getOne,
  persists,
  getAll,
  add,
  update,
  delete: delete_,
} as const;