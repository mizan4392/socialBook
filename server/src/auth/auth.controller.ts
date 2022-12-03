import {
  BadRequestException,
  Body,
  ConflictException,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Res,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ApiBody, ApiOperation, ApiProperty } from '@nestjs/swagger';
import { Response } from 'express';

import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private jwtTokenService: JwtService,
    private userService: UserService,
  ) {}

  @Post('login')
  async login(@Body() body: LoginDto) {
    const user = await this.userService.findByUserNameOrEmail(body.userName);

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
      id: user.id,
    };

    return {
      jwt: this.jwtTokenService.sign(payload),
    };
  }

  @ApiOperation({
    description: 'Register a user',
  })
  @ApiBody({
    type: RegisterDto,
  })
  @Post('register')
  async registration(@Body() body: RegisterDto) {
    //find existing user with email & userName
    const existUser = await this.userService.findByUserNameOrEmail(
      body.userName.trim(),
      body.email.trim(),
    );
    //if exist throw conflict error
    if (existUser) {
      throw new ConflictException('User Already exist');
    }
    //else :
    //hash password
    const hash = await this.authService.hashPassword(body.password);
    body.password = hash;
    //create a new user

    const created = await this.userService.createUser(body);
    if (created) {
      throw new HttpException('User Created', HttpStatus.CREATED);
    } else {
      throw new BadRequestException('somthing went wrong');
    }
  }

  @Get('logOut')
  logOut(@Res() res: Response) {
    res
      .clearCookie('access-token', {
        secure: true,
        sameSite: 'none',
      })
      .status(200)
      .json('User has been logged out');
  }
}
