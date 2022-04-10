import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { OrderController } from '../controller/Order.controller';
import { Order } from '../entity/Order.model';
import { OrderService } from '../service/Order.service';


@Module({
  controllers: [OrderController],
  providers: [OrderService],
  imports: [
    SequelizeModule.forFeature([Order])
  ],
  exports: [OrderService]
})
export class OrderModule {}
