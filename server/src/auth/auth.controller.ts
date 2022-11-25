import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
    private jwtTokenService: JwtService,
  ) {}

  @Post('login')
  async login(@Body() body: LoginDto) {
    // const user = await this.userService.findByUserName(body.userName);
    const user = { password: '', userName: '' };
    if (!user) {
      throw new BadRequestException(`No user found `);
    }
    const passwordValid = await this.authService.validatePassword(
      body.password,
      user.password,
    );
    if (!passwordValid) {
      throw new BadRequestException(`Wrong password`);
    }

    const payload = {
      userName: user.userName,
    };
    return {
      access_token: this.jwtTokenService.sign(payload),
    };
  }
}
