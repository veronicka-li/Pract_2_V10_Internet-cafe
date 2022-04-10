import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProviderController } from '../controller/Provider.controller';
import { Provider } from '../entity/Provider.model';
import { ProviderService } from '../service/Provider.service';


@Module({
  controllers: [ProviderController],
  providers: [ProviderService],
  imports: [
    SequelizeModule.forFeature([Provider])
  ],
  exports: [ProviderService]
})
export class ProviderModule {}
