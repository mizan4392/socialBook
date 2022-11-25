import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { config } from 'dotenv';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { environment } from './environment/environment';
import { User } from './user/entities/user.entity';
import { PostModule } from './post/post.module';
import { StoriesModule } from './stories/stories.module';
import { FollowModule } from './follow/follow.module';
import { LikeModule } from './like/like.module';
import { Post } from './post/entities/post.entity';
import { Comment } from './post/entities/comment.entity';
import { Like } from './like/entities/like.entity';
import { Follow } from './follow/entities/follow.entity';
import { Story } from './stories/entities/story.entity';
config();

const ormConfig = {
  ...environment.database,
  entities: [User, Post, Comment, Like, Follow, Story],
} as TypeOrmModuleOptions;

@Module({
  imports: [
    TypeOrmModule.forRoot(ormConfig),
    PostModule,
    StoriesModule,
    FollowModule,
    LikeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
