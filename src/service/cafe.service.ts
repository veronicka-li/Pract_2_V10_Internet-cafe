import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCafeDto } from 'src/ic_dto';
import { Cafe } from '../entity/cafe.model';


@Injectable()
export class CafeService {
  constructor(
    @InjectModel(Cafe)
    private cafeModel: typeof Cafe,
      ) {}
  
  async findAll(page: number=1, limit: number=3) {
 
    return this.cafeModel.findAll( 
     {limit: limit,
      offset: limit*(page-1), include: {all: true} }
      );
    }

  async findOne(id_cafe: string): Promise<Cafe> {
    return this.cafeModel.findOne({ where: { id_cafe, }, include: {all: true}  });
  }

 async create(cafed: CreateCafeDto) 
 {
     const cafe = await this.cafeModel.create(cafed);
       return cafe;
  }

 async update(cafe: Cafe): Promise<Cafe> {
       const ccafe = await cafe.save();
      return ccafe;
  }

  async remove(id_cafe: string): Promise<void> {
    const cafe = await this.findOne(id_cafe);
    await cafe.destroy();
  }

  
}
