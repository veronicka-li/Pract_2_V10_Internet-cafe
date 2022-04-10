import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { PC } from "./PC.model";
import { Service } from "./service.model";
import { Waiter } from "./waiter.model";

@Table({tableName: 'cafe'})
export class Cafe extends Model<Cafe>{
    @Column({type:DataType.INTEGER,unique:true, autoIncrement: true, primaryKey: true})
    id_cafe: number;
    @Column({type:DataType.STRING, allowNull: false})
    name_cafe: string;
    @Column({type:DataType.STRING, allowNull: false})
    address: string;
    @Column({type:DataType.INTEGER, unique:true, allowNull: false})
    bank_account: number;
    @Column({type:DataType.INTEGER, unique:true ,allowNull: false})
    pan: number;

    @HasMany(()=>Waiter)
    waiter: Waiter[];

    @HasMany(()=>PC)
    PC: PC[];
    
    @HasMany(()=>Service)
    service:Service[];
  }

 