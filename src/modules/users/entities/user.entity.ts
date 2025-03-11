import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Order } from '../../order/entities/order.entity';

@Entity('users')
export class User {
  @ApiProperty({ description: 'The unique identifier of the user' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ description: 'The email of the user' })
  @Column({ unique: true })
  email: string;

  @ApiProperty({ description: 'The hashed password of the user' })
  @Column({ name: 'password_hash' })
  passwordHash: string;

  @ApiProperty({ description: 'The first name of the user' })
  @Column({ name: 'first_name', nullable: true })
  firstName: string;

  @ApiProperty({ description: 'The last name of the user' })
  @Column({ name: 'last_name', nullable: true })
  lastName: string;

  @ApiProperty({ description: 'The phone number of the user' })
  @Column({ name: 'phone_number', nullable: true })
  phoneNumber: string;

  @ApiProperty({ description: 'The URL of the user\'s avatar' })
  @Column({ name: 'avatar_url', nullable: true })
  avatarUrl: string;

  @ApiProperty({ description: 'Whether the user\'s email is verified' })
  @Column({ name: 'is_email_verified', default: false })
  isEmailVerified: boolean;

  @ApiProperty({ description: 'Whether the user\'s phone number is verified' })
  @Column({ name: 'is_phone_verified', default: false })
  isPhoneVerified: boolean;

  @ApiProperty({ description: 'The role of the user', enum: ['customer', 'admin', 'seller'] })
  @Column({ default: 'customer' })
  role: string;

  @ApiProperty({ description: 'The date of birth of the user' })
  @Column({ name: 'date_of_birth', type: 'date', nullable: true })
  dateOfBirth: Date;

  @ApiProperty({ description: 'The gender of the user' })
  @Column({ name: 'gender', nullable: true })
  gender: string;

  @ApiProperty({ name: 'created_at', description: 'The timestamp when the user was created' })
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @ApiProperty({ description: 'The timestamp when the user was last updated' })
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @ApiProperty({ description: 'The timestamp of the user\'s last login' })
  @Column({ name: 'last_login_at', type: 'timestamp', nullable: true })
  lastLoginAt: Date;

  @ApiProperty({ description: 'The shipping address of the user' })
  @Column({ name: 'shipping_address', type: 'jsonb', nullable: true })
  shippingAddress: Record<string, any>;

  @ApiProperty({ description: 'The billing address of the user' })
  @Column({ name: 'billing_address', type: 'jsonb', nullable: true })
  billingAddress: Record<string, any>;

  @ApiProperty({ description: 'The preferences of the user' })
  @Column({ name: 'preferences', type: 'jsonb', nullable: true })
  preferences: Record<string, any>;

  @ApiProperty({ description: 'Whether the user account is active' })
  @Column({ name: 'is_active', default: true })
  isActive: boolean;

  @ApiProperty({ description: 'Whether the user account is deleted' })
  @Column({ name: 'is_deleted', default: false })
  isDeleted: boolean;

  @ApiProperty({ description: 'The timestamp when the user account was deleted' })
  @Column({ name: 'deleted_at', type: 'timestamp', nullable: true })
  deletedAt: Date;

  @ApiProperty({ description: 'The orders made by the user' })
  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];

}