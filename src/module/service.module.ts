import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ServiceController } from '../controller/Service.controller';
import { Service } from '../entity/service.model';
import { ServiceService } from '../service/Service.service';


@Module({
  controllers: [ServiceController],
  providers: [ServiceService],
  imports: [
    SequelizeModule.forFeature([Service])
  ],
  exports: [ServiceService]
})
export class ServiceModule {}
