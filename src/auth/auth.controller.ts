import {
  Body,
  Controller,
  HttpCode,
  Post,
  Get,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './Dto/register.dto';
import { LoginDto } from './Dto/login.dto';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth') //localhost:3000/auth
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register') //localhost:3000/auth/register
  @HttpCode(201) //where register complete
  async register(@Body() registerDto: RegisterDto) {
    await this.authService.register(registerDto);
    return {
      message: 'Register Complete',
    };
  }

  @Post('/login') //localhost:3000/auth/login
  @HttpCode(200)
  async login(@Body() loginDto: LoginDto) {
    return await this.authService.login(loginDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/profile') //localhost:3000/auth/profile
  async getUserProfile(@Request() req) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    return await this.authService.getUserProfile(Number(req.user.user_id));
  }
}
