import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/ic_dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private autService: AuthService) {}

    @Post('login')
    login(@Body() userdto: CreateUserDto){
        return this.autService.login(userdto)
    }

    @Post('reg')
    registration(@Body() userdto: CreateUserDto){
        return this.autService.registration(userdto)
    }

}
