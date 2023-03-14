import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class SecretKeyGuard extends AuthGuard('secret-key') {}
