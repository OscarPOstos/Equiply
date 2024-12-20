import {
    Controller,
    Get,
    Post,
    Body,
    Param,
  } from '@nestjs/common';
  import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
  import { MaintenanceService } from './maintenance.service';
import { ScheduleMaintenanceDto } from './dto/schedule-maintenance.dto';
  
  @ApiTags('maintenance')
  @Controller('maintenance')
  export class MaintenanceController {
    constructor(private readonly maintenanceService: MaintenanceService) {}
  
    @Get()
    @ApiOperation({ summary: 'Ver todas las tareas de mantenimiento' })
    @ApiResponse({ status: 200, description: 'Lista de tareas de mantenimiento retornada exitosamente.' })
    getAll() {
      return this.maintenanceService.getAll();
    }
  
    @Post('schedule')
    @ApiOperation({ summary: 'Programar mantenimiento para un activo' })
    @ApiResponse({ status: 201, description: 'Mantenimiento programado exitosamente.' })
    @ApiResponse({ status: 400, description: 'Datos inválidos.' })
    schedule(@Body() scheduleMaintenanceDto: ScheduleMaintenanceDto) {
      return this.maintenanceService.schedule(scheduleMaintenanceDto);
    }
  
    @Post('complete/:id')
    @ApiOperation({ summary: 'Registrar mantenimiento completado' })
    @ApiResponse({ status: 200, description: 'Mantenimiento registrado como completado.' })
    @ApiResponse({ status: 404, description: 'Tarea de mantenimiento no encontrada.' })
    complete(@Param('id') id: string) {
      return this.maintenanceService.complete(id);
    }
  
    @Get('alerts')
    @ApiOperation({ summary: 'Ver activos con mantenimiento pendiente' })
    @ApiResponse({ status: 200, description: 'Lista de alertas de mantenimiento retornada exitosamente.' })
    getAlerts() {
      return this.maintenanceService.getAlerts();
    }
  }
  