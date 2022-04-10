import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Order } from "./order.model";


@Table({tableName: 'client'})
export class Client extends Model<Client>{
    @Column({type:DataType.INTEGER,unique:true, autoIncrement: true, primaryKey: true})
    id_client: number;

    @Column({type:DataType.STRING, allowNull: false})
    name_client: string;
   
    @HasMany(()=>Order, { foreignKey: 'order_id' })
    order: Order[];


 }
