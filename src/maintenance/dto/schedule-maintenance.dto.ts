import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsDateString } from 'class-validator';

export class ScheduleMaintenanceDto {
  @ApiProperty({ description: 'ID del activo a mantener', example: '12345' })
  @IsString()
  @IsNotEmpty()
  assetId: string;

  @ApiProperty({
    description: 'Descripción del mantenimiento programado',
    example: 'Revisión anual del motor.',
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    description: 'Fecha programada para el mantenimiento',
    example: '2024-01-15',
  })
  @IsDateString()
  @IsOptional()
  scheduledDate?: string;
}
