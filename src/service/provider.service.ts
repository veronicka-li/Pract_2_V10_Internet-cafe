import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateProviderDto } from 'src/ic_dto';
import { Provider } from '../entity/Provider.model';


@Injectable()
export class ProviderService {
  constructor(
    @InjectModel(Provider)
    private ProviderModel: typeof Provider,
      ) {}
  
      async findAll(page: number=1, limit: number=3) {
 
        return this.ProviderModel.findAll( 
         {limit: limit,
          offset: limit*(page-1),include: {all: true} }
          );
        }

  async findOne(id_provider: string): Promise<Provider> {
    return this.ProviderModel.findOne({ where: { id_provider, },  include: {all: true} });
  }

 async create(Providerd: CreateProviderDto) 
 {
     const Provider = await this.ProviderModel.create(Providerd);
       return Provider;
  }


 async update(Provider: Provider): Promise<Provider> {
       const cProvider = await Provider.save();
      return cProvider;
  }


  async remove(id_provider: string): Promise<void> {
    const Provider = await this.findOne(id_provider);
    await Provider.destroy();
  }

  
}
