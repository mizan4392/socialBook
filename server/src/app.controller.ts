import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AppService } from './app.service';
import { RadisService } from './radis.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly radisService: RadisService,
  ) {}

  @Get()
  getHello(@Req() req): string {
    console.log('req', req.user);
    return this.appService.getHello();
  }

  @Get('getFormRadis')
  radisTest(@Query('key') key) {
    return this.radisService.get(key);
  }
  @Post('postinRadis')
  radisPostTest(@Body('key') key: string, @Body('value') value: string) {
    console.log(key);
    console.log(value);
    return this.radisService.set(key, value);
  }
}
