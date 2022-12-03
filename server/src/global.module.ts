import { Global, Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { environment } from './environment/environment';

import { JwtModule } from '@nestjs/jwt';

@Global()
@Module({
  imports: [
    JwtModule.register({
      secret: environment.jwtSecrete,
      signOptions: { expiresIn: '8h' },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class GlobalModule {}
