import { Controller,Get,Post,Put,Delete, Param, Body, Query} from "@nestjs/common";
import { CreateOrderDto, UpdateOrderDto } from "src/ic_dto";
import { Order } from "src/entity/Order.model";
import { OrderService } from "src/service/Order.service";


@Controller('order')

export class OrderController{
constructor(private readonly OrderService: OrderService){}


@Get() 
getAllAction(@Query('page') page: number,@Query('limit') limit: number)
{
return this.OrderService.findAll(page,limit);
}


    @Get(':id_order')
    getOneAction(@Param('id_order')id_order:string):Promise<Order>{
        return this.OrderService.findOne(id_order);
     }

    @Post()
    createAction(@Body() createOrderdto: CreateOrderDto) 
    {
         return this.OrderService.create(createOrderdto);
    }

      @Put(':id_order')
       async updateAction(@Param('id_order') id_order : string,
        @Body() {sum,session_time,client_id,PC_id,waiter_id}:
        UpdateOrderDto) : Promise<Order|{error:boolean}> 
    {
            const order = await this.OrderService.findOne(id_order);
            if(order === undefined){
                return{
                    error : true
                }
            }
            order.sum = sum;
            order.session_time=session_time;
             order.client_id=client_id;
            order.PC_id=PC_id;
            order.waiter_id=waiter_id;
           return this.OrderService.update(order);
       }

    @Delete(':id_order')
    deleteAction(@Param('id_order')id_order:string):Promise<void>{
        return this.OrderService.remove(id_order);;
    }

    
}
