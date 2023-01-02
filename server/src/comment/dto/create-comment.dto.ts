import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateCommentDto {
  @ApiProperty({
    description: 'Comment Description ',
    required: true,
  })
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    description: 'postId',
    required: true,
  })
  @IsNotEmpty()
  postId: number;
}
