import PeliculaActor from '@src/models/peliculaActor.model';
import { IPeliculaActor } from '@src/models/PeliculaActor';

async function getAll(id: number): Promise<IPeliculaActor[]> {

    try {
      const result = await PeliculaActor.findAll({
        where: {
          peliculaIdpelicula: id,
        }
      });
      console.log("cacona grande");
      return result.map((ids: { toJSON: () => IPeliculaActor; }) => ids.toJSON() as IPeliculaActor);
    } 
    catch (error) {
        console.error("Error retrieving actores:", error);
        return []; 
    }
  };

// Export default
export default {
  getAll,
} as const;
