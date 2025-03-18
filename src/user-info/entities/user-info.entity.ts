import { Column, DataType, Model, Table } from 'sequelize-typescript';
@Table({
  tableName: 'userinfo',
  timestamps: false,
})
export class UserInfo extends Model {
  @Column({
    type: DataType.STRING(20),
    allowNull: false,
  })
  firstname: string;

  @Column({
    type: DataType.STRING(30),
    allowNull: false,
  })
  lastname: string;

  @Column({
    type: DataType.INTEGER(),
    allowNull: false,
})
  age: number;
  
  @Column({
    type: DataType.STRING(30),
    allowNull: false,
  })
  hobby: string;
}
