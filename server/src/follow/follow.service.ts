/* eslint-disable @typescript-eslint/no-var-requires */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { DATE_FORMATS } from 'src/utils/date';
import { Repository } from 'typeorm';
import { CreateFollowDto } from './dto/create-follow.dto';
import { UpdateFollowDto } from './dto/update-follow.dto';
import { Follow } from './entities/follow.entity';
const moment = require('moment');

@Injectable()
export class FollowService {
  constructor(
    @InjectRepository(Follow)
    private readonly followRepo: Repository<Follow>,
  ) {}
  create(createFollowDto: CreateFollowDto, user: User) {
    const payload = {
      followedUser: {
        id: createFollowDto.followedUserId,
      },
      followerUser: {
        id: user.id,
      },
      createdAt: moment().utc(),
    };
    return this.followRepo.save(payload);
  }

  findAll() {
    return `This action returns all follow`;
  }

  findOne(id: number) {
    return `This action returns a #${id} follow`;
  }

  update(id: number, updateFollowDto: UpdateFollowDto) {
    return `This action updates a #${id} follow`;
  }

  remove(id: number, user: User) {
    console.log('id', id);
    console.log('user', user);
    return this.followRepo.delete({
      followedUser: {
        id: id,
      },
      followerUser: {
        id: user.id,
      },
    });
  }

  getCurrentUserFollow(userId, followedUserId) {
    return this.followRepo.findOne({
      where: {
        followerUser: {
          id: userId,
        },
        followedUser: {
          id: followedUserId,
        },
      },
    });
  }
}
