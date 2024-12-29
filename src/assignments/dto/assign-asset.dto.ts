import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class AssignAssetDto {
  @ApiProperty({ description: 'ID del activo a asignar', example: 'asset123' })
  @IsString()
  assetId: string;

  @ApiProperty({
    description: 'ID del usuario o proyecto al que se asigna el activo',
    example: 'user456',
  })
  @IsString()
  assignedTo: string;
}