import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Cafe } from "./cafe.model";
import { Provider } from "./provider.model";
import { Tariffs } from "./tariffs.model";

@Table({tableName: 'service'})
export class Service extends Model<Service>{
    @Column({type:DataType.INTEGER,unique:true, autoIncrement: true, primaryKey: true})
    id_service: number;
 
    @ForeignKey(()=>Cafe)
   @Column   cafe_id: number;
   @BelongsTo(()=>Cafe)   cafe:Cafe;

   @ForeignKey(()=>Tariffs)
   @Column   tar_id: number;
   @BelongsTo(()=>Tariffs)   tariffs:Tariffs;

  
   @ForeignKey(()=>Provider)
   @Column  provider_id: number;
   @BelongsTo(()=>Provider)   provider:Provider;
}
