import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './entities/user.entity';
import { Model } from 'mongoose';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private readonly authService: AuthService,
  ) {}
  async create(createUserDto: CreateUserDto) {
    createUserDto.createdAt = new Date();
    createUserDto.password = await this.authService.hashPassword(
      createUserDto.password,
    );
    const createdUser = new this.userModel(createUserDto);
    console.log(createUserDto);
    return createdUser.save();
  }

  findAll() {
    return this.userModel.find().exec();
  }

  async findOne(id: string) {
    const user: any = await this.userModel.findOne({ _id: id });
    if (user) {
      const { password, isAdmin, ...others } = user._doc;
      return others;
    } else {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
  }

  findByUserName(userName: string): Promise<User> {
    return this.userModel
      .findOne()
      .where({
        userName: userName,
      })
      .exec();
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    if (updateUserDto.password) {
      updateUserDto.password = await this.authService.hashPassword(
        updateUserDto.password,
      );
    }

    const updated = await this.userModel.updateOne({ _id: id }, updateUserDto);
    if (updated?.acknowledged) {
      throw new HttpException('User updated successfully', HttpStatus.OK);
    } else {
      throw new HttpException('Updating user failed', HttpStatus.BAD_REQUEST);
    }
  }

  async remove(id: string) {
    const delResponse = await this.userModel.findByIdAndDelete(id);
    if (delResponse) {
      throw new HttpException('User deleted successfully', HttpStatus.OK);
    } else {
      throw new HttpException('Failed to delete user', HttpStatus.BAD_REQUEST);
    }
    return `This action removes a #${id} user`;
  }
}
