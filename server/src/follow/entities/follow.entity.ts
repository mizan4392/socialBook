import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Follow {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((e) => User)
  followerUser: User;

  @ManyToOne((e) => User)
  followedUser: User;

  @Column({ type: 'timestamp', nullable: true })
  createdAt: string;
}
