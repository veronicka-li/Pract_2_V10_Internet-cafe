import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTariffsDto } from 'src/ic_dto';
import { Tariffs } from '../entity/Tariffs.model';


@Injectable()
export class TariffsService {
  constructor(
    @InjectModel(Tariffs)
    private TariffsModel: typeof Tariffs,
      ) {}
  
      async findAll(page: number=1, limit: number=3) {
 
        return this.TariffsModel.findAll( 
         {limit: limit,
          offset: limit*(page-1), include: {all: true}}
          );
        }

  async findOne(id_tar: string): Promise<Tariffs> {
    return this.TariffsModel.findOne({ where: { id_tar, }, include: {all: true}  });
  }

 async create(Tariffsd: CreateTariffsDto) 
 {
     const Tariffs = await this.TariffsModel.create(Tariffsd);
       return Tariffs;
  }


 async update(Tariffs: Tariffs): Promise<Tariffs> {
       const cTariffs = await Tariffs.save();
      return cTariffs;
  }


  async remove(id_tar: string): Promise<void> {
    const Tariffs = await this.findOne(id_tar);
    await Tariffs.destroy();
  }

  
}
