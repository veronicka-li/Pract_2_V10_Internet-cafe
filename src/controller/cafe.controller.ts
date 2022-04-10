import { Controller,Get,Post,Put,Delete, Param, Body, Query} from "@nestjs/common";
import { CreateCafeDto, UpdateCafeDto } from "src/ic_dto";
import { Cafe } from "src/entity/cafe.model";
import { CafeService } from "src/service/cafe.service";


@Controller('cafe')

export class CafeController{
constructor(private readonly CafeService: CafeService){}

    @Get() 
    getAllAction(@Query('page') page: number,@Query('limit') limit: number)
    {
    return this.CafeService.findAll(page,limit);
    }

    @Get(':id_cafe')
    getOneAction(@Param('id_cafe')id_cafe:string):Promise<Cafe>{
     return this.CafeService.findOne(id_cafe);
     }

    @Post()
    createAction(@Body() createcafedto: CreateCafeDto) 
    {         return this.CafeService.create(createcafedto);    }

      @Put(':id_cafe')
       async updateAction(@Param('id_cafe') id_cafe : string,
        @Body() {name_cafe,address,bank_account,pan}:
        UpdateCafeDto) : Promise<Cafe|{error:boolean}> 
    {        const cafe = await this.CafeService.findOne(id_cafe);
            if(cafe === undefined){
                return{
                    error : true
                }
            }
            cafe.name_cafe=name_cafe;
            cafe.address=address;
            cafe.bank_account=bank_account;
            cafe.pan=pan;
            return this.CafeService.update(cafe);      }

    @Delete(':id_cafe')
    deleteAction(@Param('id_cafe')id_cafe:string):Promise<void>{
        return this.CafeService.remove(id_cafe);;
    }
    
}
