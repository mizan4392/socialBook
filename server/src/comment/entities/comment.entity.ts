import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';
import { Post } from 'src/post/entities/post.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Comment {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id?: number;

  @ApiProperty()
  @Column({ type: 'varchar', nullable: false })
  description: string;

  @ApiProperty()
  @Column({ type: 'timestamp', nullable: true })
  createdAt?: string;

  @ApiProperty()
  @ManyToOne((e) => User)
  user?: User;

  @ManyToOne((e) => Post, { onDelete: 'CASCADE' })
  post?: Post;
}
