import RouteError from '@src/common/RouteError';
import HttpStatusCodes from '@src/common/HttpStatusCodes';

import ResenaRepo from '@src/repos/ResenaRepo';
import { IResena } from '@src/models/Resena';


// **** Variables **** //

export const RESENA_NOT_FOUND_ERR = 'Resena not found';


// **** Functions **** //

/**
 * Get all users.
 */
function getAll(): Promise<IResena[]> {
  return ResenaRepo.getAll();
}

async function getOne(usuario_idusuario: number, pelicula_idpelicula: number): Promise<IResena | null> {
  return ResenaRepo.getOne(usuario_idusuario, pelicula_idpelicula);
}
/**
 * Add one user.
 */
async function addOne(resena: IResena): Promise<string | void> {
  try {
    console.log("reseña service");
    console.log(resena);
    return await ResenaRepo.add(resena); 
  } catch (err) {
    console.error('Error in addOne:', err);
    throw err; 
  }
}

/**
 * Update one user.
 */
async function updateOne(resena: IResena): Promise<void> {
  const persists = await ResenaRepo.persists(resena.idusuario,resena.movie);
  if (!persists) {
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      RESENA_NOT_FOUND_ERR,
    );
  }
  // Return user
  return ResenaRepo.update(resena);
}

/**
 * Delete a user by their id.
 */
async function _delete(usuario_idusuario: number, pelicula_idpelicula: number): Promise<void> {
  const persists = await ResenaRepo.persists(usuario_idusuario,pelicula_idpelicula);
  if (!persists) {
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      RESENA_NOT_FOUND_ERR,
    );
  }
  // Delete user
  return ResenaRepo.delete(usuario_idusuario, pelicula_idpelicula);
}


// **** Export default **** //

export default {
  getOne,
  getAll,
  addOne,
  updateOne,
  delete: _delete,
} as const;