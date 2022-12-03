import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Req() req): string {
    console.log('req', req.user);
    return this.appService.getHello();
  }
}
