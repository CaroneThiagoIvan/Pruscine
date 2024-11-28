import { Router, Request } from 'express';
import jetValidator from 'jet-validator';

import Paths from '../common/Paths';
import UserRoutes from './UserRoutes';
import ExplorarRoutes from './ExplorarRoutes';
import AuthRoutes from './AuthRoutes';
import { authenticateToken } from '@src/middleware/validateToken';
import PeliculaRoutes from './PeliculaRoutes';
import { checkUserRole } from '@src/middleware/checkUser';  
import ListaRoutes from './ListaRoutes';
import ActorRoutes from './ActorRoutes';
import DirectorRoutes from './DirectorRoutes';
import GeneroRoutes from './GeneroRoutes';
import GeneroPeliRoutes from './GeneroPeliRoutes';
import ActorPeliRoutes from './ActorPeliRoutes';
import DirectorPeliRoutes from './DirectorPeliRoutes';
import ResenaRoutes from './ResenaRoutes';
import { upload } from '@src/middleware/multerImages';
import { ImgRoutes } from './ImgRoutes';
import ListaPeliculaRoutes from './ListaPeliculaRoutes';


// **** Variables **** //

const apiRouter = Router();


// ** Add UserRouter ** //

const UserRouter = Router();
const ExplorarRepo = Router();
const ResenaRepo = Router();
const AuthRepo = Router();
const PeliRepo = Router();
const ListaRepo = Router();
const ActorRepo = Router();
const DirectorRepo = Router();
const GeneroRepo = Router();
const GeneroPeliRepo = Router();
const ActorPeliRepo = Router();
const DirectorPeliRepo = Router();
const ImgRouter = Router();
const ListaPeliculaRepo = Router();

ImgRouter.post(
  Paths.Img.Add,
  authenticateToken,
  upload.single('file'),
  ImgRoutes.add,
);

UserRouter.get(
  Paths.Users.Get,
  authenticateToken, // Verificación del token
  UserRoutes.getAll,
);

UserRouter.get(
  Paths.Users.GetOne,
  authenticateToken, // Verificación del token
  UserRoutes.getOne,
);

// Add one user
UserRouter.post(
  Paths.Users.Add,
  UserRoutes.add,
);

// Update one user
UserRouter.put(
  Paths.Users.Update,
  authenticateToken,
  UserRoutes.update,
);

// Delete one user
UserRouter.delete(
  Paths.Users.Delete,
  authenticateToken, // Verificación del token
  UserRoutes.delete,
);

ExplorarRepo.get(
  Paths.Explorar.Get,
  ExplorarRoutes.getAll,
);

ExplorarRepo.post(
  Paths.Explorar.Add,
  ExplorarRoutes.add,
);

ExplorarRepo.put(
  Paths.Explorar.Update,
  ExplorarRoutes.update,
);

ExplorarRepo.delete(
  Paths.Explorar.Delete,
  ExplorarRoutes.delete,
);

ResenaRepo.get(
  Paths.Resena.GetOne,
  ResenaRoutes.getAll,
);

ResenaRepo.post(
  Paths.Resena.Add,
  authenticateToken, // Verificación del token
  ResenaRoutes.add,
);

ResenaRepo.put(
  Paths.Resena.Update,
  ResenaRoutes.update,
);

ResenaRepo.delete(
  Paths.Resena.Delete,
  authenticateToken, // Verificación del token
  ResenaRoutes.delete,
);

AuthRepo.post(
  Paths.Auth.Login,
  AuthRoutes.login,
);

GeneroPeliRepo.get(
  Paths.PeliculaGenero.GetOne,
  GeneroPeliRoutes.getAll,
);

ActorPeliRepo.get(
  Paths.PeliculaActor.GetOne,
  ActorPeliRoutes.getAll,
);

DirectorPeliRepo.get(
  Paths.PeliculaDirector.GetOne,
  DirectorPeliRoutes.getAll,
);

PeliRepo.get(
  Paths.Pelicula.Get,
  PeliculaRoutes.getAll,
);

PeliRepo.get(
  Paths.Pelicula.GetOne,
  PeliculaRoutes.getOne,	
);

PeliRepo.post(
  Paths.Pelicula.Add,
  authenticateToken, // Verificación del token
  checkUserRole,
  PeliculaRoutes.add,
);

