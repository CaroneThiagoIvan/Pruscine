import PeliculaDirector from '@src/models/peliculaDirector.model';
import { IPeliculaDirector } from '@src/models/PeliculaDirector';

async function getAll(id: number): Promise<IPeliculaDirector[]> {

    try {
      const result = await PeliculaDirector.findAll({
        where: {
          peliculaIdpelicula: id,
        }
      });
      
      return result.map((ids: { toJSON: () => IPeliculaDirector; }) => ids.toJSON() as IPeliculaDirector);
    } 
    catch (error) {
        console.error("Error retrieving directores:", error);
        return []; 
    }
  };

// Export default
export default {
  getAll,
} as const;
