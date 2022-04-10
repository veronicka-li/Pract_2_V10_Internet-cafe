import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Client } from "./client.model";
import { PC } from "./PC.model";
import { Waiter } from "./waiter.model";


@Table({tableName: 'order'})
export class Order extends Model<Order>{
    @Column({type:DataType.INTEGER,unique:true, autoIncrement: true, primaryKey: true})
    id_order: number;
    @Column({type:DataType.FLOAT, allowNull:  false})
    sum: number;
    @Column({type:DataType.TIME, allowNull:  false})
    session_time: Date;
    
    @ForeignKey(() => Client)
    @Column  client_id: number;
    @BelongsTo(() => Client) client: Client; 

    @ForeignKey(() => PC)
    @Column  PC_id: number;
    @BelongsTo(() => PC) PC: PC; 

    @ForeignKey(() => Waiter)
    @Column   waiter_id: number;
    @BelongsTo(() => Waiter) waiter: Waiter; 
  
}
