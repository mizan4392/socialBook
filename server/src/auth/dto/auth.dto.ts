import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  @IsString()
  userName: string;
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
