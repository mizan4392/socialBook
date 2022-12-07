import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export type UserDocument = User & Document;

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false })
  userName: string;

  @Column({ type: 'varchar', nullable: false })
  fullName: string;

  @Column({ type: 'varchar', nullable: false, unique: true })
  email: string;

  @Column({ type: 'varchar', nullable: false })
  password: string;

  @Column({ type: 'varchar', nullable: true })
  profilePic: string;

  @Column({ type: 'varchar', nullable: true })
  coverPic: string;

  @Column({ type: 'boolean', nullable: true })
  isAdmin: boolean;

  @Column({ type: 'varchar', nullable: true })
  bio: string;

  @Column({ type: 'varchar', nullable: true })
  city: string;

  @Column({ type: 'varchar', nullable: true })
  address: string;

  @Column({ type: 'varchar', nullable: true })
  website: string;

  @Column({ type: 'varchar', nullable: true })
  faceBook: string;

  @Column({ type: 'varchar', nullable: true })
  instagram: string;
  @Column({ type: 'varchar', nullable: true })
  twitter: string;
  @Column({ type: 'varchar', nullable: true })
  linkedIn: string;
  @Column({ type: 'varchar', nullable: true })
  pinterest: string;

  @Column({ type: 'timestamp', nullable: true })
  createdAt: Date;
}
