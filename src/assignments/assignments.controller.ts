import {
    Controller,
    Post,
    Get,
    Param,
    Body,
  } from '@nestjs/common';
  import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
  import { AssignmentsService } from './assignments.service';
import { AssignAssetDto } from './dto/assign-asset.dto';
import { ReturnAssetDto } from './dto/return-asset.dto';

  @ApiTags('assignments')
  @Controller('assignments')
  export class AssignmentsController {
    constructor(private readonly assignmentsService: AssignmentsService) {}
  
    @Post('assign')
    @ApiOperation({ summary: 'Asignar un activo a un usuario o proyecto' })
    @ApiResponse({ status: 201, description: 'Activo asignado exitosamente.' })
    @ApiResponse({ status: 400, description: 'Datos inválidos.' })
    assign(@Body() assignAssetDto: AssignAssetDto) {
      return this.assignmentsService.assign(assignAssetDto);
    }
  
    @Post('return')
    @ApiOperation({ summary: 'Marcar un activo como devuelto' })
    @ApiResponse({ status: 200, description: 'Activo marcado como devuelto exitosamente.' })
    @ApiResponse({ status: 404, description: 'Asignación no encontrada.' })
    return(@Body() returnAssetDto: ReturnAssetDto) {
      return this.assignmentsService.return(returnAssetDto);
    }
  
    @Get(':id/history')
    @ApiOperation({ summary: 'Ver historial de asignaciones de un activo' })
    @ApiResponse({ status: 200, description: 'Historial de asignaciones retornado exitosamente.' })
    @ApiResponse({ status: 404, description: 'Activo no encontrado.' })
    getHistory(@Param('id') id: string) {
      return this.assignmentsService.getHistory(id);
    }
  }