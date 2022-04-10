import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { WaiterController } from '../controller/Waiter.controller';
import { Waiter } from '../entity/Waiter.model';
import { WaiterService } from '../service/waiter.service';


@Module({
  controllers: [WaiterController],
  providers: [WaiterService],
  imports: [
    SequelizeModule.forFeature([Waiter])
  ],
  exports: [WaiterService]
})
export class WaiterModule {}
