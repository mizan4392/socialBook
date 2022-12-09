import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto {
  @ApiProperty({
    required: false,
  })
  @IsOptional()
  fullName: string;
  @ApiProperty({
    required: false,
  })
  @IsOptional()
  address: string;
  @ApiProperty({
    required: false,
  })
  @IsOptional()
  website: string;
  @ApiProperty({
    required: false,
  })
  @IsOptional()
  faceBook: string;
  @ApiProperty({
    required: false,
  })
  @IsOptional()
  instagram: string;
  @ApiProperty({
    required: false,
  })
  @IsOptional()
  twitter: string;
  @ApiProperty({
    required: false,
  })
  @IsOptional()
  linkedIn: string;
  @ApiProperty({
    required: false,
  })
  @IsOptional()
  pinterest: string;
}
