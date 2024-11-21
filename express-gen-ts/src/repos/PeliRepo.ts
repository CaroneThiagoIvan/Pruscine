import * as jwt from 'jsonwebtoken'
import { IPelicula } from '@src/models/Pelicula';
import Pelicula from '@src/models/pelicula.model';

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

async function add(pelicula: IPelicula, token: string): Promise<string | void> {
  try {
    const decodedToken = jwt.verify(token, "prusci") as {
      mail: string;
      contraseña: string;
      rol: boolean;
    };

    // Verificar si el rol es válido
    if (!decodedToken.rol) {
      throw new Error('No tienes permiso para realizar esta acción.');
    }

    await Pelicula.create({
      nombre: pelicula.nombre,
      anioPublicado: pelicula.anioPublicado,
      paisIdpais: pelicula.pais_idpais,
    });

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
    paisIdpais: pelicula.pais_idpais
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