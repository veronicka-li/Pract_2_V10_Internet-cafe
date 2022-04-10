import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateServiceDto } from 'src/ic_dto';
import { Service } from '../entity/service.model';


@Injectable()
export class ServiceService {
  constructor(
    @InjectModel(Service)
    private ServiceModel: typeof Service,
      ) {}
  
      async findAll(page: number=1, limit: number=3) {
 
        return this.ServiceModel.findAll( 
         {limit: limit,
          offset: limit*(page-1), include: {all: true}}
          );
        }

  async findOne(id_service: string): Promise<Service> {
    return this.ServiceModel.findOne({ where: { id_service, }, include: {all: true}  });
  }

 async create(servicedto: CreateServiceDto) 
 {
     const service1 = await this.ServiceModel.create(servicedto);
       return service1;
  }


 async update(Service: Service): Promise<Service> {
       const cService = await Service.save();
      return cService;
  }


  async remove(id_service: string): Promise<void> {
    const Service = await this.findOne(id_service);
    await Service.destroy();
  }

  
}
