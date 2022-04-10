import { Controller,Get,Post,Put,Delete, Param, Body} from "@nestjs/common";
import { CreateUserDto, UpdateUserDto } from "src/ic_dto";
import { User } from "./user.model";
import { UserService } from "./user.service";



@Controller('user')
export class UserController {
constructor(private readonly UserService: UserService){}


   @Get()
    getAllAction(): Promise<User[]>{
        return this.UserService.findAll();
    }

    @Get(':id_user')
    getOneAction(@Param('id_user')id_user:string):Promise<User>{
        return this.UserService.findOne(id_user);
     }

    @Post()
    createAction(@Body() createUserdto: CreateUserDto) 
    {
         return this.UserService.create(createUserdto);
    }

      @Put(':id_user')
       async updateAction(@Param('id_user') id_user : string,
        @Body() {email,password}:
        UpdateUserDto) : Promise<User|{error:boolean}> 
    {
            const User = await this.UserService.findOne(id_user);
            if(User === undefined){
                return{
                    error : true
                }
            }
            User.email=email;
            User.password=password;
           return this.UserService.update(User);
       }

    @Delete(':id_user')
    deleteAction(@Param('id_user')id_user:string):Promise<void>{
        return this.UserService.remove(id_user);;
    }

    
}
