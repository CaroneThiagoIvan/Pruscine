import { IListaPelicula } from '@src/models/ListaPelicula';
import ListaPeliculaRepo from '@src/repos/ListaPeliculaRepo';
// **** Variables **** //

// **** Functions **** //

/**
 * Get all generos.
 */
async function getAll(id: number): Promise<IListaPelicula[]> {
  return ListaPeliculaRepo.getAll(id);
}

export default {
  getAll,
} as const;

