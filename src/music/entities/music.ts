import {
  Column,
  DataType,
  Model,
  Table,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';

@Table({
  tableName: 'musics',
  timestamps: false,
})
export class Music extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  id: number;

  @Column({
    type: DataType.STRING(200),
    allowNull: false,
  })
  music_name: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  price: number;

  @Column({
    defaultValue: false,
  })
  is_new: boolean;

  @Column({
    type: DataType.STRING(200),
    allowNull: false,
  })
  brand: string;
}
