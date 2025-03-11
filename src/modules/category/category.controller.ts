// src/category/category.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards, HttpException, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { CategoryResponseDto } from './dto/category-response.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { JwtAuthGuard } from 'src/common/jwt-auth.guard';

@ApiTags('Category')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'Category created', type: CategoryResponseDto })
  async create(@Body() createCategoryDto: CreateCategoryDto): Promise<CategoryResponseDto> {
    try {
      return await this.categoryService.create(createCategoryDto);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: 'Failed to create category',
          message: error.message,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get()
  @ApiResponse({ status: 200, description: 'List of categories', type: [CategoryResponseDto] })
  async findAll(): Promise<CategoryResponseDto[]> {
    return this.categoryService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Category details', type: CategoryResponseDto })
  async findOne(@Param('id') id: string): Promise<CategoryResponseDto> {
    return this.categoryService.findOne(id);
  }

  @Put(':id')
  @ApiResponse({ status: 200, description: 'Category updated', type: CategoryResponseDto })
  async update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto): Promise<CategoryResponseDto> {
    return this.categoryService.update(id, updateCategoryDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 204, description: 'Category deleted' })
  async delete(@Param('id') id: string): Promise<void> {
    return this.categoryService.delete(id);
  }
}