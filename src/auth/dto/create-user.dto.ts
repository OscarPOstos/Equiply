import { IsString, IsEmail, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ description: 'Nombre del usuario', example: 'Juan Pérez' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'Correo electrónico', example: 'juan@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'Contraseña', example: 'password123' })
  @IsString()
  @MinLength(6)
  password: string;
}