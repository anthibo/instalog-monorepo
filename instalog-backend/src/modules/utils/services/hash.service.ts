import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';

@Injectable()
export class HashService {
  private salt: string;
  constructor(private readonly configService: ConfigService) {
    this.salt = this.configService.get<string>('jwt.salt');
  }

  async hash(data: string) {
    return await bcrypt.hash(data, this.salt);
  }

  async isDataMatch(data: string, hashedData: string) {
    return await bcrypt.compare(data, hashedData);
  }

  async generateToken() {
    const token = crypto.randomBytes(32).toString('hex');
    return token;
  }
}
