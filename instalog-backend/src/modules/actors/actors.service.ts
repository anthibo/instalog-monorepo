import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateActorData } from './actor.types';
import { Actor, Prisma } from '@prisma/client';

@Injectable()
export class ActorsService {
  constructor(private readonly prismaService: PrismaService) {}

  async createActor(data: CreateActorData, select?: Prisma.ActorSelect) {
    const actor = await this.prismaService.actor.create({ data, select });
    return actor;
  }

  async updateActor(where: Prisma.ActorWhereUniqueInput, data: Partial<Actor>) {
    const actor = await this.prismaService.actor.update({ where, data });
    return actor;
  }

  async findOne(
    where: Prisma.ActorWhereUniqueInput,
    select?: Prisma.ActorSelect,
  ) {
    const actor = await this.prismaService.actor.findFirst({
      where,
      select,
    });
    return actor as Actor;
  }
}
