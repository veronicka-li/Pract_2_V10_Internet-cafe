import { Column, DataType,  Model, Table } from "sequelize-typescript";


@Table({tableName: 'user'})
export class User extends Model<User>{
    @Column({type:DataType.INTEGER,unique:true, autoIncrement: true, primaryKey: true})
    id_user: number;
    @Column({type:DataType.STRING, unique:true, allowNull: false})
    email: string;
    @Column({type:DataType.STRING, allowNull: false})
    password: string;

}
