
// src/category/dto/category-response.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class CategoryResponseDto {
  @ApiProperty({ example: 'uuid', description: 'Category ID' })
  id: string;

  @ApiProperty({ example: 'Electronics', description: 'Category name' })
  name: string;

  @ApiProperty({ example: 'All electronic items', description: 'Category description' })
  description: string;

  @ApiProperty({ example: '2023-10-01T12:00:00Z', description: 'Creation timestamp' })
  created_at: Date;

  @ApiProperty({ example: '2023-10-01T12:00:00Z', description: 'Last update timestamp' })
  updated_at: Date;
}