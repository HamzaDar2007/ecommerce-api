// src/order/order.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards, HttpException, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { OrderService } from './order.service';
import { CreateOrderDto,  } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrderResponseDto } from './dto/order-response.dto';
// import { UpdateProductDto } from './dto/update-product.dto';
import { JwtAuthGuard } from 'src/common/jwt-auth.guard';

@ApiTags('Order')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'Order created', type: OrderResponseDto })
  async create(@Body() createOrderDto: CreateOrderDto): Promise<OrderResponseDto> {
    try {
      return await this.orderService.create(createOrderDto);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: 'Failed to create order',
          message: error.message,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get()
  @ApiResponse({ status: 200, description: 'List of orders', type: [OrderResponseDto] })
  async findAll(): Promise<OrderResponseDto[]> {
    return this.orderService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Order details', type: OrderResponseDto })
  async findOne(@Param('id') id: string): Promise<OrderResponseDto> {
    return this.orderService.findOne(id);
  }

  @Put(':id')
  @ApiResponse({ status: 200, description: 'Order updated', type: OrderResponseDto })
  async update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto): Promise<OrderResponseDto> {
    return this.orderService.update(id, updateOrderDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 204, description: 'Order deleted' })
  async delete(@Param('id') id: string): Promise<void> {
    return this.orderService.delete(id);
  }
}