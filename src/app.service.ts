import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository : Repository<UserEntity>
  ){}

  async create(data) {
    await this.userRepository.save(data);
  }

  async login(condition){
    const user = await this.userRepository.findOne(condition)
    if(!user)
        return null;
      return user;
   

  }
}
