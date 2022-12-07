import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Comment } from '../entities/comment.entity';

export class CreateCommentDto {
  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  postId: number;
}
