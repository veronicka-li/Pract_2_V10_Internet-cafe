import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TariffsController } from '../controller/Tariffs.controller';
import { Tariffs } from '../entity/Tariffs.model';
import { TariffsService } from '../service/Tariffs.service';


@Module({
  controllers: [TariffsController],
  providers: [TariffsService],
  imports: [
    SequelizeModule.forFeature([Tariffs])
  ],
  exports: [TariffsService]
})
export class TariffsModule {}
