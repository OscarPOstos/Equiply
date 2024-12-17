import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  private users = []; // Simulación de base de datos

  constructor(private readonly jwtService: JwtService) {}

  async register(createUserDto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    const newUser = { ...createUserDto, password: hashedPassword };
    this.users.push(newUser);
    return { message: 'Usuario registrado exitosamente' };
  }

  async login(loginDto: LoginDto) {
    const user = this.users.find((u) => u.email === loginDto.email);
    if (!user || !(await bcrypt.compare(loginDto.password, user.password))) {
      throw new UnauthorizedException('Credenciales inválidas');
    }
    const payload = { email: user.email, sub: user.id };
    const token = this.jwtService.sign(payload);
    return { access_token: token };
  }
}
