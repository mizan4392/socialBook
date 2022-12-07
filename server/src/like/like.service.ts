/* eslint-disable @typescript-eslint/no-var-requires */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateLikeDto } from './dto/create-like.dto';
import { UpdateLikeDto } from './dto/update-like.dto';
import { Like } from './entities/like.entity';
const moment = require('moment');
@Injectable()
export class LikeService {
  constructor(
    @InjectRepository(Like)
    private readonly likeRepo: Repository<Like>,
  ) {}
  create(createLikeDto: CreateLikeDto, user: User) {
    const payload = {
      post: {
        id: createLikeDto.postId,
      },
      user: user,
      createdAt: moment().utc().format('YYYY-MM-DD hh:mm:ss'),
    };
    return this.likeRepo.save(payload);
  }

  findAll() {
    return `This action returns all like`;
  }

  findOne(id: number) {
    return `This action returns a #${id} like`;
  }

  update(id: number, updateLikeDto: UpdateLikeDto) {
    return `This action updates a #${id} like`;
  }

  remove(id: number, user: User) {
    return this.likeRepo.delete({ post: { id: id }, user: { id: user.id } });
  }
}
