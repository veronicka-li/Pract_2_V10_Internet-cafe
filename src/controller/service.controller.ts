import { Controller,Get,Post,Put,Delete, Param, Body, Query} from "@nestjs/common";
import { CreateServiceDto, UpdateServiceDto } from "src/ic_dto";
import { Service } from "src/entity/service.model";
import { ServiceService } from "src/service/Service.service";


@Controller('service')

export class ServiceController{
constructor(private readonly ServiceService: ServiceService){}


@Get() 
getAllAction(@Query('page') page: number,@Query('limit') limit: number)
{
return this.ServiceService.findAll(page,limit);
}


    @Get(':id_service')
    getOneAction(@Param('id_service')id_service:string):Promise<Service>{
        return this.ServiceService.findOne(id_service);
     }

    @Post()
    createAction(@Body() createServicedto: CreateServiceDto) 
    {
         return this.ServiceService.create(createServicedto);
    }

      @Put(':id_service')
       async updateAction(@Param('id_service') id_service : string,
        @Body() {tar_id, cafe_id, provider_id}:
        UpdateServiceDto) : Promise<Service|{error:boolean}> 
    {
            const Service = await this.ServiceService.findOne(id_service);
            if(Service === undefined){
                return{
                    error : true
                }
            }
           Service.tar_id=tar_id;
            Service.cafe_id=cafe_id;
            Service.provider_id=provider_id;
               return this.ServiceService.update(Service);
       }

    @Delete(':id_service')
    deleteAction(@Param('id_service')id_service:string):Promise<void>{
        return this.ServiceService.remove(id_service);;
    }

    
}
