import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Req,
  Res,
} from '@nestjs/common';
import { LocalStorageService } from './storage.service';

@Controller('storage')
export class StorageController {
  constructor(private storage: LocalStorageService) {}

  @Get('*')
  async getAsset(@Req() request, @Res() res) {
    const parts = request.originalUrl.split('/');
    const location = parts.slice(3 - parts.length).join('/');
    try {
      const stream = await this.storage.getFile(location);
      stream.pipe(res);
    } catch (e) {
      throw new HttpException('File not found', HttpStatus.NOT_FOUND);
    }
  }
}
