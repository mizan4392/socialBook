import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Post } from './post.entity';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: true })
  description?: string;

  @Column({ type: 'timestamp', nullable: true })
  createdAt?: string;

  @ManyToOne((e) => User)
  user: User;

  @ManyToOne((e) => Post)
  post: Post;
}
