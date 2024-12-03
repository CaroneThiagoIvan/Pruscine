import HttpStatusCodes from '@src/common/HttpStatusCodes';

import PeliculaService from '@src/services/PeliculaService';
import { IPelicula } from '@src/models/Pelicula';
import { IReq, IRes } from './types/express/misc';
import { token } from 'morgan';


// **** Functions **** //

/**
 * Get all users.
 */
async function getOne(req: IReq, res: IRes) {
  const id = +req.params.id;
  const pelicula = await PeliculaService.getOne(id);
  return res.status(HttpStatusCodes.OK).json( pelicula );
}

async function getAll(_: IReq, res: IRes) {
  const peliculas = await PeliculaService.getAll();
  return res.status(HttpStatusCodes.OK).json( peliculas );
}

/**
 * Add one user.
 */
async function add(req: IReq<IPelicula>, res: IRes) {
  console.log(req.body)
  const pelicula = req.body;
  await PeliculaService.addOne(pelicula);
  return res.status(HttpStatusCodes.CREATED).end();
}

/**
 * Update one user.
 */
async function update(req: IReq<IPelicula>, res: IRes) {
  const pelicula = req.body;
  await PeliculaService.updateOne(pelicula);
  return res.status(HttpStatusCodes.OK).end();
}

/**
 * Delete one user.
 */
async function delete_(req: IReq, res: IRes) {
  const id = +req.params.id;
  await PeliculaService.delete(id);
  return res.status(HttpStatusCodes.OK).end();
}

async function getAllPaginada(req: IReq, res: IRes) {
  try {
    const { page = 1, limit = 8 } = req.query;  // Parámetros de la query
    const pageNumber = parseInt(page as string, 8);
    const limitNumber = parseInt(limit as string, 8);

    const { peliculas, totalItems, totalPages } = await PeliculaService.getPaginated(pageNumber, limitNumber);

    return res.status(HttpStatusCodes.OK).json({
      data: peliculas,      // Envuelve las películas dentro de 'data'
      totalItems,
      totalPages,
      currentPage: pageNumber,
    });
  } catch (error) {
    console.error(error);
    return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Error fetching paginated movies',
      error: error.message,
    });
  }
}

// **** Export default **** //

export default {
  getAll,
  getOne,
  getAllPaginada,
  add,
  update,
  delete: delete_,
} as const;
