import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ReportsService } from './reports.service';

@ApiTags('reports')
@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get('summary')
  @ApiOperation({ summary: 'Ver un resumen del inventario' })
  @ApiResponse({ status: 200, description: 'Resumen del inventario retornado exitosamente.' })
  getSummary() {
    return this.reportsService.getSummary();
  }

  @Get('costs')
  @ApiOperation({ summary: 'Ver gastos en adquisición y mantenimiento' })
  @ApiResponse({ status: 200, description: 'Reporte de costos retornado exitosamente.' })
  getCosts() {
    return this.reportsService.getCosts();
  }

  @Get('usage')
  @ApiOperation({ summary: 'Reporte de activos más utilizados' })
  @ApiResponse({ status: 200, description: 'Reporte de uso retornado exitosamente.' })
  getUsage() {
    return this.reportsService.getUsage();
  }
}