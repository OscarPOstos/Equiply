import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsArray } from 'class-validator';

export class CreateAssetDto {
  @ApiProperty({ description: 'Nombre del activo', example: 'Laptop Dell XPS 15' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'Descripción del activo', example: 'Laptop para desarrollo' })
  @IsString()
  description: string;

  @ApiProperty({
    description: 'Categoría del activo',
    example: 'Tecnología',
    required: false,
  })
  @IsString()
  @IsOptional()
  category?: string;

  @ApiProperty({
    description: 'Etiquetas para clasificar el activo',
    example: ['portátil', 'desarrollo'],
    required: false,
  })
  @IsArray()
  @IsOptional()
  tags?: string[];
}