import { Body, Controller, Get, Post } from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from './events.dto';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}
  @Post('/')
  async postEvents(@Body() createEventData: CreateEventDto) {
    const createdEvent = await this.eventsService.createEvent(createEventData);
  }
  @Get('/')
  async listEvents() {
    const events = await this.eventsService.listEvents();
    return { events };
  }
}
