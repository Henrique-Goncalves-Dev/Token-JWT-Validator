import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { register } from 'module';

@Injectable()
export class AppService {
 constructor(
  @InjectRepository(User) private readonly userRepository: Repository<User>
 ){}

  async register(data: any): Promise<User>{
    return this.userRepository.save(data)
  }

  async findOne(condition: Partial<User>): Promise<User>{
   const user = await this.userRepository.findOneBy(condition);

   if (!user) {
    throw new Error('User not found')
   }

   return user;
  }
}
