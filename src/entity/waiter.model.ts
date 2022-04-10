import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Cafe } from "./cafe.model";
import { Order } from "./order.model";

@Table({tableName: 'waiter'})
export class Waiter extends Model<Waiter>{
   @Column({type:DataType.INTEGER,unique:true, autoIncrement: true, primaryKey: true})
   id_waiter: number;
   @Column({type:DataType.INTEGER, unique:true,allowNull: false})
   passport: number;
    @Column({type:DataType.STRING, allowNull: false})
    full_name: string;
    @Column({type:DataType.STRING, allowNull: false})
   address: string;

   @ForeignKey(()=>Cafe)
   @Column   cafe_id: number;
   @BelongsTo(()=>Cafe)   cafe:Cafe;

   @HasMany(()=>Order, { foreignKey: 'order_id' })
   order: Order[];
   }
