import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsDateString, IsJSON } from 'class-validator';

export class UpdateUserDto {
  @ApiProperty({ description: 'The first name of the user', required: false })
  @IsOptional()
  @IsString()
  firstName?: string;

  @ApiProperty({ description: 'The last name of the user', required: false })
  @IsOptional()
  @IsString()
  lastName?: string;

  @ApiProperty({ description: 'The phone number of the user', required: false })
  @IsOptional()
  @IsString()
  phoneNumber?: string;

  @ApiProperty({ description: 'The URL of the user\'s avatar', required: false })
  @IsOptional()
  @IsString()
  avatarUrl?: string;

  @ApiProperty({ description: 'The date of birth of the user', required: false })
  @IsOptional()
  @IsDateString()
  dateOfBirth?: Date;

  @ApiProperty({ description: 'The gender of the user', required: false })
  @IsOptional()
  @IsString()
  gender?: string;

  @ApiProperty({ description: 'The shipping address of the user', required: false })
  @IsOptional()
  @IsJSON()
  shippingAddress?: Record<string, any>;

  @ApiProperty({ description: 'The billing address of the user', required: false })
  @IsOptional()
  @IsJSON()
  billingAddress?: Record<string, any>;

  @ApiProperty({ description: 'The preferences of the user', required: false })
  @IsOptional()
  @IsJSON()
  preferences?: Record<string, any>;
}
