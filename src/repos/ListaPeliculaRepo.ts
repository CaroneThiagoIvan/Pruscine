import { IListaPelicula } from '@src/models/ListaPelicula';
import ListaPelicula from '@src/models/listaPelicula.model';

async function getAll(id: number): Promise<IListaPelicula[]> {
    console.log("agarrar peliculas");
    console.log(id);
    try {
      const result = await ListaPelicula.findAll({
        where: {
            listaIdlista: id,
        }
      });
      console.log("aaaaa "+ result);
      return result.map((ids: { toJSON: () => IListaPelicula; }) => ids.toJSON() as IListaPelicula);
    } 
    catch (error) {
        console.error("Error retrieving peliculas:", error);
        return []; 
    }
  };

// Export default
export default {
  getAll,
} as const;
