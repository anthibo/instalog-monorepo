import { Module } from '@nestjs/common';
import { HashService } from './hash.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  providers: [HashService],
  exports: [HashService],
})
export class UtilsModule {}
