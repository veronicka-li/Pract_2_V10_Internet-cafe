import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PCController } from '../controller/PC.controller';
import { PC } from '../entity/PC.model';
import { PCService } from '../service/PC.service';


@Module({
  controllers: [PCController],
  providers: [PCService],
  imports: [
    SequelizeModule.forFeature([PC])
  ],
  exports: [PCService]
})
export class PCModule {}
