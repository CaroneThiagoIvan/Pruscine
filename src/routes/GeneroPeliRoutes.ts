import HttpStatusCodes from '@src/common/HttpStatusCodes';
import { IReq, IRes } from './types/express/misc';
import GeneroPeliService from '../services/GeneroPeliService';
// **** Functions **** //

async function getAll(req: IReq, res: IRes) {
    const id = +req.params.id;
    const genero = await GeneroPeliService.getAll(id);
    return res.status(HttpStatusCodes.OK).json(genero);
  }

// **** Export default **** //

export default {
  getAll,
} as const;
