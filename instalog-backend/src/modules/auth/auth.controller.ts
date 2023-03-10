import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterActorDto } from './auth.dto';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async registerOwner(@Body() registerActorDto: RegisterActorDto) {
    return this.authService.registerActor(registerActorDto);
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  public async login(@Request() req) {
    return await this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('secret_key')
  public async getUserInfo(@Request() req) {
    return await this.authService.generateSdkSecretKey(req.user.id);
  }
}
