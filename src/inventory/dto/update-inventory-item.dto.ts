import { ApiProperty } from '@nestjs/swagger';
import { IsInt, Min } from 'class-validator';

export class UpdateInventoryItemDto {
  @ApiProperty({ description: 'Cantidad actualizada en stock', example: 150 })
  @IsInt()
  @Min(0)
  quantity: number;
}
