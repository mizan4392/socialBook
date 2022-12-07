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
import { LikeService } from './like.service';
import { CreateLikeDto } from './dto/create-like.dto';
import { UpdateLikeDto } from './dto/update-like.dto';
import { AuthGuard, CurrentUser } from 'src/guards/AuthGuard.guard';

@Controller('like')
@UseGuards(AuthGuard)
export class LikeController {
  constructor(private readonly likeService: LikeService) {}

  @Post()
  create(@Body() createLikeDto: CreateLikeDto, @CurrentUser() user) {
    return this.likeService.create(createLikeDto, user);
  }

  @Get()
  findAll() {
    return this.likeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.likeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLikeDto: UpdateLikeDto) {
    return this.likeService.update(+id, updateLikeDto);
  }

  @Delete()
  remove(@Query('postId') postId: string, @CurrentUser() user) {
    if (!postId) {
      throw new BadRequestException('like id is required');
    }
    return this.likeService.remove(+postId, user);
  }
}
