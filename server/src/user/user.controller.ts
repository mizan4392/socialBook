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
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from 'src/guards/AuthGuard.guard';

//TODO: need to add a global userNotfound middleware
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    // return this.userService.create(createUserDto);
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

  @Get(':id')
  @UseGuards(AuthGuard)
  findOne(@Param('id') id: string) {
    // return this.userService.findOne(id);
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
