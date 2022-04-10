import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Service } from "./service.model";

@Table({tableName: 'provider'})
export class Provider extends Model<Provider>{
    @Column({type:DataType.INTEGER,unique:true, autoIncrement: true, primaryKey: true})
    id_provider: number;
    @Column({type:DataType.STRING, allowNull: false})
    name_provider: string;
   
    @HasMany(()=>Service, {foreignKey: 'service_id'})
    service: Service[];
}
