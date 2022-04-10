import { Controller,Get,Post,Put,Delete, Param, Body, Query} from "@nestjs/common";
import { CreateClientDto, UpdateClientDto } from "src/ic_dto";
import { Client } from "src/entity/Client.model";
import { ClientService } from "src/service/Client.service";


@Controller('client')

export class ClientController{
constructor(private readonly ClientService: ClientService){}


@Get() 
getAllAction(@Query('page') page: number,@Query('limit') limit: number)
{
return this.ClientService.findAll(page,limit);
}


    @Get(':id_client')
    getOneAction(@Param('id_client')id_client:string):Promise<Client>{
        return this.ClientService.findOne(id_client);
     }

    @Post()
    createAction(@Body() createClientdto: CreateClientDto) 
    {
         return this.ClientService.create(createClientdto);
    }

      @Put(':id_client')
       async updateAction(@Param('id_client') id_client : string,
        @Body() {name_client}:
        UpdateClientDto) : Promise<Client|{error:boolean}> 
    {
            const client = await this.ClientService.findOne(id_client);
            if(client === undefined){
                return{
                    error : true
                }
            }
            client.name_client=name_client;
           return this.ClientService.update(client);
       }

    @Delete(':id_client')
    deleteAction(@Param('id_client')id_client:string):Promise<void>{
        return this.ClientService.remove(id_client);;
    }

    
}
