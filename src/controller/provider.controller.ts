import { Controller,Get,Post,Put,Delete, Param, Body, Query} from "@nestjs/common";
import { CreateProviderDto, UpdateProviderDto } from "src/ic_dto";
import { Provider } from "src/entity/Provider.model";
import { ProviderService } from "src/service/Provider.service";


@Controller('provider')

export class ProviderController{
constructor(private readonly ProviderService: ProviderService){}


@Get() 
getAllAction(@Query('page') page: number,@Query('limit') limit: number)
{
return this.ProviderService.findAll(page,limit);
}


    @Get(':id_provider')
    getOneAction(@Param('id_provider')id_provider:string):Promise<Provider>{
        return this.ProviderService.findOne(id_provider);
     }

    @Post()
    createAction(@Body() createProviderdto: CreateProviderDto) 
    {
         return this.ProviderService.create(createProviderdto);
    }

      @Put(':id_provider')
       async updateAction(@Param('id_provider') id_provider : string,
        @Body() {name_provider}:
        UpdateProviderDto) : Promise<Provider|{error:boolean}> 
    {
            const Provider = await this.ProviderService.findOne(id_provider);
            if(Provider === undefined){
                return{
                    error : true
                }
            }
            Provider.name_provider =name_provider;
               return this.ProviderService.update(Provider);
       }

    @Delete(':id_provider')
    deleteAction(@Param('id_provider')id_provider:string):Promise<void>{
        return this.ProviderService.remove(id_provider);;
    }

    
}
