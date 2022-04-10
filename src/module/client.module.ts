import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ClientController } from '../controller/Client.controller';
import { Client } from '../entity/Client.model';
import { ClientService } from '../service/Client.service';


@Module({
  controllers: [ClientController],
  providers: [ClientService],
  imports: [
    SequelizeModule.forFeature([Client])
  ],
  exports: [ClientService]
})
export class ClientModule {}
