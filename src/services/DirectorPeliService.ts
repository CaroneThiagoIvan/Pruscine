import { IPeliculaDirector } from '@src/models/PeliculaDirector';
import DirectorPeliRepo from '@src/repos/DirectorPeliRepo';
// **** Variables **** //

// **** Functions **** //

/**
 * Get all generos.
 */
async function getAll(id: number): Promise<IPeliculaDirector[]> {
  return DirectorPeliRepo.getAll(id);
}

export default {
  getAll,
} as const;

