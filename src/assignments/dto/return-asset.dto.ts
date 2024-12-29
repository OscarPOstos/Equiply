import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class ReturnAssetDto {
  @ApiProperty({ description: 'ID del activo que se devuelve', example: 'asset123' })
  @IsString()
  assetId: string;
}