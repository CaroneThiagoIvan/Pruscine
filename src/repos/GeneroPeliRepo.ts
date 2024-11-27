import PeliculaGenero from '@src/models/peliculaGenero.model';
import { IPeliculaGenero } from '@src/models/PeliculaGenero';

async function getAll(id: number): Promise<IPeliculaGenero[]> {

    try {
      const result = await PeliculaGenero.findAll({
        where: {
          peliculaIdpelicula: id,
        }
      });
      console.log("cacona chica");
      return result.map((ids: { toJSON: () => IPeliculaGenero; }) => ids.toJSON() as IPeliculaGenero);
    } 
    catch (error) {
        console.error("Error retrieving generos:", error);
        return []; 
    }
  };

// Export default
export default {
  getAll,
} as const;
