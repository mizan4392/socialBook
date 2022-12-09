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
} from '@nestjs/common';
import { FollowService } from './follow.service';
import { CreateFollowDto } from './dto/create-follow.dto';
import { UpdateFollowDto } from './dto/update-follow.dto';
import { AuthGuard, CurrentUser } from 'src/guards/AuthGuard.guard';

@Controller('follow')
@UseGuards(AuthGuard)
export class FollowController {
  constructor(private readonly followService: FollowService) {}

  @Post()
  create(@Body() createFollowDto: CreateFollowDto, @CurrentUser() user) {
    return this.followService.create(createFollowDto, user);
  }

  @Get('is-current-user-followed')
  getCurrentUserFollow(
    @CurrentUser() user,
    @Query('followedUserId') followedUserId: string,
  ) {
    return this.followService.getCurrentUserFollow(user.id, +followedUserId);
  }

  @Get()
  findAll() {
    return this.followService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.followService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFollowDto: UpdateFollowDto) {
    return this.followService.update(+id, updateFollowDto);
  }

  @Delete('')
  remove(@Query('followedUserId') followedUserId: string, @CurrentUser() user) {
    return this.followService.remove(+followedUserId, user);
  }
}
