import { IResena } from "@src/models/Resena";
import Resena from "@src/models/resena.model";
// **** Functions **** //

/**
 * Get one resena.
 */
async function getOne(usuario_idusuario: number, pelicula_idpelicula: number): Promise<IResena | null> {
  try {
    const resena = await Resena.findOne({
      where: {
        usuario_idusuario: usuario_idusuario ,
        pelicula_idpelicula: pelicula_idpelicula
      }
    });


    return resena ? resena.toJSON() as IResena : null;

  } catch (error) {
    console.error("Error retrieving resena:", error);
    return null;
  }
}

async function persists(usuario_idusuario: number, pelicula_idpelicula: number): Promise<boolean> {
  return Resena.findOne({ where: { usuario_idusuario: usuario_idusuario, pelicula_idpelicula:pelicula_idpelicula } }).then((resena) => {
    if (resena) {
      return true;
    }
    return false;
  });
}

async function getAll(id: number): Promise<IResena[]> {

  try {
    const result = await Resena.findAll({
      where: {
        pelicula_idpelicula: id,
      }
    });
    
    return result.map((ids: { toJSON: () => IResena; }) => ids.toJSON() as IResena);
  } 
  catch (error) {
      console.error("Error retrieving generos:", error);
      return []; 
  }
};

async function add(resena: IResena): Promise<string | void> {
    try {
      console.log("skibidi resena");
      console.log(resena);

      console.log(resena.description);
      console.log(resena.rating);
      console.log(resena.idusuario);
      console.log(resena.movie);

      await Resena.create({
        descripcion: resena.description,
        calificacion: resena.rating,
        usuario_idusuario: resena.idusuario,
        pelicula_idpelicula: resena.movie
      });

      return "Pelicula creada con éxito";
    } catch (error) {
      console.error("Error adding resena:", error);
      throw error;
    }
  }


async function update(resena: IResena): Promise<void> {
  try {
    
    await Resena.update(resena, {
      where: {
        usuario_idusuario: resena.idusuario,
        pelicula_idpelicula: resena.movie
      }
    });

  } catch (error) {
    console.error("Error updating resena:", error);

  }
}


async function delete_(usuario_idusuario: number, pelicula_idpelicula: number): Promise<void> {
  try {
    
    await Resena.destroy({
      where: {
        usuario_idusuario: usuario_idusuario,
        pelicula_idpelicula: pelicula_idpelicula
      }
    });

  } catch (error) {
    console.error("Error deleting resena:", error);
   
  }
}


// **** Export default **** //

export default {
  getOne,
  getAll,
  persists,
  add,
  update,
  delete: delete_,
} as const;