import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';
import { Comment } from 'src/comment/entities/comment.entity';
import { Follow } from 'src/follow/entities/follow.entity';
import { Like } from 'src/like/entities/like.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id?: number;

  @ApiProperty({
    required: false,
  })
  @IsOptional()
  @Column({ type: 'varchar', nullable: true })
  postImage?: string;

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  @Column({ type: 'varchar', nullable: true })
  description?: string;

  @Column({ type: 'timestamp', nullable: true })
  createdAt: string;

  @ManyToOne((e) => User)
  user: User;

  @OneToMany(() => Comment, (c) => c.post)
  comments: Comment[];

  @OneToMany(() => Like, (l) => l.post)
  likes: Like[];
}
