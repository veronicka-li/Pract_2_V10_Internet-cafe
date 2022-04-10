import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateWaiterDto } from 'src/ic_dto';
import { Waiter } from '../entity/waiter.model';


@Injectable()
export class WaiterService {
  constructor(
    @InjectModel(Waiter)
    private WaiterModel: typeof Waiter,
      ) {}
  
      async findAll(page: number=1, limit: number=3) {
 
        return this.WaiterModel.findAll( 
         {limit: limit,
          offset: limit*(page-1), include: {all: true}}
          );
        }

  async findOne(id_waiter: string): Promise<Waiter> {
    return this.WaiterModel.findOne({ where: { id_waiter, },  include: {all: true} });
  }

 async create(Waiterd: CreateWaiterDto) 
 {
     const Waiter = await this.WaiterModel.create(Waiterd);
       return Waiter;
  }


 async update(Waiter: Waiter): Promise<Waiter> {
       const cWaiter = await Waiter.save();
      return cWaiter;
  }


  async remove(id_Waiter: string): Promise<void> {
    const Waiter = await this.findOne(id_Waiter);
    await Waiter.destroy();
  }

  
}
