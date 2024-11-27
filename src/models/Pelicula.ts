


// **** Variables **** //

const INVALID_CONSTRUCTOR_PARAM = 'nameOrObj arg must a string or an object ' + 
  'with the appropriate user keys.';


// **** Types **** //

export interface IPelicula {
  idpelicula: number;
  nombre: string;
  anioPublicado: Date;
  pais: string;
  generos: number[];
  actores: number[];
  directores: number[];
}



