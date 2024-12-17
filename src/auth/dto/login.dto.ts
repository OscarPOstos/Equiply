import { IsEmail, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ description: 'Correo electrónico', example: 'juan@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'Contraseña', example: 'password123' })
  @IsString()
  password: string;
}