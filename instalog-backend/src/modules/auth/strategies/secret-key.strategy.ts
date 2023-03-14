/* eslint-disable @typescript-eslint/ban-types */
import { HeaderAPIKeyStrategy } from 'passport-headerapikey';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';

@Injectable()
export class SecretKeyStrategy extends PassportStrategy(
  HeaderAPIKeyStrategy,
  'secret-key',
) {
  constructor(private authService: AuthService) {
    super(
      { header: 'secret-key', prefix: '' },
      true,
      async (secretKey, done) => {
        await this.validate(secretKey, done);
      },
    );
  }

  async validate(secretKey: string, done: (error: Error, data) => {}) {
    const actor = await this.authService.validateSecretKey(secretKey);
    if (!actor) {
      done(new UnauthorizedException(), null);
    }
    done(null, actor);
  }
}
