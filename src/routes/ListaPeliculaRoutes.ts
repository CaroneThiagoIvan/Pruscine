import HttpStatusCodes from '@src/common/HttpStatusCodes';
import { IReq, IRes } from './types/express/misc';
import ListaPeliculaService from '@src/services/ListaPeliculaService';
// **** Functions **** //

async function getAll(req: IReq, res: IRes) {
  const id = +req.params.id;
  const pelicula = await ListaPeliculaService.getAll(id);
  return res.status(HttpStatusCodes.OK).json(pelicula);
}

// **** Export default **** //

export default {
  getAll,
} as const;
