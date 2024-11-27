/**
 * Express router paths go here.
 */

import Director from "@src/models/director.model";
import Genero from "@src/models/genero.model";
import { getOptionSections } from "ts-command-line-args";


export default {
  Base: '/',
  Users: {
    Base: '/usuario',
    Get: '/',
    GetOne: '/:id',
    Add: '/',
    Update: '/:id',
    Delete: '/:id',
  },
  Auth: {
    Base: '/auth',
    Login: '/'
  },
  Resena: {
    Base: '/resena',
    Get: '/',
    GetOne: '/:id',
    Add: '/',
    Update: '/:id',
    Delete: '/:id',
  },
  Explorar: {
    Base: '/explorar',
    Get: '/',
    GetOne: '/:id',
    Add: '/',
    Update: '/:id',
    Delete: '/:id',
  },
  Pelicula: {
    Base: '/pelicula',
    Get: '/',
    GetOne: '/:id',
    Add: '/',
    Update: '/:id',
    Delete: '/:id',
  },
  Lista: {
    Base: '/lista',
    Get: '/',
    GetOne: '/:id',
    Add: '/',
    Update: '/:id',
    Delete: '/:id',
  },
  Actor: {
    Base: '/actor',
    Get: '/',
    GetOne: '/:id',
    Add: '/',
    Update: '/:id',
    Delete: '/:id',
  },
  Director: {
    Base: '/director',
    Get: '/',
    GetOne: '/:id',
    Add: '/',
    Update: '/:id',
    Delete: '/:id',
  },
  Genero: {
    Base: '/genero',
    Get: '/',
    GetOne: '/:id',
    Add: '/',
    Update: '/:id',
    Delete: '/:id',
  },
  PeliculaGenero: {
    Base: '/peliculaGenero',
    Get: '/',
    GetOne: '/:id',
    Add: '/',
    Update: '/:id',
    Delete: '/:id',
  },
  PeliculaActor: {
    Base: '/peliculaActor',
    Get: '/',
    GetOne: '/:id',
    Add: '/',
    Update: '/:id',
    Delete: '/:id',
  },
  PeliculaDirector: {
    Base: '/peliculaDirector',
    Get: '/',
    GetOne: '/:id',
    Add: '/',
    Update: '/:id',
    Delete: '/:id',
  },
} as const;
