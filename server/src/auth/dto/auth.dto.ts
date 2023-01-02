import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    description: 'UserName',
  })
  @IsNotEmpty()
  @IsString()
  userName: string;

  @ApiProperty({
    description: 'Password',
  })
  @IsNotEmpty()
  @IsString()
  password: string;
}

export class RegisterDto {
  @ApiProperty({
    required: true,
    description: 'userName',
  })
  @IsNotEmpty()
  @IsString()
  userName: string;

  @ApiProperty({
    required: true,
    description: 'password',
  })
  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiProperty({
    required: true,
    description: 'fullName',
  })
  @IsNotEmpty()
  @IsString()
  fullName: string;

  @ApiProperty({
    required: true,
    description: 'email',
  })
  @IsNotEmpty()
  @IsString()
  email: string;
}

export class ApiConfirmRegistration {
  @ApiProperty({ description: 'The pin to use for confirmation.' })
  @IsNotEmpty()
  pin: string;
}
