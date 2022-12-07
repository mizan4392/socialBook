/* eslint-disable @typescript-eslint/no-var-requires */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { getCurrentTimeFormatted } from 'src/utils/date';
import { Repository } from 'typeorm';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './entities/comment.entity';
const moment = require('moment');

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepo: Repository<Comment>,
  ) {}
  create(createCommentDto: CreateCommentDto, user: User) {
    const payload = {
      description: createCommentDto.description,
      user: user,
      post: {
        id: createCommentDto.postId,
      },
      createdAt: moment().utc().format('YYYY-MM-DD hh:mm:ss'),
    };
    return this.commentRepo.save(payload);
  }

  findAll() {
    return `This action returns all comment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} comment`;
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return `This action updates a #${id} comment`;
  }

  remove(id: number) {
    return `This action removes a #${id} comment`;
  }

  getCommentByPostId(postId: string) {
    return this.commentRepo.find({
      where: {
        post: {
          id: Number(postId),
        },
      },
      relations: ['user'],
    });
  }
}
