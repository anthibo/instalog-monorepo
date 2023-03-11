import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto, EventQueryParamsDto } from './events.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @UseGuards(JwtAuthGuard)
  @Post('/')
  async postEvents(@Body() createEventData: CreateEventDto, @Req() req) {
    const createdEventResponse = await this.eventsService.createEvent(
      createEventData,
      req.user.id,
    );
    return createdEventResponse;
  }
  @Get('/')
  async listEvents(@Query() query: EventQueryParamsDto) {
    const response = await this.eventsService.listEvents(query);
    return response;
  }
}
