import GeneroPeliRepo from '@src/repos/GeneroPeliRepo';
import { IPeliculaGenero } from '../models/PeliculaGenero';
// **** Variables **** //

// **** Functions **** //

/**
 * Get all generos.
 */
async function getAll(id: number): Promise<IPeliculaGenero[]> {
  return GeneroPeliRepo.getAll(id);
}

export default {
  getAll,
} as const;

