import { Transform } from 'class-transformer';
import { IsIP, IsNotEmpty, IsNumber, Min } from 'class-validator';

export class CreateEventDto {
  @IsNotEmpty()
  group: string;

  @IsNotEmpty()
  action_name: string;

  @IsNotEmpty()
  target_id: string;

  @IsNotEmpty()
  target_name: string;

  @IsIP()
  @IsNotEmpty()
  location: string;

  metadata?: any;
}

export class EventQueryParamsDto {
  @IsNotEmpty()
  @Transform(({ value }) => Number(value))
  @Min(1)
  @IsNumber()
  batchSize: number;

  actor_id?: string;

  action_id?: string;

  action_name?: string;

  target_id?: string;

  occurred_after?: string;
}
