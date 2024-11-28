import Lista from '@src/models/lista.model';
import { ILista } from '@src/models/Lista';
import ListaPelicula from '@src/models/listaPelicula.model';


async function getAll(): Promise<ILista[]> {
  try {
    const listas = await Lista.findAll({

    });
    return listas.map((lista) => lista.toJSON() as ILista);
  } catch (error) {
    console.error("Error retrieving listas:", error);
    return [];
  }
}


async function getOneByUsuario(usuario_idusuario: number, nombre: string): Promise<ILista | null> {
    try {
      const lista = await Lista.findOne({
        where: {
          idusuario: usuario_idusuario,
          nombre: nombre,
        }
      });
      return lista ? lista.toJSON() as ILista : null;
    } catch (error) {
      console.error("Error retrieving lista:", error);
      return null;
    }
  }

async function addLista(lista: ILista): Promise<string> {
  try {

    console.log("skibidi lista")
    console.log(lista)
    console.log(lista.nombre)
    console.log(lista.idusuario)

    const nuevaLista = await Lista.create({
      nombre: lista.nombre,
      idusuario: lista.idusuario
    });
    
    for (let i = 0; i < lista.peliculas.length; i++) {
      const element = lista.peliculas[i];
      await ListaPelicula.create({
        peliculaIdpelicula: element,
        listaIdlista: nuevaLista.idlista
      });
    }


    return 'Lista creada con éxito';
  } catch (error) {
    console.error('Error adding lista:', error);
    throw error; 
  }
}

async function deleteLista(usuario_idusuario: number, nombre: string): Promise<void> {
  try {
    await Lista.destroy({
      where: { usuario_idusuario, nombre }
    });
  } catch (error) {
    console.error('Error deleting lista:', error);
    throw error;
  }
}

async function persist(usuario_idusuario: number, nombre: string): Promise<boolean> { 
    try { 
        const lista = await Lista.findOne({ where: { usuario_idusuario, nombre } });
        if (lista) {
            // Actualizar la lista existente si es necesario
            // Aquí puedes agregar lógica para actualizar la lista si es necesario
            return true;
        } else {
            // Crear una nueva lista
            await Lista.create({ usuario_idusuario, nombre });
            return true;
        }
    } catch (error) { 
        console.error("Error checking or creating lista:", error); 
        return false; 
    }
}

export default {
  getAll,
  getOneByUsuario,
  addLista,
  deleteLista,
  persist
};
