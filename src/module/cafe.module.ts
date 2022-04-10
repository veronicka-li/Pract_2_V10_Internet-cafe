import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CafeController } from '../controller/cafe.controller';
import { Cafe } from '../entity/cafe.model';
import { CafeService } from '../service/cafe.service';


@Module({
  controllers: [CafeController],
  providers: [CafeService],
  imports: [
    SequelizeModule.forFeature([Cafe])
  ],
  exports: [CafeService]
})
export class CafeModule {}
