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
import {
  ApiBody,
  ApiOperation,
  ApiProperty,
  ApiResponse,
} from '@nestjs/swagger';
import { Response } from 'express';
import { EmailService } from 'src/email.service';

import { UserService } from 'src/user/user.service';
import { generateOtp, getOtpData } from 'src/utils/common';
import { AuthService } from './auth.service';
import { ApiConfirmRegistration, LoginDto, RegisterDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private jwtTokenService: JwtService,
    private userService: UserService,
    private emailService: EmailService,
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
    const code = await generateOtp({
      key: 'registration',
      data: body,
      delTimeOut: 5 * 60 * 1000,
    });
    try {
      await this.emailService.sendEmail({
        to: body.email,
        subject: `[SocialBook] : ${code} is your pin.`,
        body: `Your pin for signing up to SocilBook is ${code} , it will expire after 5 minutes.`,
      });
      return true;
    } catch (e) {
      throw new BadRequestException('');
    }
  }

  @ApiOperation({
    summary:
      'Confirm the registration. This sends an welcome email if registration is successful.',
  })
  @ApiBody({
    type: ApiConfirmRegistration,
  })
  @ApiResponse({
    status: 201,
    description: 'User created',
  })
  @ApiResponse({
    status: 400,
    description: 'User exists or Pin expired',
  })
  @Post('confirm-registration')
  async confirmRegister(@Body() body) {
    const { pin } = body;

    const data = await getOtpData({ key: 'registration', code: pin });
    console.log('data', data);
    if (data) {
      //else :
      //hash password
      const hash = await this.authService.hashPassword(data.password);

      data.password = hash;
      //create a new user

      const created = await this.userService.createUser(data);
      if (created) {
        await this.emailService.sendEmail({
          to: data.email,
          subject: `Welcome to socialBook`,
          body: `Enjoy connecting with like minded people`,
        });
        throw new HttpException('User Created', HttpStatus.CREATED);
      } else {
        throw new BadRequestException('somthing went wrong');
      }
    }

    throw new HttpException(
      'Wrong OTP or it has expired.',
      HttpStatus.BAD_REQUEST,
    );
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
