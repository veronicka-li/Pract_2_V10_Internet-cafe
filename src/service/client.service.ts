import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateClientDto } from 'src/ic_dto';
import { Client } from '../entity/client.model';


@Injectable()
export class ClientService {
  constructor(
    @InjectModel(Client)
    private ClientModel: typeof Client,
      ) {}
  
      async findAll(page: number=1, limit: number=3) {
 
        return this.ClientModel.findAll( 
         {limit: limit,
          offset: limit*(page-1),include: {all: true} }
          );
        }
        
  async findOne(id_client: string): Promise<Client> {
    return this.ClientModel.findOne({ where: { id_client, },  include: {all: true} });
  }

 async create(clientd: CreateClientDto) 
 {
     const client = await this.ClientModel.create(clientd);
       return client;
  }


 async update(client: Client): Promise<Client> {
       const cClient = await client.save();
      return cClient;
  }


  async remove(id_client: string): Promise<void> {
    const client = await this.findOne(id_client);
    await client.destroy();
  }

  
}

