import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({
    type: String,
    required: true,
    min: 4,
    max: 20,
    unique: true,
  })
  userName: string;
  @Prop({
    type: String,
    required: true,
    min: 4,
    max: 50,
    unique: true,
  })
  email: string;

  @Prop({
    type: String,
    required: false,
    min: 8,
  })
  password: string;

  @Prop({
    type: String,
    required: false,
    default: '',
  })
  profilePic: string;

  @Prop({
    type: String,
    required: false,
    default: '',
  })
  coverPic: string;

  @Prop({
    type: Array,
    required: false,
    default: [],
  })
  followers: string[];
  @Prop({
    type: Array,
    required: false,
    default: [],
  })
  following: string[];

  @Prop({
    type: Boolean,
    required: false,
    default: false,
  })
  isAdmin: boolean;

  @Prop({
    type: String,
    required: false,
    default: '',
  })
  bio: string;

  @Prop({
    type: String,
    required: false,
    default: '',
  })
  address: string;

  @Prop({ type: Date, required: true })
  createdAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
