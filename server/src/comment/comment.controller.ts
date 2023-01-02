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
import {
  ApiBody,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiQuery,
} from '@nestjs/swagger';
import { AuthGuard, CurrentUser } from 'src/guards/AuthGuard.guard';
import { getCurrentTimeFormatted } from 'src/utils/date';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './entities/comment.entity';

@Controller('comment')
@UseGuards(AuthGuard)
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @ApiOperation({
    description: 'Post a comment',
  })
  @ApiBody({
    type: CreateCommentDto,
  })
  @ApiOkResponse({
    type: Comment,
  })
  @Post()
  create(@Body() createCommentDto: CreateCommentDto, @CurrentUser() user) {
    return this.commentService.create(createCommentDto, user);
  }

  @Get()
  findAll() {
    return this.commentService.findAll();
  }

  @ApiOperation({
    description: 'Get comment for a post',
  })
  @ApiQuery({
    schema: {
      properties: {
        postId: {
          type: 'string',
        },
      },
    },
  })
  @ApiOkResponse({
    type: Comment,
    isArray: true,
  })
  @Get('by-postId')
  getCommentByPostId(@Query('postId') postId: string) {
    if (!postId) {
      throw new BadRequestException('PostId is required');
    }
    return this.commentService.getCommentByPostId(postId);
  }

  @ApiOperation({
    description: 'Find comment with commentId',
  })
  @ApiQuery({
    schema: {
      properties: {
        id: {
          type: 'string',
        },
      },
    },
  })
  @ApiOkResponse({
    type: Comment,
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commentService.findOne(+id);
  }

  @ApiOperation({
    description: 'Update comment',
  })
  @ApiBody({
    type: UpdateCommentDto,
  })
  @ApiParam({ name: 'id', type: 'string' })
  @ApiOkResponse({
    type: Comment,
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCommentDto: UpdateCommentDto) {
    return this.commentService.update(+id, updateCommentDto);
  }

  @ApiOperation({
    description: 'Delete comment',
  })
  @ApiParam({ name: 'id', type: 'string' })
  @ApiOkResponse()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commentService.remove(+id);
  }
}
