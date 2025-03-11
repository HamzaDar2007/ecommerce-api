import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @ApiProperty({ description: 'The email of the user' })
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'The password of the user' })
  @IsString()
  @MinLength(6)
  password: string;

  @ApiProperty({ description: 'The first name of the user' })
  @IsString()
  firstName: string;

  @ApiProperty({ description: 'The last name of the user' })
  @IsString()
  lastName: string;
}