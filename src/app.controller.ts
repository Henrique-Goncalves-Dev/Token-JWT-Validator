import { BadRequestException, Body, Controller, Get, Post, Req, Res, UnauthorizedException, } from '@nestjs/common';
import { AppService } from './app.service';
import * as bcrypt from 'bcrypt';
import { emit } from 'process';
import { JwtService } from '@nestjs/jwt';
import type { request, Response, Request } from 'express';
import { PassThrough } from 'stream';

@Controller('/api')
export class AppController {
  constructor(
    private readonly userService: AppService,
   private readonly jwtService: JwtService) {}

  
  @Post('register')
  async register(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('password') password: string
  ){
      const hashPassword = await bcrypt.hash(password, 12);

      const user = await this.userService.register({
        name,
        email,
        password: hashPassword
      });

      const { password: _, ...userWithoutPassword } = user;
      return userWithoutPassword;
  }

  @Post('login')
  async login(
    @Body('email') email: string,
    @Body('password') password: string,
    @Res({passthrough: true}) response: Response
  ){
      const user = await this.userService.findOne({email})

      if (!await bcrypt.compare(password, user.password)) {
        throw new BadRequestException('Invalid credentials')
      }

      const jwt = await this.jwtService.signAsync({id: user.id});
      
      response.cookie('jwt', jwt, {httpOnly: true});


      return {
        message: 'Sucess'
      };
  }

  @Get('user')
  async user(@Req() request: Request ){
    try{

    

    const cookie = request.cookies['jwt'];

    const data = await this.jwtService.verifyAsync(cookie);


    if(!data){
      throw new UnauthorizedException()
    }

    const user = await this.userService.findOne({id: data['id']})

    const {password, ...result} = user;

    return result;

    }catch(e){
      throw new UnauthorizedException()
    }
    
  }

  @Post('logout')
  async logout( 
    @Res({passthrough: true}) response: Response){
      response.clearCookie('jwt')

      return{
        message: 'Sucess logout'
      }
  }
    
  
}
