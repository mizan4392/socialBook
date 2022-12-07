import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from './entities/comment.entity';
import { JwtModule } from '@nestjs/jwt';
import { environment } from 'src/environment/environment';

@Module({
  imports: [
    TypeOrmModule.forFeature([Comment]),
    JwtModule.register({
      secret: environment.jwtSecrete,
      signOptions: { expiresIn: '8h' },
    }),
  ],
  controllers: [CommentController],
  providers: [CommentService],
})
export class CommentModule {}
