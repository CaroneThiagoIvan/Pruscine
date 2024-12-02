import { Table, Column, Model, ForeignKey, DataType, AutoIncrement } from 'sequelize-typescript';
import Usuario from './user.model';
import Pelicula from './pelicula.model';

@Table({
  tableName: 'lista',
  timestamps: false,
})
class Lista extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  idlista!: number;

  @Column(DataType.STRING)
  nombre!: string;

  @Column(DataType.INTEGER)
  idusuario!: number;
}

export default Lista;
