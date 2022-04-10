import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Service } from "./service.model";

@Table({tableName: 'tariffs'})
export class Tariffs extends Model<Tariffs>{
    @Column({type:DataType.INTEGER,unique:true, autoIncrement: true, primaryKey: true})
    id_tar: number;
    @Column({type:DataType.STRING, allowNull: false})
    name_tar: string;
    @Column({type:DataType.INTEGER, unique:true, allowNull:  false})
    price: number;
    @Column({type:DataType.DATE, unique:true, allowNull:  false})
    data: Date;
   
   @HasMany(()=>Service, {foreignKey: 'service_id'})
    service: Service[];
  
}