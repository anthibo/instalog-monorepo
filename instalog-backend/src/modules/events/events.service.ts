import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateEventDto, EventQueryParamsDto } from './events.dto';
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

  async listEvents(queryParams: EventQueryParamsDto) {
    const restEventQueryObjet = this.buildListEventsQueryObject(queryParams);
    const events = await this.prismaService.event.findMany({
      include: {
        actor: { select: { id: true, name: true, email: true } },
        action: { select: { id: true, name: true } },
      },
      orderBy: { occurred_at: 'desc' },
      ...restEventQueryObjet,
    });
    return {
      events,
      last_occurred_at:
        events.length > 0 ? events[events.length - 1].occurred_at : null,
    };
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

  private buildListEventsQueryObject({
    batchSize,
    actor_id,
    action_id,
    action_name,
    occurred_after,
    target_id,
  }: EventQueryParamsDto): Prisma.EventFindManyArgs {
    const eventQueryBuilder = new EventQueryBuilder(Number(batchSize));
    return eventQueryBuilder
      .actor_id(actor_id)
      .action_id(action_id)
      .action_name(action_name)
      .occurred_after(occurred_after)
      .target_id(target_id)
      .build();
  }
}
class EventQueryBuilder {
  private returnedQuery: Prisma.EventFindManyArgs = { where: {} };
  constructor(private readonly batchSize: number = 6) {
    this.returnedQuery['take'] = batchSize;
  }
  actor_id(actor_id: string) {
    if (actor_id) {
      this.returnedQuery['where']['actor_id'] = actor_id;
    }
    return this;
  }

  action_id(action_id: string) {
    if (action_id) {
      this.returnedQuery['where']['action_id'] = action_id;
    }
    return this;
  }

  action_name(action_name: string) {
    if (action_name) {
      this.returnedQuery['where']['action'] = { name: action_name };
    }
    return this;
  }

  target_id(target_id: string) {
    if (target_id) {
      this.returnedQuery['where']['target_id'] = target_id;
    }
    return this;
  }

  occurred_after(occurred_after: string) {
    if (occurred_after) {
      this.returnedQuery['cursor'] = { occurred_at: occurred_after };
      this.returnedQuery['skip'] = 1;
    }
    return this;
  }
  build(): Prisma.EventFindManyArgs {
    console.log(this.returnedQuery);
    return this.returnedQuery;
  }
}
