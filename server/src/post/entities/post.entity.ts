import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';
import { Follow } from 'src/follow/entities/follow.entity';
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
  @Column({ type: 'json', nullable: true })
  postImage?: string[];

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
}
