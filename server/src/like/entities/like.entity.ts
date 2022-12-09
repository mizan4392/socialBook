import { Post } from 'src/post/entities/post.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Like {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((e) => User)
  user: User;

  @ManyToOne((e) => Post, { onDelete: 'CASCADE' })
  post: Post;

  @Column({ type: 'timestamp', nullable: true })
  createdAt: string;
}
