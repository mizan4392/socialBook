import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateLikeDto {
  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  postId: number;
}
