import { Controller,Get,Post,Put,Delete, Param, Body, Query} from "@nestjs/common";
import { CreatePCDto, UpdatePCDto } from "src/ic_dto";
import { PC } from "src/entity/PC.model";
import { PCService } from "src/service/PC.service";


@Controller('PC')

export class PCController{
constructor(private readonly PCService: PCService){}


@Get() 
getAllAction(@Query('page') page: number,@Query('limit') limit: number)
{
return this.PCService.findAll(page,limit);
}


    @Get(':id_PC')
    getOneAction(@Param('id_PC')id_PC:string):Promise<PC>{
        return this.PCService.findOne(id_PC);
     }

    @Post()
    createAction(@Body() createPCdto: CreatePCDto) 
    {
         return this.PCService.create(createPCdto);
    }

      @Put(':id_PC')
       async updateAction(@Param('id_PC') id_PC : string,
        @Body() {number,cafe_id}:
        UpdatePCDto) : Promise<PC|{error:boolean}> 
    {
            const PC = await this.PCService.findOne(id_PC);
            if(PC === undefined){
                return{
                    error : true
                }
            }
            PC.number = number;
            PC.cafe_id=cafe_id;
          return this.PCService.update(PC);
       }

    @Delete(':id_PC')
    deleteAction(@Param('id_PC')id_PC:string):Promise<void>{
        return this.PCService.remove(id_PC);;
    }

    
}
