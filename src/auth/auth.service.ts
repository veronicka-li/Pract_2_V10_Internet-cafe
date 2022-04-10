import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { CreateUserDto } from 'src/ic_dto';
import { User } from 'src/user/user.model';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {

    constructor(private userService: UserService,
      private jwtService: JwtService) {}

   async  login(userdto: CreateUserDto){
    const user = await this.validateuser(userdto);
    return this.generateToken(user);
    }

    private async validateuser(userdto: CreateUserDto)
    {
      const user =  await this.userService.getUser(userdto.email);
      const passwordEq = await bcrypt.compare(userdto.password, user.password);
      if (user && passwordEq)
      {
        return user;
      }
      throw new UnauthorizedException({message: 'Incorrect email or password'})
    }

     async registration(userdto: CreateUserDto){
        const variant = await this.userService.getUser(userdto.email);
       if(variant){
        throw new HttpException('User Exsist', HttpStatus.BAD_REQUEST)
      }
      
      const hashpassword = await bcrypt.hash(userdto.password, 2);
      const user = await this.userService.create({...userdto,password: hashpassword});
        return this.generateToken(user);
    }

  private async generateToken(user: User)
    {
    const payload = {email: user.email, id: user.id_user}
    return {
     token:this.jwtService.sign(payload)
    }
}

}

