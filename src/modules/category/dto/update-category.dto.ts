// src/category/dto/update-category.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateCategoryDto {
  @ApiProperty({ example: 'Electronics', description: 'Category name', required: false })
  @IsOptional()
  name?: string;

  @ApiProperty({ example: 'All electronic items', description: 'Category description', required: false })
  @IsString()
  @IsOptional()
  description?: string;
}
