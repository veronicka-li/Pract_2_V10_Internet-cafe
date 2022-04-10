import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Cafe } from "./cafe.model";
import { Order } from "./order.model";


@Table({tableName: 'PC'})
export class PC extends Model<PC>{
    @Column({type:DataType.INTEGER,unique:true, autoIncrement: true, primaryKey: true})
    id_PC: number;
    @Column({type:DataType.INTEGER, allowNull:  false})
    number: number;
    
  @HasMany(()=>Order)
    order: Order[];

    @ForeignKey(()=>Cafe)
   @Column  
    cafe_id: number;
   @BelongsTo(()=>Cafe)   cafe:Cafe;

 }
