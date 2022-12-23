/* eslint-disable @typescript-eslint/no-var-requires */
import { CacheModule, Global, Module } from '@nestjs/common';

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

import { RadisService } from './radis.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { EmailService } from './email.service';
const mg = require('nodemailer-mailgun-transport');
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
    MailerModule.forRootAsync({
      useFactory: () => {
        return {
          transport: {
            service: 'gmail',
            auth: {
              user: 'md.mizan3079@gmail.com',
              pass: 'qxcznrullqdmgber',
            },
          },
          defaults: {
            from: `"Socialbook " <${environment.email.defaultSender}>`,
          },
          template: {
            dir: __dirname + '../views',
            adapter: new HandlebarsAdapter(),
          },
        };
      },
    }),
  ],
  controllers: [AppController, StorageController],
  providers: [AppService, LocalStorageService, RadisService, EmailService],
  exports: [LocalStorageService, RadisService, EmailService],
})
export class AppModule {}
