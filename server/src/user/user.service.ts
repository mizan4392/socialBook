import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LocalStorageService } from 'src/storage.service';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { v4 as uuidv4 } from 'uuid';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
    private readonly storageService: LocalStorageService,
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

  async update(userId, payload, files: any) {
    if (files?.length) {
      for (const file of files) {
        if (file.originalname?.includes('cover_pic_')) {
          const fileUrl = `/user/cover/${userId}/${uuidv4()}_${file.originalname
            .split(' ')
            .join('_')}`;
          await this.storageService.putFile(file, fileUrl);
          payload.coverPic = fileUrl;
        }
        if (file.originalname?.includes('profile_pic_')) {
          const fileUrl = `/user/cover/${userId}/${uuidv4()}_${file.originalname
            .split(' ')
            .join('_')}`;
          await this.storageService.putFile(file, fileUrl);
          payload.profilePic = fileUrl;
        }
      }
    }
    return this.userRepo.update({ id: userId }, payload);
  }
}
