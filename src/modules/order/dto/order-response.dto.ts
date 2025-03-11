
// src/order/dto/order-response.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class OrderResponseDto {
  @ApiProperty({ example: 'uuid', description: 'Order ID' })
  id: string;

  @ApiProperty({ example: 'uuid', description: 'User ID' })
  user_id: string;

  @ApiProperty({ example: 999.99, description: 'Total amount' })
  total_amount: number;

  @ApiProperty({ example: 'pending', description: 'Order status' })
  status: string;

  @ApiProperty({ example: '123 Main St, City, Country', description: 'Shipping address' })
  shipping_address: string;

  @ApiProperty({ example: '123 Main St, City, Country', description: 'Billing address' })
  billing_address: string;

  @ApiProperty({ example: 'credit_card', description: 'Payment method' })
  payment_method: string;

  @ApiProperty({ example: 'pending', description: 'Payment status' })
  payment_status: string;

  @ApiProperty({ example: '2023-10-01T12:00:00Z', description: 'Creation timestamp' })
  created_at: Date;

  @ApiProperty({ example: '2023-10-01T12:00:00Z', description: 'Last update timestamp' })
  updated_at: Date;
}