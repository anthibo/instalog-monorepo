import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsModule } from './events/events.module';
import { ActionsModule } from './actions/actions.module';
import { ActorsModule } from './actors/actors.module';

@Module({
  imports: [EventsModule, ActionsModule, ActorsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
