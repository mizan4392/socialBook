import { Global, Module } from '@nestjs/common';

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

import { Like } from './like/entities/like.entity';
import { Follow } from './follow/entities/follow.entity';
import { Story } from './stories/entities/story.entity';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { GlobalModule } from './global.module';
import { LocalStorageService } from './storage.service';
import { StorageController } from './storage.controller';
import { CommentModule } from './comment/comment.module';
import { Comment } from './comment/entities/comment.entity';

config();

const ormConfig = {
  ...environment.database,
  entities: [User, Post, Comment, Like, Follow, Story],
} as TypeOrmModuleOptions;

@Global()
@Module({
  imports: [
    TypeOrmModule.forRoot(ormConfig),
    PostModule,
    StoriesModule,
    FollowModule,
    LikeModule,
    AuthModule,
    UserModule,
    JwtModule.register({
      secret: environment.jwtSecrete,
      signOptions: { expiresIn: '8h' },
    }),
    GlobalModule,
    CommentModule,
  ],
  controllers: [AppController, StorageController],
  providers: [AppService, LocalStorageService],
  exports: [LocalStorageService],
})
export class AppModule {}
