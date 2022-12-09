import { Module } from '@nestjs/common';
import { FollowService } from './follow.service';
import { FollowController } from './follow.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Follow } from './entities/follow.entity';
import { JwtModule } from '@nestjs/jwt';
import { environment } from 'src/environment/environment';

@Module({
  imports: [
    TypeOrmModule.forFeature([Follow]),
    JwtModule.register({
      secret: environment.jwtSecrete,
      signOptions: { expiresIn: '8h' },
    }),
  ],
  controllers: [FollowController],
  providers: [FollowService],
})
export class FollowModule {}
