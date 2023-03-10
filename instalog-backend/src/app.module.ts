import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { EventsModule } from './modules/events/events.module';
import { ActionsModule } from './modules/actions/actions.module';
import { ActorsModule } from './modules/actors/actors.module';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import configurations from './config/configurations';
import { configurationsSchemaValidation } from './config/configurations.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configurations],
      validationSchema: configurationsSchemaValidation,
    }),
    EventsModule,
    ActionsModule,
    ActorsModule,
    AuthModule,
  ],
  providers: [AppService],
})
export class AppModule {}
