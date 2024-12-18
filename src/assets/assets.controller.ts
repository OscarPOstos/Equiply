import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Param,
    Body,
    HttpCode,
    HttpStatus,
  } from '@nestjs/common';
  import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
  import { AssetsService } from './assets.service';
import { CreateAssetDto } from './dto/create-asset.dto';
import { UpdateAssetDto } from './dto/update-asset.dto';
  
  @ApiTags('assets')
  @Controller('assets')
  export class AssetsController {
    constructor(private readonly assetsService: AssetsService) {}
  
    @Get()
    @ApiOperation({ summary: 'Listar todos los activos' })
    @ApiResponse({ status: 200, description: 'Lista de activos retornada exitosamente.' })
    getAll() {
      return this.assetsService.getAll();
    }
  
    @Get(':id')
    @ApiOperation({ summary: 'Obtener detalles de un activo' })
    @ApiResponse({ status: 200, description: 'Detalles del activo retornados exitosamente.' })
    @ApiResponse({ status: 404, description: 'Activo no encontrado.' })
    getById(@Param('id') id: string) {
      return this.assetsService.getById(id);
    }
  
    @Post()
    @ApiOperation({ summary: 'Crear un nuevo activo' })
    @ApiResponse({ status: 201, description: 'Activo creado exitosamente.' })
    @ApiResponse({ status: 400, description: 'Datos inválidos.' })
    create(@Body() createAssetDto: CreateAssetDto) {
      return this.assetsService.create(createAssetDto);
    }
  
    @Put(':id')
    @ApiOperation({ summary: 'Actualizar un activo' })
    @ApiResponse({ status: 200, description: 'Activo actualizado exitosamente.' })
    @ApiResponse({ status: 404, description: 'Activo no encontrado.' })
    update(@Param('id') id: string, @Body() updateAssetDto: UpdateAssetDto) {
      return this.assetsService.update(id, updateAssetDto);
    }
  
    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiOperation({ summary: 'Eliminar un activo' })
    @ApiResponse({ status: 204, description: 'Activo eliminado exitosamente.' })
    @ApiResponse({ status: 404, description: 'Activo no encontrado.' })
    delete(@Param('id') id: string) {
      return this.assetsService.delete(id);
    }
  }