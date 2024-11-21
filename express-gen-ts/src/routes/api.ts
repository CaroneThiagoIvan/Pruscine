import { Router, Request } from 'express';
import jetValidator from 'jet-validator';

import Paths from '../common/Paths';
import UserRoutes from './UserRoutes';
import ExplorarRoutes from './ExplorarRoutes';
import AuthRoutes from './AuthRoutes';
import { authenticateToken } from '@src/middleware/validateToken';
import PeliculaRoutes from './PeliculaRoutes';


// **** Variables **** //

const apiRouter = Router();


// ** Add UserRouter ** //

const UserRouter = Router();
const ExplorarRepo = Router();
const ResenaRepo = Router();
const AuthRepo = Router();
const PeliRepo = Router();

UserRouter.get(
  Paths.Users.Get,
  UserRoutes.getAll,
);

UserRouter.get(
  Paths.Users.GetOne,
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
  Paths.Resena.Get,
  ExplorarRoutes.getAll,
);

ResenaRepo.post(
  Paths.Resena.Add,
  ExplorarRoutes.add,
);

ResenaRepo.put(
  Paths.Resena.Update,
  ExplorarRoutes.update,
);

ResenaRepo.delete(
  Paths.Resena.Delete,
  ExplorarRoutes.delete,
);

AuthRepo.post(
  Paths.Auth.Login,
  AuthRoutes.login,
);

PeliRepo.get(
  Paths.Pelicula.Get,
  PeliculaRoutes.getAll,
);

// Extend the Request interface to include the payload property
interface CustomRequest extends Request {
  payload?: { rol: boolean };
}

PeliRepo.post(
  Paths.Pelicula.Add,
  authenticateToken, // Verificación del token
  (req: CustomRequest, res, next) => {
    // Verifica si el usuario tiene el rol de administrador (rol: true)
    if (req.payload?.rol) {
      return next(); // Si es admin, continúa a la ruta
    } else {
      return res.status(403).json({ message: 'Acceso denegado, no eres administrador.' });
    }
  },
  PeliculaRoutes.add,
);

PeliRepo.put(
  Paths.Pelicula.Update,
  authenticateToken, // Verificación del token
  (req: CustomRequest, res, next) => {
    // Verifica si el usuario tiene el rol de administrador (rol: true)
    if (req.payload?.rol === true) {
      return next(); // Si es admin, continúa a la ruta
    } else {
      return res.status(403).json({ message: 'Acceso denegado, no eres administrador.' });
    }
  },
  PeliculaRoutes.update,
);

PeliRepo.delete(
  Paths.Pelicula.Delete,
  authenticateToken, // Verificación del token
  (req: CustomRequest, res, next) => {
    // Verifica si el usuario tiene el rol de administrador (rol: true)
    if (req.payload?.rol === true) {
      return next(); // Si es admin, continúa a la ruta
    } else {
      return res.status(403).json({ message: 'Acceso denegado, no eres administrador.' });
    }
  },
  PeliculaRoutes.delete,
);


// Add UserRouter
apiRouter.use(Paths.Users.Base, UserRouter);
apiRouter.use(Paths.Explorar.Base, ExplorarRepo);
apiRouter.use(Paths.Resena.Base, ResenaRepo);
apiRouter.use(Paths.Auth.Base, AuthRepo);
apiRouter.use(Paths.Pelicula.Base, PeliRepo);

// **** Export default **** //

export default apiRouter;
