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
  UploadedFiles,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard, CurrentUser } from 'src/guards/AuthGuard.guard';
import { User } from './entities/user.entity';
import { FilesInterceptor } from '@nestjs/platform-express';

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

  @Get('user-by-id')
  @UseGuards(AuthGuard)
  findOne(@Query('userId') userId: string) {
    if (!userId) {
      throw new BadRequestException('userId is required');
    }
    return this.userService.findByUserId(userId);
  }

  @Patch('')
  @UseGuards(AuthGuard)
  @UseInterceptors(FilesInterceptor('files'))
  update(
    @Body() updateUserDto: UpdateUserDto,
    @CurrentUser() user,
    @UploadedFiles() files: Express.Multer.File[] | undefined,
  ) {
    return this.userService.update(user?.id, updateUserDto, files);
  }

  //TODO: add admin validation
  @Delete(':id')
  remove(@Param('id') id: string) {
    // return this.userService.remove(id);
  }
}
