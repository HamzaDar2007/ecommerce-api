// src/order/dto/create-order.dto.ts
import { IsUUID, IsDecimal, IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
  @ApiProperty({ example: 'uuid', description: 'User ID' })
  @IsUUID()
  @IsNotEmpty()
  user_id: string;

  @ApiProperty({ example: 999.99, description: 'Total amount' })
  @IsDecimal()
  @IsNotEmpty()
  total_amount: number;

  @ApiProperty({ example: 'pending', description: 'Order status', required: false })
  @IsString()
  @IsOptional()
  status?: string;

  @ApiProperty({ example: '123 Main St, City, Country', description: 'Shipping address' })
  @IsString()
  @IsNotEmpty()
  shipping_address: string;

  @ApiProperty({ example: '123 Main St, City, Country', description: 'Billing address' })
  @IsString()
  @IsNotEmpty()
  billing_address: string;

  @ApiProperty({ example: 'credit_card', description: 'Payment method' })
  @IsString()
  @IsNotEmpty()
  payment_method: string;

  @ApiProperty({ example: 'pending', description: 'Payment status', required: false })
  @IsString()
  @IsOptional()
  payment_status?: string;
}
