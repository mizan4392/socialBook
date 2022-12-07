import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UseGuards,
  Query,
  BadRequestException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard, CurrentUser } from 'src/guards/AuthGuard.guard';
import { User } from './entities/user.entity';

//TODO: need to add a global userNotfound middleware
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    // return this.userService.create(createUserDto);
  }

  @Get('get-logged-in-userInfo')
  @UseGuards(AuthGuard)
  getLoggedInUser(@CurrentUser() user: User) {
    return this.userService.findByUserId(user.id);
  }

  @Get()
  findAll() {
    // return this.userService.findAll();
  }

  // @Post('follow/:id')
  // followUser(@Param('id') id: string) {
  //   console.log('id', +id);
  // }

  // @Post('unFollow/:id')
  // unFollowUser(@Param('id') id: string) {
  //   console.log('id', +id);
  // }

  @Get('user-by-id')
  @UseGuards(AuthGuard)
  findOne(@Query('userId') userId: string) {
    if (!userId) {
      throw new BadRequestException('userId is required');
    }
    return this.userService.findByUserId(userId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    // return this.userService.update(id, updateUserDto);
  }

  //TODO: add admin validation
  @Delete(':id')
  remove(@Param('id') id: string) {
    // return this.userService.remove(id);
  }
}
