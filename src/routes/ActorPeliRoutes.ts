import HttpStatusCodes from '@src/common/HttpStatusCodes';
import { IReq, IRes } from './types/express/misc';
import ActorPeliService from '../services/ActorPeliService';
// **** Functions **** //

async function getAll(req: IReq, res: IRes) {
    const id = +req.params.id;
    const actor = await ActorPeliService.getAll(id);
    return res.status(HttpStatusCodes.OK).json(actor);
  }

// **** Export default **** //

export default {
  getAll,
} as const;
