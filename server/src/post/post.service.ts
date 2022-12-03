/* eslint-disable @typescript-eslint/no-var-requires */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Follow } from 'src/follow/entities/follow.entity';
import { User } from 'src/user/entities/user.entity';
import { In, Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';
const moment = require('moment');
@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepo: Repository<Post>,
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
    @InjectRepository(Follow)
    private readonly followRepo: Repository<Follow>,
  ) {}
  create(createPostDto: CreatePostDto, user) {
    createPostDto.user = user;
    createPostDto.createdAt = moment().format('YYYY-MM-DD hh:mm:ss');

    return this.postRepo.save(createPostDto);
  }

  findAll() {
    return this.postRepo.find({ relations: ['user'] });
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }

  async loggedInUserNewsFeedPost(userId) {
    const following = await this.followRepo.find({
      where: {
        followedUser: {
          id: userId,
        },
      },
      relations: ['followedUser', 'followerUser'],
    });

    const ids = [userId];
    if (following?.length) {
      following.forEach((f) => ids.push(f.followerUser.id));
    }

    return this.postRepo.find({
      where: {
        user: {
          id: In(ids),
        },
      },
      relations: ['user'],
      order: {
        createdAt: 'DESC',
      },
    });
  }
}
