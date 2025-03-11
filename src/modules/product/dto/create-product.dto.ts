// src/product/dto/create-product.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber, IsOptional, IsUUID } from 'class-validator';


export class CreateProductDto {
  @ApiProperty({ example: 'Smartphone', description: 'Product name' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'A high-end smartphone', description: 'Product description', required: false })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ example: 999.99, description: 'Product price' })
  @IsNumber()
  @IsNotEmpty()
  price: number;

  @ApiProperty({ example: 100, description: 'Product stock' })
  @IsNumber()
  @IsNotEmpty()
  stock: number;

  @ApiProperty({ example: 'https://example.com/image.jpg', description: 'Product image URL', required: false })
  @IsString()
  @IsOptional()
  image_url?: string;

  @ApiProperty({ example: 'uuid', description: 'Category ID' })
  @IsUUID()
  @IsNotEmpty()
  category_id: string;
}
