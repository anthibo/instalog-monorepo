import { Module } from '@nestjs/common';
import { ActionsService } from './actions.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [ActionsService, PrismaService],
})
export class ActionsModule {}
