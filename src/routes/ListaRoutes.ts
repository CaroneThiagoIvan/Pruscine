import HttpStatusCodes from '@src/common/HttpStatusCodes';
import ListaService from '@src/services/ListaService';
import { ILista } from '@src/models/Lista';
import { IReq, IRes } from './types/express/misc';

// **** Functions **** //

/**
 * Get one lista by user.
 */
async function getOne(req: IReq, res: IRes) {
  const id = +req.params.id;
  const lista = await ListaService.getOne(id);
  return res.status(HttpStatusCodes.OK).json({lista});
}

/**
 * Get all listas for a user.
 */
async function getAll(req: IReq, res: IRes) {
  const listas = await ListaService.getAll();
  return res.status(HttpStatusCodes.OK).json({ listas });
}

async function getListasUsuario(req: IReq, res: IRes) {
  const id = +req.params.id;
  const listas = await ListaService.getListasUsuario(id);
  return res.status(HttpStatusCodes.OK).json({ listas });

}

/**
 * Add a new lista for a user.
 */
async function add(req: IReq<ILista>, res: IRes) {
  console.log("reqbody")
  console.log(req.body);
  const lista = req.body;
  await ListaService.add(lista);
  return res.status(HttpStatusCodes.CREATED).end();
}


/**
 * Delete a lista.
 */
async function delete_(req: IReq, res: IRes) {
  const { usuario_idusuario, nombre } = req.params;
  await ListaService.delete(+usuario_idusuario, nombre);
  return res.status(HttpStatusCodes.OK).end();
}

// **** Export default **** //

export default {
  getAll,
  getOne,
  getListasUsuario,
  add,
  delete: delete_,
} as const;
