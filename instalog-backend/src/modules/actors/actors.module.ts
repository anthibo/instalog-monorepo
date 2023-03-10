import { Module } from '@nestjs/common';
import { ActorsService } from './actors.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [ActorsService, PrismaService],
  exports: [ActorsService],
})
export class ActorsModule {}
