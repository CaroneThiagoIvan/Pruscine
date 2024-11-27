import { IPeliculaActor } from '@src/models/PeliculaActor';
import ActorPeliRepo from '@src/repos/ActorPeliRepo';
// **** Variables **** //

// **** Functions **** //

/**
 * Get all generos.
 */
async function getAll(id: number): Promise<IPeliculaActor[]> {
  return ActorPeliRepo.getAll(id);
}

export default {
  getAll,
} as const;

