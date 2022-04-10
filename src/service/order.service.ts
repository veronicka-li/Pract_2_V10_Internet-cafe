import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateOrderDto } from 'src/ic_dto';
import { Order } from '../entity/Order.model';


@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order)
    private OrderModel: typeof Order,
      ) {}
  
      async findAll(page: number=1, limit: number=3) {
 
        return this.OrderModel.findAll( 
         {limit: limit,
          offset: limit*(page-1),include: {all: true} }
          );
        }

  async findOne(id_order: string): Promise<Order> {
    return this.OrderModel.findOne({ where: { id_order, }, include: {all: true}  });
  }

 async create(orderd: CreateOrderDto) 
 {
     const Order = await this.OrderModel.create(orderd);
       return Order;
  }


 async update(Order: Order): Promise<Order> {
       const cOrder = await Order.save();
      return cOrder;
  }


  async remove(id_order: string): Promise<void> {
    const Order = await this.findOne(id_order);
    await Order.destroy();
  }

  
}
