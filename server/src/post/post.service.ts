/* eslint-disable @typescript-eslint/no-var-requires */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Follow } from 'src/follow/entities/follow.entity';
import { LocalStorageService } from 'src/storage.service';
import { User } from 'src/user/entities/user.entity';
import { In, Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';
import { v4 as uuidv4 } from 'uuid';
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

    private readonly storageService: LocalStorageService,
  ) {}
  async create(createPostDto: CreatePostDto, file, user) {
    createPostDto.user = user;
    createPostDto.createdAt = moment().utc().format('YYYY-MM-DD hh:mm:ss');
    if (file) {
      const fileUrl = `/posts/${user.id}/${uuidv4()}_${file.originalname
        .split(' ')
        .join('_')}`;
      await this.storageService.putFile(file, fileUrl);
      createPostDto.postImage = fileUrl;
    }

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
  async getLoggedInUserPosts(userId) {
    const posts = await this.postRepo.find({
      where: {
        user: {
          id: userId,
        },
      },
      relations: ['user', 'comments', 'likes', 'likes.user'],
      order: {
        createdAt: 'DESC',
      },
    });
    posts?.map((itm: any) => {
      itm.comments = itm.comments?.length | 0;
    });
    return posts;
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

    const posts = await this.postRepo.find({
      where: {
        user: {
          id: In(ids),
        },
      },
      relations: ['user', 'comments', 'likes', 'likes.user'],
      order: {
        createdAt: 'DESC',
      },
    });
    posts?.map((itm: any) => {
      itm.comments = itm.comments?.length | 0;
    });

    return posts;
  }
}
