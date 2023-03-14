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
import { SecretKeyGuard } from '../auth/guards/secret-key.guard';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @UseGuards(SecretKeyGuard)
  @Post('/sdk')
  async postEventSdk(@Body() createEventData: CreateEventDto, @Req() req) {
    const createdEventResponse = await this.eventsService.createEvent(
      createEventData,
      req.user.id,
    );
    return createdEventResponse;
  }

  @UseGuards(JwtAuthGuard)
  @Post('/')
  async postEvent(@Body() createEventData: CreateEventDto, @Req() req) {
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
