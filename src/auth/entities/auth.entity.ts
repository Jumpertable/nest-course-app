import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class AuthUser extends Model<AuthUser> {
  @Column({
    type: DataType.STRING(200),
    allowNull: false,
  })
  username: string;

  @Column({
    type: DataType.STRING(200),
    allowNull: false,
    unique: true,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;
}
