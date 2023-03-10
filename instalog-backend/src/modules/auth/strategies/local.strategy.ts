import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { Actor } from '@prisma/client';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(email: string, password: string): Promise<Actor> {
    const actor = await this.authService.validateActorCredentials(
      email,
      password,
    );
    if (!actor) {
      throw new UnauthorizedException();
    }
    return actor;
  }
}