PeliRepo.put(
  Paths.Pelicula.Update,
  authenticateToken, // Verificación del token
  checkUserRole, // Verificación del rol
  PeliculaRoutes.update,
);

PeliRepo.delete(
  Paths.Pelicula.Delete,
  authenticateToken, // Verificación del token
  checkUserRole,
  PeliculaRoutes.delete,
);

ListaRepo.get(
  Paths.Lista.Get,
  ListaRoutes.getAll,
);

ListaRepo.get(
  Paths.Lista.GetOne,
  ListaRoutes.getOne,
);  

ListaRepo.post(
  Paths.Lista.Add,
  authenticateToken, // Verificación del token
  ListaRoutes.add,
);

ListaRepo.delete(
  Paths.Lista.Delete,
  ListaRoutes.delete,
);

ListaPeliculaRepo.get(
  Paths.ListaPelicula.Get,
  ListaPeliculaRoutes.getAll,
);

ListaPeliculaRepo.get(
  Paths.ListaPelicula.GetOne,
  ListaPeliculaRoutes.getAll,
);

ActorRepo.get(
  Paths.Actor.Get,
  ActorRoutes.getAll,
);

ActorRepo.get(
  Paths.Actor.GetOne,
  ActorRoutes.getOne,
);

ActorRepo.post(
  Paths.Actor.Add,
  authenticateToken, // Verificación del token
  checkUserRole,
  ActorRoutes.add,
);

ActorRepo.put(
  Paths.Actor.Update,
  authenticateToken, // Verificación del token
  checkUserRole,
  ActorRoutes.update,
);

ActorRepo.delete(
  Paths.Actor.Delete,
  authenticateToken, // Verificación del token
  checkUserRole,
  ActorRoutes.delete,
);

DirectorRepo.get(
  Paths.Director.Get,
  DirectorRoutes.getAll,
);

DirectorRepo.get(
  Paths.Director.GetOne,
  DirectorRoutes.getOne,
);

DirectorRepo.post(
  Paths.Director.Add,
  authenticateToken, // Verificación del token
  checkUserRole,
  DirectorRoutes.add,
);

DirectorRepo.put(
  Paths.Director.Update,
  authenticateToken, // Verificación del token
  checkUserRole,
  DirectorRoutes.update,
);

DirectorRepo.delete(
  Paths.Director.Delete,
  authenticateToken, // Verificación del token
  checkUserRole,
  DirectorRoutes.delete,
);

GeneroRepo.get(
  Paths.Genero.Get,
  GeneroRoutes.getAll,
);

GeneroRepo.get(
  Paths.Genero.GetOne,
  GeneroRoutes.getOne,
);

GeneroRepo.post(
  Paths.Genero.Add,
  authenticateToken, // Verificación del token
  checkUserRole,
  GeneroRoutes.add,
);

GeneroRepo.put(
  Paths.Genero.Update,
  authenticateToken, // Verificación del token
  checkUserRole,
  GeneroRoutes.update,
);

GeneroRepo.delete(
  Paths.Genero.Delete,
  authenticateToken, // Verificación del token
  checkUserRole,
  GeneroRoutes.delete,
);


// Add UserRouter
apiRouter.use(Paths.Users.Base, UserRouter);
apiRouter.use(Paths.Explorar.Base, ExplorarRepo);
apiRouter.use(Paths.Resena.Base, ResenaRepo);
apiRouter.use(Paths.Auth.Base, AuthRepo);
apiRouter.use(Paths.Pelicula.Base, PeliRepo);
apiRouter.use(Paths.Lista.Base, ListaRepo);
apiRouter.use(Paths.Actor.Base, ActorRepo);
apiRouter.use(Paths.Director.Base, DirectorRepo);
apiRouter.use(Paths.Genero.Base, GeneroRepo);
apiRouter.use(Paths.PeliculaGenero.Base, GeneroPeliRepo);
apiRouter.use(Paths.PeliculaActor.Base, ActorPeliRepo);
apiRouter.use(Paths.PeliculaDirector.Base, DirectorPeliRepo);
apiRouter.use(Paths.Img.Base, ImgRouter);
apiRouter.use(Paths.ListaPelicula.Base, ListaPeliculaRepo);

// **** Export default **** //

export default apiRouter;
