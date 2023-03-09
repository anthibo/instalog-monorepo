import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateEventDto } from './events.dto';

@Injectable()
export class EventsService {
  constructor(private readonly prismaService: PrismaService) {}
  async createEvent(createEventData: CreateEventDto) {
    const createdEvent = await this.prismaService.event.create({data: {}})
  }
  async listEvents() {
    return await this.prismaService.event.findMany();
  }
}
