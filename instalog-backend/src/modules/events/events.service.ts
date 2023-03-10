import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateEventDto } from './events.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class EventsService {
  constructor(private readonly prismaService: PrismaService) {}
  async createEvent(createEventDto: CreateEventDto, actor_id: string) {
    const createEventObject = this.buildCreateEventObject(
      createEventDto,
      actor_id,
    );
    const event = await this.prismaService.event.create({
      data: createEventObject,
    });
    return { message: 'event created successfully', event };
  }

  async listEvents() {
    return await this.prismaService.event.findMany({
      select: {
        id: true,
        actor: { select: { name: true, id: true } },
        action: { select: { id: true, name: true } },
        group: true,
        target_id: true,
        target_name: true,
        location: true,
        occurred_at: true,
        metadata: true,
      },
      orderBy: { occurred_at: 'desc' },
    });
  }

  private buildCreateEventObject(
    createEventDto: CreateEventDto,
    actor_id: string,
  ): Prisma.EventCreateInput {
    const { action_name, group, location, target_id, target_name, metadata } =
      createEventDto;
    const createEventObject: Prisma.EventCreateInput = {
      action: {
        connectOrCreate: {
          where: { name: action_name },
          create: { name: action_name },
        },
      },
      actor: { connect: { id: actor_id } },
      group,
      location,
      target_id,
      target_name,
      metadata,
    };
    return createEventObject;
  }
}
