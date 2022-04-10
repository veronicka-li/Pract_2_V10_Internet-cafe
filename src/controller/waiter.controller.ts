import { Controller,Get,Post,Put,Delete, Param, Body, Query} from "@nestjs/common";
import { CreateWaiterDto, UpdateWaiterDto } from "src/ic_dto";
import { Waiter } from "src/entity/waiter.model";
import { WaiterService } from "src/service/waiter.service";


@Controller('waiter')

export class WaiterController{
constructor(private readonly WaiterService: WaiterService){}


        @Get() 
        getAllAction(@Query('page') page: number,@Query('limit') limit: number)
        {
        return this.WaiterService.findAll(page,limit);
        }


    @Get(':id_waiter')
    getOneAction(@Param('id_waiter')id_waiter:string):Promise<Waiter>{
        return this.WaiterService.findOne(id_waiter);
     }

    @Post()
    createAction(@Body() createWaiterdto: CreateWaiterDto) 
    {
         return this.WaiterService.create(createWaiterdto);
    }

      @Put(':id_waiter')
       async updateAction(@Param('id_waiter') id_waiter : string,
        @Body() {full_name,address,passport,cafe_id}:
        UpdateWaiterDto) : Promise<Waiter|{error:boolean}> 
    {
            const Waiter = await this.WaiterService.findOne(id_waiter);
            if(Waiter === undefined){
                return{
                    error : true
                }
            }
            Waiter.full_name=full_name;
            Waiter.address=address;
            Waiter.passport=passport;
            Waiter.cafe_id=cafe_id;
           return this.WaiterService.update(Waiter);
       }

    @Delete(':id_waiter')
    deleteAction(@Param('id_waiter')id_waiter:string):Promise<void>{
        return this.WaiterService.remove(id_waiter);;
    }

    
}
