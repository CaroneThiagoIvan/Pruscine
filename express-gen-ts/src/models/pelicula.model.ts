import { Table, Column, Model, ForeignKey, DataType } from 'sequelize-typescript';
import Pais from './pais.model';

@Table({
  tableName: 'pelicula',
  timestamps: false,
})
class Pelicula extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  idpelicula!: number;

  @Column(DataType.STRING)
  nombre!: string;

  @Column(DataType.DATE)
  anioPublicado!: Date;

  @ForeignKey(() => Pais)
  @Column({
    primaryKey: true,
  })
  paisIdpais!: number;
}

export default Pelicula;
