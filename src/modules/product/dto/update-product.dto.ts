import { IsString, IsOptional, IsNumber, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateProductDto {
  @ApiProperty({ example: 'Phone', description: 'Product name', required: false })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({ example: 'All phone items', description: 'Product description', required: false })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ example: 999.99, description: 'Product price', required: false })
  @IsNumber()
  @IsOptional()
  price?: number;

  @ApiProperty({ example: 100, description: 'Product stock', required: false })
  @IsNumber()
  @IsOptional()
  stock?: number;

  @ApiProperty({ example: 'https://example.com/image.jpg', description: 'Product image URL', required: false })
  @IsString()
  @IsOptional()
  image_url?: string;

  @ApiProperty({ example: 'a1b2c3d4-e5f6-7890-g1h2-i3j4k5l6m7n8', description: 'Category ID', required: false })
  @IsUUID()
  @IsOptional()
  category_id?: string;
}