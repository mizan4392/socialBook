import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  findByUserNameOrEmail(userName?: string, email?: string) {
    const userQuery = this.userRepo.createQueryBuilder('u');
    if (userName && email) {
      userQuery
        .where('u.userName = :userName', { userName: userName })
        .orWhere('u.email = :email', { email: email });
    } else {
      if (userName) {
        userQuery.where('u.userName = :userName', { userName: userName });
      }
      if (email) {
        userQuery.where('u.email = :email', { email: email });
      }
    }
    return userQuery.getOne();
  }

  findByUserId(userId) {
    return this.userRepo.findOne({
      where: {
        id: userId,
      },
    });
  }

  createUser(userInfo: Partial<CreateUserDto>) {
    return this.userRepo.save(userInfo);
  }
}
