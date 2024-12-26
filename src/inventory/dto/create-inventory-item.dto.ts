import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, Min, IsOptional } from 'class-validator';

export class CreateInventoryItemDto {
  @ApiProperty({ description: 'Nombre del producto', example: 'Papel de impresión A4' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'Cantidad inicial en stock', example: 100, required: false })
  @IsInt()
  @Min(0)
  @IsOptional()
  quantity?: number;

  @ApiProperty({ description: 'Umbral para alerta de bajo inventario', example: 10 })
  @IsInt()
  @Min(0)
  lowStockThreshold: number;
}
