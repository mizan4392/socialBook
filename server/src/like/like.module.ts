import { Module } from '@nestjs/common';
import { LikeService } from './like.service';
import { LikeController } from './like.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Like } from './entities/like.entity';
import { JwtModule } from '@nestjs/jwt';
import { environment } from 'src/environment/environment';

@Module({
  imports: [
    TypeOrmModule.forFeature([Like]),
    JwtModule.register({
      secret: environment.jwtSecrete,
      signOptions: { expiresIn: '8h' },
    }),
  ],
  controllers: [LikeController],
  providers: [LikeService],
})
export class LikeModule {}
