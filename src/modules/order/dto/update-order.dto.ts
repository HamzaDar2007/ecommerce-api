
// src/order/dto/update-order.dto.ts
import { IsUUID, IsDecimal, IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateOrderDto {
  @ApiProperty({ example: 'uuid', description: 'User ID', required: false })
  @IsUUID()
  @IsOptional()
  user_id?: string;

  @ApiProperty({ example: 999.99, description: 'Total amount', required: false })
  @IsDecimal()
  @IsOptional()
  total_amount?: number;

  @ApiProperty({ example: 'shipped', description: 'Order status', required: false })
  @IsString()
  @IsOptional()
  status?: string;

  @ApiProperty({ example: '123 Main St, City, Country', description: 'Shipping address', required: false })
  @IsString()
  @IsOptional()
  shipping_address?: string;

  @ApiProperty({ example: '123 Main St, City, Country', description: 'Billing address', required: false })
  @IsString()
  @IsOptional()
  billing_address?: string;

  @ApiProperty({ example: 'credit_card', description: 'Payment method', required: false })
  @IsString()
  @IsOptional()
  payment_method?: string;

  @ApiProperty({ example: 'paid', description: 'Payment status', required: false })
  @IsString()
  @IsOptional()
  payment_status?: string;
}
