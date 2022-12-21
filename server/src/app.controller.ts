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
import { EmailService } from './email.service';
import { RadisService } from './radis.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly radisService: RadisService,
    private readonly emailService: EmailService,
  ) {}

  @Get()
  async getHello(@Req() req) {
    console.log('req', req.user);
    await this.emailService.sendEmail({
      to: 'md.mizan4392@gmail.com',
      subject: 'Social book Test email',
      body: 'hello form socialbook',
    });
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
