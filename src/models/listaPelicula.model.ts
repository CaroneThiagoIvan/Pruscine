import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import Lista from './lista.model';
import Pelicula from './pelicula.model';


@Table({
  tableName: 'lista_pelicula',
  timestamps: false,
})
class ListaPelicula extends Model {
  @ForeignKey(() => Lista)
  @Column({
    primaryKey: true,
  })
  listaIdlista!: number;

  @ForeignKey(() => Pelicula)
  @Column({
    primaryKey: true,
  })
  peliculaIdpelicula!: number;
}

export default ListaPelicula;
