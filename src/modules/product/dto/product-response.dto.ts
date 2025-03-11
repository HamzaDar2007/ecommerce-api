// src/product/dto/product-response.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class ProductResponseDto {
  @ApiProperty({ example: 'uuid', description: 'Product ID' })
  id: string;

  @ApiProperty({ example: 'Smartphone', description: 'Product name' })
  name: string;

  @ApiProperty({ example: 'A high-end smartphone', description: 'Product description' })
  description: string;

  @ApiProperty({ example: 999.99, description: 'Product price' })
  price: number;

  @ApiProperty({ example: 100, description: 'Product stock' })
  stock: number;

  @ApiProperty({ example: 'https://example.com/image.jpg', description: 'Product image URL' })
  image_url: string;

  @ApiProperty({ example: 'uuid', description: 'Category ID' })
  category_id: string;

  @ApiProperty({ example: '2023-10-01T12:00:00Z', description: 'Creation timestamp' })
  created_at: Date;

  @ApiProperty({ example: '2023-10-01T12:00:00Z', description: 'Last update timestamp' })
  updated_at: Date;
}