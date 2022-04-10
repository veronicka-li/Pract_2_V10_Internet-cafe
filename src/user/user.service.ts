import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from 'src/ic_dto';
import { User } from './user.model';


@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private UserModel: typeof User,
      ) {}
  
  async findAll(): Promise<User[]> {
    return this.UserModel.findAll();
    }

  async findOne(id_user: string): Promise<User> {
    return this.UserModel.findOne({ where: { id_user, },   });
  }

 async create(userd: CreateUserDto) 
 {
     const user = await this.UserModel.create(userd);
       return user;
  }

 async update(user: User): Promise<User> {
       const cUser = await user.save();
      return cUser;
  }

  async remove(id_user: string): Promise<void> {
    const User = await this.findOne(id_user);
    await User.destroy();
  }

  async getUser(email: string){
    const user = await this.UserModel.findOne({where: {email}, include: {all:true}});
    return user;
  }
}
