import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  BadRequestException,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { AuthGuard, CurrentUser } from 'src/guards/AuthGuard.guard';
import { ApiBody, ApiOperation } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('post')
@UseGuards(AuthGuard)
export class PostController {
  constructor(private readonly postService: PostService) {}

  @ApiOperation({
    summary: 'create post',
  })
  @ApiBody({
    type: CreatePostDto,
  })
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  create(
    @Body() createPostDto: CreatePostDto,
    @UploadedFile() file: Express.Multer.File,
    @CurrentUser() user,
  ) {
    return this.postService.create(createPostDto, file, user);
  }

  @ApiOperation({
    summary: 'get-logged-in-user-news-feed-post',
  })
  @Get('get-logged-in-user-news-feed-post')
  getLoggedInUserNewsFeedPost(@CurrentUser() user) {
    return this.postService.loggedInUserNewsFeedPost(user.id);
  }

  @Get()
  findAll() {
    return this.postService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postService.update(+id, updatePostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postService.remove(+id);
  }
}
