import { ApiProperty } from '@nestjs/swagger';

export class UserResponseDto {
  @ApiProperty({ description: 'The unique identifier of the user' })
  id: string;

  @ApiProperty({ description: 'The email of the user' })
  email: string;

  @ApiProperty({ description: 'The first name of the user' })
  firstName: string;

  @ApiProperty({ description: 'The last name of the user' })
  lastName: string;

  @ApiProperty({ description: 'The phone number of the user' })
  phoneNumber: string;

  @ApiProperty({ description: 'The URL of the user\'s avatar' })
  avatarUrl: string;

  @ApiProperty({ description: 'Whether the user\'s email is verified' })
  isEmailVerified: boolean;

  @ApiProperty({ description: 'Whether the user\'s phone number is verified' })
  isPhoneVerified: boolean;

  @ApiProperty({ description: 'The role of the user', enum: ['customer', 'admin', 'seller'] })
  role: string;

  @ApiProperty({ description: 'The date of birth of the user' })
  dateOfBirth: Date;

  @ApiProperty({ description: 'The gender of the user' })
  gender: string;

  @ApiProperty({ description: 'The timestamp when the user was created' })
  createdAt: Date;

  @ApiProperty({ description: 'The timestamp when the user was last updated' })
  updatedAt: Date;

  @ApiProperty({ description: 'The timestamp of the user\'s last login' })
  lastLoginAt: Date;

  @ApiProperty({ description: 'The shipping address of the user' })
  shippingAddress: Record<string, any>;

  @ApiProperty({ description: 'The billing address of the user' })
  billingAddress: Record<string, any>;

  @ApiProperty({ description: 'The preferences of the user' })
  preferences: Record<string, any>;

  @ApiProperty({ description: 'Whether the user account is active' })
  isActive: boolean;

  @ApiProperty({ description: 'Whether the user account is deleted' })
  isDeleted: boolean;

  @ApiProperty({ description: 'The timestamp when the user account was deleted' })
  deletedAt: Date;
}