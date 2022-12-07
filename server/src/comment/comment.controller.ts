import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
  BadRequestException,
} from '@nestjs/common';
import { AuthGuard, CurrentUser } from 'src/guards/AuthGuard.guard';
import { getCurrentTimeFormatted } from 'src/utils/date';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Controller('comment')
@UseGuards(AuthGuard)
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post()
  create(@Body() createCommentDto: CreateCommentDto, @CurrentUser() user) {
    return this.commentService.create(createCommentDto, user);
  }

  @Get()
  findAll() {
    return this.commentService.findAll();
  }

  @Get('by-postId')
  getCommentByPostId(@Query('postId') postId: string) {
    if (!postId) {
      throw new BadRequestException('PostId is required');
    }
    return this.commentService.getCommentByPostId(postId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCommentDto: UpdateCommentDto) {
    return this.commentService.update(+id, updateCommentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commentService.remove(+id);
  }
}
