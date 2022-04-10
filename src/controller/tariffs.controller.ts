import { Controller,Get,Post,Put,Delete, Param, Body, Query} from "@nestjs/common";
import { CreateTariffsDto, UpdateTariffsDto } from "src/ic_dto";
import { Tariffs } from "src/entity/Tariffs.model";
import { TariffsService } from "src/service/Tariffs.service";


@Controller('tariffs')

export class TariffsController{
constructor(private readonly TariffsService: TariffsService){}


@Get() 
getAllAction(@Query('page') page: number,@Query('limit') limit: number)
{
return this.TariffsService.findAll(page,limit);
}


    @Get(':id_tar')
    getOneAction(@Param('id_tar')id_tar:string):Promise<Tariffs>{
        return this.TariffsService.findOne(id_tar);
     }

    @Post()
    createAction(@Body() createTariffsdto: CreateTariffsDto) 
    {
         return this.TariffsService.create(createTariffsdto);
    }

      @Put(':id_tar')
       async updateAction(@Param('id_tar') id_tar : string,
        @Body() {name_tar,price,data}:
        UpdateTariffsDto) : Promise<Tariffs|{error:boolean}> 
    {
            const Tariffs = await this.TariffsService.findOne(id_tar);
            if(Tariffs === undefined){
                return{
                    error : true
                }
            }
            Tariffs.name_tar=name_tar;
            Tariffs.price=price;
            Tariffs.data=data;
               return this.TariffsService.update(Tariffs);
       }

    @Delete(':id_tar')
    deleteAction(@Param('id_tar')id_tar:string):Promise<void>{
        return this.TariffsService.remove(id_tar);;
    }

    
}
