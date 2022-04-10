import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { ConfigModule } from '@nestjs/config';
import { Cafe } from "./entity/cafe.model";
import { Client } from "./entity/client.model";
import { Order } from "./entity/order.model";
import { PC } from "./entity/PC.model";
import { Provider } from "./entity/provider.model";
import { Service } from "./entity/service.model";
import { Tariffs } from "./entity/tariffs.model";
import { Waiter } from "./entity/waiter.model";
import { CafeModule } from "./module/cafe.module";
import { WaiterModule } from "./module/waiter.module";
import { OrderModule } from './module/order.module';
import { PCModule } from './module/pc.module';
import { ClientModule } from './module/client.module';
import { TariffsModule } from './module/tariffs.module';
import { ServiceModule } from './module/service.module';
import { ProviderModule } from './module/provider.module';
import { UserModule } from './user/user.module';
import { User } from "./user/user.model";
import { AuthModule } from "./auth/auth.module";


@Module({
   
    imports: [
      ConfigModule.forRoot( {
          envFilePath: `.${process.env.NODE_ENV}.env`
         }),

        SequelizeModule.forRoot({
          dialect: 'postgres',
          host: process.env.POSTGRES_HOST,
          port: Number(process.env.POSTGRES_PORT),
          username: 'postgres',
          password: 'root',
          database: process.env.POSTGRES_DB,
          models: [Cafe,Order,Client,PC,Provider,Service,Tariffs,Waiter,User],
          autoLoadModels:true
        }),


        CafeModule,
        WaiterModule,
        ClientModule,
        OrderModule,
        PCModule,
        TariffsModule,
        ServiceModule,
        ProviderModule,
        UserModule,
        AuthModule
      ],
    
     
})
export class AppModule{}