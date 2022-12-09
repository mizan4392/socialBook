import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateFollowDto {
  @ApiProperty()
  @IsNotEmpty()
  followedUserId: number;
}
