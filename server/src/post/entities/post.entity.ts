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
  id: number;

  @Column({ type: 'json', nullable: true })
  postImage?: string[];

  @Column({ type: 'varchar', nullable: true })
  description?: string;

  @Column({ type: 'timestamp', nullable: true })
  createdAt: string;

  @ManyToOne((e) => User)
  user: User;
}
