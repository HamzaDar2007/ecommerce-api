// src/product/product.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { ProductService } from './product.service';
import { ProductResponseDto } from './dto/product-response.dto';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { JwtAuthGuard } from 'src/common/jwt-auth.guard';



@ApiTags('Product')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'Product created', type: ProductResponseDto })
  async create(@Body() createProductDto: CreateProductDto): Promise<ProductResponseDto> {
    const product = await this.productService.create(createProductDto);
    return { ...product, category_id: createProductDto.category_id };
  }

  @Get()
  @ApiResponse({ status: 200, description: 'List of products', type: [ProductResponseDto] })
  async findAll(): Promise<ProductResponseDto[]> {
    const products = await this.productService.findAll();
    return products.map(product => ({ ...product, category: product.category, category_id: product.category.id }));
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Product details', type: ProductResponseDto })
  async findOne(@Param('id') id: string): Promise<ProductResponseDto> {
    const product = await this.productService.findOne(id);
    return { ...product, category_id: product.category.id };
  }

  @Put(':id')
  @ApiResponse({ status: 200, description: 'Product updated', type: ProductResponseDto })
  async update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto): Promise<ProductResponseDto> {
    const updatedProduct = await this.productService.update(id, updateProductDto);
    return { ...updatedProduct, category_id: updatedProduct.category.id };
  }

  @Delete(':id')
  @ApiResponse({ status: 204, description: 'Product deleted' })
  async delete(@Param('id') id: string): Promise<void> {
    return this.productService.delete(id);
  }
}