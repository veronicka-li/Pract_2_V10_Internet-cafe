import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePCDto } from 'src/ic_dto';
import { PC } from '../entity/PC.model';


@Injectable()
export class PCService {
  constructor(
    @InjectModel(PC)
    private PCModel: typeof PC,
      ) {}
  
      async findAll(page: number=1, limit: number=3) {
 
        return this.PCModel.findAll( 
         {limit: limit,
          offset: limit*(page-1), include: {all: true}}
          );
        }

  async findOne(id_PC: string): Promise<PC> {
    return this.PCModel.findOne({ where: { id_PC, }, include: {all: true}  });
  }

 async create(PCd: CreatePCDto) 
 {
     const PC = await this.PCModel.create(PCd);
       return PC;
  }


 async update(PC: PC): Promise<PC> {
       const cPC = await PC.save();
      return cPC;
  }


  async remove(id_PC: string): Promise<void> {
    const PC = await this.findOne(id_PC);
    await PC.destroy();
  }

  
}
