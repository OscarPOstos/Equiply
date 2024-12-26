import {
    Controller,
    Get,
    Post,
    Put,
    Param,
    Body,
  } from '@nestjs/common';
  import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
  import { InventoryService } from './inventory.service';
import { CreateInventoryItemDto } from './dto/create-inventory-item.dto';
import { UpdateInventoryItemDto } from './dto/update-inventory-item.dto';
  
  @ApiTags('inventory')
  @Controller('inventory')
  export class InventoryController {
    constructor(private readonly inventoryService: InventoryService) {}
  
    @Get()
    @ApiOperation({ summary: 'Ver inventario de consumibles' })
    @ApiResponse({ status: 200, description: 'Lista de consumibles retornada exitosamente.' })
    getAll() {
      return this.inventoryService.getAll();
    }
  
    @Post()
    @ApiOperation({ summary: 'Agregar nuevo stock' })
    @ApiResponse({ status: 201, description: 'Nuevo item de inventario creado exitosamente.' })
    @ApiResponse({ status: 400, description: 'Datos inválidos.' })
    add(@Body() createInventoryItemDto: CreateInventoryItemDto) {
      return this.inventoryService.add(createInventoryItemDto);
    }
  
    @Put(':id')
    @ApiOperation({ summary: 'Actualizar cantidades de stock' })
    @ApiResponse({ status: 200, description: 'Cantidad actualizada exitosamente.' })
    @ApiResponse({ status: 404, description: 'Item no encontrado.' })
    update(@Param('id') id: string, @Body() updateInventoryItemDto: UpdateInventoryItemDto) {
      return this.inventoryService.update(id, updateInventoryItemDto);
    }
  
    @Get('low-stock')
    @ApiOperation({ summary: 'Ver productos con inventario bajo' })
    @ApiResponse({ status: 200, description: 'Lista de productos con bajo inventario retornada exitosamente.' })
    getLowStock() {
      return this.inventoryService.getLowStock();
    }
  }
  
